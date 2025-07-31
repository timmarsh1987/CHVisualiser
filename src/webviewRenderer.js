const vscode = require('vscode');
const path = require('path');
const { fetchData } = require('./fetchContentHubData');

async function renderComponent(entityId) {
    const data = await fetchData(entityId);

    // Create a simple HTML representation of the data
    const componentHtml = `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2>Entity Data for ID: ${entityId}</h2>
            <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">
                ${JSON.stringify(data, null, 2)}
            </pre>
        </div>
    `;

    const panel = vscode.window.createWebviewPanel(
        'componentPreview',
        'Component Preview',
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    const scriptPath = vscode.Uri.file(path.join(__dirname, 'hotReloadScript.js')).with({ scheme: 'vscode-resource' });
    
    panel.webview.onDidReceiveMessage(message => {
        if (message.command === 'reload') {
            renderComponent(entityId);  // Re-render the component
        }
    });
    
    panel.webview.html = `
        <html>
        <body>
            ${componentHtml}
            <script src="${scriptPath}"></script>
        </body>
        </html>`;
}

module.exports = { renderComponent };
