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

const bugCustomFields =  {
  priority: {
    id: "3"
  },
  customfield_10260: {
    "id": "10451",
    "value": "Dev",
  },
  customfield_10159: {
    "id": "10198",
    "value": "Production",
  }
};

const taskCustomFields = {
  customfield_10258: { "id": "10439", "value": "New Value" }
};

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
      ...(ticketType === 'Task' && taskCustomFields),
      ...(ticketType === 'Bug' && bugCustomFields),
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
                "text": `${description}\n\n\n/:\\ Created by gitStream`
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
    console.log({response});
    return `${getJiraUrl()}/browse/${response.data.key}`;
  } catch (error) {
    console.error('Error creating JIRA ticket:', error);
    throw error;
  }
}

module.exports = createJiraTicket;