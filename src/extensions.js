const vscode = require('vscode');
const { renderComponent } = require('./webviewRenderer');

function activate(context) {
    console.log('Content Hub React Extension is now active!');

    let renderCommand = vscode.commands.registerCommand('extension.renderComponent', async () => {
        const entityId = await vscode.window.showInputBox({
            prompt: 'Enter the entity ID to fetch data for the component',
        });
        if (entityId) {
            renderComponent(entityId);
        }
    });

    let configCommand = vscode.commands.registerCommand('extension.configureAPI', async () => {
        // Simple configuration dialog
        const apiUrl = await vscode.window.showInputBox({
            prompt: 'Enter Content Hub API URL',
            value: 'https://your-content-hub-url.com'
        });
        
        const apiToken = await vscode.window.showInputBox({
            prompt: 'Enter API Token',
            password: true
        });
        
        if (apiUrl && apiToken) {
            await vscode.workspace.getConfiguration('contentHubSettings').update('apiUrl', apiUrl, true);
            await vscode.workspace.getConfiguration('contentHubSettings').update('apiToken', apiToken, true);
            vscode.window.showInformationMessage('API configuration saved!');
        }
    });

    context.subscriptions.push(renderCommand, configCommand);
}

exports.activate = activate;

function deactivate() {
    console.log('Content Hub React Extension is now deactivated.');
}

exports.deactivate = deactivate;
