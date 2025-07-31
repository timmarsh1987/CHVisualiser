const vscode = acquireVsCodeApi();

setInterval(() => {
    vscode.postMessage({ command: 'reload' });
}, 3000);
