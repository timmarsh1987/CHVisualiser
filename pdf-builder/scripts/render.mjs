import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const workspace = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(resolve(workspace, "packages/render-core/package.json"));
const tsx = require.resolve("tsx/cli");
const cli = resolve(workspace, "packages/render-core/src/cli.ts");
const result = spawnSync(process.execPath, [tsx, cli, ...process.argv.slice(2)], {
  stdio: "inherit",
  cwd: process.cwd(),
});

process.exit(result.status ?? 1);
