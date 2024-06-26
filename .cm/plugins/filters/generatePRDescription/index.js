const axios = require('axios');

async function createJiraTicket(ticketType, summary, description) {
  const jiraUrl = 'https://linearb.atlassian.net';
  const apiEndpoint = `${jiraUrl}/rest/api/3/issue`;
  const authToken = process.env.JIRA_API_TOKEN;

  const payload = {
    fields: {
      project: {
        key: 'LINBEE' // Replace with your actual project key
      },
      issuetype: {
        name: ticketType
      },
      summary,
      description
    }
  };

  try {
    const response = await axios.post(apiEndpoint, payload, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`email@example.com:${authToken}`).toString('base64')}`, // Replace with your actual email and token
        'Content-Type': 'application/json'
      }
    });

    const ticketKey = response.data.key;
    return `${jiraUrl}/browse/${ticketKey}`;
  } catch (error) {
    console.error('Error creating JIRA ticket:', error);
    throw error;
  }
}

async function generatePRDescription(branch, pr) {
  if (process.env[__filename]) {
    return process.env[__filename];
  }

  const commitTypes = {
    feat: [],
    fix: [],
    chore: [],
    docs: [],
    style: [],
    refactor: [],
    perf: [],
    test: [],
    build: [],
    ci: [],
    other: []
  };

  branch.commits.messages.filter(message => !message.includes('Merge branch')).forEach(message => {
    const match = message.match(/^(feat|fix|chore|docs|style|refactor|perf|test|build|ci):/);
    if (match) {
      commitTypes[match[1]].push(message.replace(`${match[1]}:`, '').trim());
    } else {
      commitTypes.other.push(message);
    }
  });

  const formatCommitSection = (type, commits) =>
    commits.length ? `- **${type}:**\n${commits.map(msg => `  - ${msg}`).join('\n')}\n` : '';

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

  const result = `
## Branch Details
- **Base:** ${branch.base}

## What changed ?
${Object.entries(commitTypes)
      .map(([type, commits]) => formatCommitSection(type, commits))
      .join('')}

## Checklist
 - [${testedInDev}] Flow Tested on dev
 - [${addTests}] Add tests  

${additionalInfoSection ? additionalInfoSection : '## Additional info'}
${additionalInfoSection.includes(jiraTicketInfo) ? '' : jiraTicketInfo}
`;
  process.env[__filename] = result.split('\n').join('\n            ');
  return process.env[__filename];
}

module.exports = { filter: generatePRDescription, async: true };
