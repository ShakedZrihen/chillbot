const axios = require('axios');

// Configuration
function getJiraUrl() {
  return 'https://linearb.atlassian.net';
}

function getApiEndpoint() {
  return `${getJiraUrl()}/rest/api/3/issue`;
}

function getAuthToken() {
  return process.env.JIRA_API_TOKEN;
}

function getAuthHeader(email, token) {
  return `Basic ${Buffer.from(`${email}:${token}`).toString('base64')}`;
}

// Payload creation
function createPayload(ticketType, summary, description) {
  const MAP_ISSUE_TO_ID = {
    Task: { "id": "10026" },
    Bug: { "id": "10028" }
  };

  return {
    fields: {
      project: { "id": "10060" }, // LINBEE project ID
      issuetype: MAP_ISSUE_TO_ID[ticketType] ?? MAP_ISSUE_TO_ID.Task,
      ...(ticketType === 'Task' && {
        customfield_10258: { "id": "10439", "value": "New Value" }
      }),
      summary,
      description: {
        "version": 1,
        "type": "doc",
        "content": [
          {
            "type": "paragraph",
            "content": [
              {
                "type": "text",
                "text": `${description}\n/:\\ Created by gitStream`
              }
            ]
          }
        ]
      }
    }
  };
}

// Create JIRA ticket
async function createJiraTicket(ticketType, summary, description) {
  const payload = createPayload(ticketType, summary, description);

  try {
    const response = await axios.post(getApiEndpoint(), payload, {
      headers: {
        'Authorization': getAuthHeader('shaked@linearb.io', getAuthToken()),
        'Content-Type': 'application/json'
      }
    });

    return `${getJiraUrl()}/browse/${response.data.key}`;
  } catch (error) {
    console.error('Error creating JIRA ticket:', error);
    throw error;
  }
}

// Parse commit messages
function parseCommitMessages(messages) {
  const commitTypes = {
    feat: [], fix: [], chore: [], docs: [], style: [], refactor: [],
    perf: [], test: [], build: [], ci: [], other: []
  };

  messages.filter(message => !message.includes('Merge branch')).forEach(message => {
    const match = message.match(/^(feat|fix|chore|docs|style|refactor|perf|test|build|ci):/);
    if (match) {
      commitTypes[match[1]].push(message.replace(`${match[1]}:`, '').trim());
    } else {
      commitTypes.other.push(message);
    }
  });

  return commitTypes;
}

// Format commit section
function formatCommitSection(type, commits) {
  return commits.length ? `- **${type}:**\n${commits.map(msg => `  - ${msg}`).join('\n')}\n` : '';
}

// Generate PR description
async function generatePRDescription(branch, pr, callback) {
  if (process.env[__filename]) {
    return callback(null, process.env[__filename]);
  }

  const commitTypes = parseCommitMessages(branch.commits.messages);

  const addTests = branch.commits.messages.some(message => message.includes('test:')) ? 'X' : ' ';
  const testedInDev = pr.comments.some(comment => comment.content.includes('/dev')) ? 'X' : ' ';

  let jiraTicketInfo = '- [ ] Create JIRA ticket';
  const jiraTicketMatch = pr.title.match(/LINBEE-\d+/) || branch.name.match(/LINBEE-\d+/);

  if (jiraTicketMatch) {
    jiraTicketInfo = `* [Jira Ticket](https://linearb.atlassian.net/browse/${jiraTicketMatch[0]})`;
  } else if (pr.description.includes('[x] Create JIRA ticket') || pr.description.includes('[X] Create JIRA ticket')) {
    try {
      const includeFeatures = branch.commits.messages.some(msg => msg.includes('feat:'));
      const includeBugs = branch.commits.messages.some(msg => msg.includes('fix:'));
      const ticketType = includeFeatures ? 'Task' : includeBugs ? 'Bug' : 'Task';
      const ticketUrl = await createJiraTicket(ticketType, pr.title, pr.url);
      jiraTicketInfo = `* [Jira Ticket](${ticketUrl})`;
    } catch (error) {
      console.error('Failed to create JIRA ticket:', error);
    }
  }

  const additionalInfoSection = pr.description.match(/## Additional info[\s\S]*/);

  const removeCreateJiraTicketIfCreated = (section) => {
    if (jiraTicketInfo.includes('[Jira Ticket]')) {
      return section
        .replace('- [ ] Create JIRA ticket', '')
        .replace('- [x] Create JIRA ticket', '')
        .replace('- [X] Create JIRA ticket', '');
    }
    return section;
  };

  const result = `
## Branch Details
- **Base:** ${branch.base}

## What changed ?
${Object.entries(commitTypes).map(([type, commits]) => formatCommitSection(type, commits)).join('')}

## Checklist
 - [${testedInDev}] Flow Tested on dev
 - [${addTests}] Add tests  

 ${additionalInfoSection ? removeCreateJiraTicketIfCreated(additionalInfoSection[0].trim()) : '## Additional info'}
 ${(additionalInfoSection && additionalInfoSection[0].includes('Create JIRA ticket')) ? '' : jiraTicketInfo}
`;

  process.env[__filename] = result.split('\n').join('\n            ');
  return callback(null, process.env[__filename]);
}

module.exports = { filter: generatePRDescription, async: true };
