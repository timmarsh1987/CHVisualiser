import { resolve } from 'node:path';
import { extractProvenance } from './provenance.js';

const fileArgument = process.argv.slice(2).find((value) => value !== '--raw');
if (!fileArgument) {
  console.error('Usage: npm run inspect -- <image-path> [--raw]');
  process.exitCode = 1;
} else {
  const result = await extractProvenance(resolve(fileArgument));
  const output = process.argv.includes('--raw')
    ? result
    : { ...result, rawManifest: result.rawManifest ? '[present; pass --raw to print]' : null };
  console.log(JSON.stringify(output, null, 2));
}
