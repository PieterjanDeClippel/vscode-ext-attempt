import { commands, ExtensionContext, window } from 'vscode';

// On activation
export function activate(context: ExtensionContext) {
  // Register command "start" 
  commands.registerCommand('sayhello', () => {
    window.showInformationMessage('Hello World');
  })
}

// F5
// ctrl+P
// >sayHello