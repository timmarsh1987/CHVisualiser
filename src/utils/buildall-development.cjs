const { spawn } = require('child_process');

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
  try {
    await runCommand('npm run lint');
    await runCommand('npm run build');
    console.log('All components built (CHEntityAncestry.js, CHEntityMap.js, CHFloorplan.js, CHSalesforce.js, CHArticheck.js, CHVisualiser.js, CHIntentIntelligence.js, CHComponentLibrary.js, CHMarketingBuilder.js, CHBrandCompliance.js).');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
