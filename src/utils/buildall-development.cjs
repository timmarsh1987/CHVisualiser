const { spawn } = require('child_process');
const { readdir } = require('fs').promises;

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const [executable, ...args] = command.split(' ');
    const childProcess = spawn(executable, args, { stdio: 'inherit', shell: true });

    childProcess.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command '${command}' exited with code ${code}`));
      }
    });

    childProcess.on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  const componentsPath = './src/components';

  try {
    const files = await readdir(componentsPath, { withFileTypes: true });

    const components = files
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    const commandPromises = components.map(component => {
      const command = `npm run localbuild --component=${component} -define:production=production`;
      return runCommand(command);
    });

    await Promise.all(commandPromises);
    console.log('All commands completed.');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
