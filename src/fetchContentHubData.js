const vscode = require('vscode');
const fetch = require('node-fetch');

async function fetchData(entityId) {
    const settings = vscode.workspace.getConfiguration('contentHubSettings');
    const apiUrl = settings.get('apiUrl');
    const apiToken = settings.get('apiToken');

    const response = await fetch(`${apiUrl}/api/entities/${entityId}`, {
        headers: {
            Authorization: `Bearer ${apiToken}`,
        }
    });

    return await response.json();
}

async function fetchGraphQLData(query) {
    const settings = vscode.workspace.getConfiguration('contentHubSettings');
    const apiUrl = settings.get('apiUrl');
    const apiToken = settings.get('apiToken');

    const response = await fetch(`${apiUrl}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({ query })
    });

    return await response.json();
}

module.exports = { fetchData, fetchGraphQLData };
