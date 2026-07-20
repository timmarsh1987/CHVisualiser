const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const COMPONENTS = [
  "CHEntityAncestry",
  "CHEntityMap",
  "CHFloorplan",
  "CHSalesforce",
  "CHArticheck",
  "CHVisualiser",
  "CHIntentIntelligence",
  "CHComponentLibrary",
  "CHMarketingBuilder",
  "CHBrandCompliance",
];
const distDir = path.join(__dirname, "../../dist");

function runVite(component) {
  const result = spawnSync("npx", ["vite", "build"], {
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      COMPONENT: component,
    },
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const only = process.env.COMPONENT ?? process.env.npm_config_component;
const targets =
  only && COMPONENTS.includes(only) ? [only] : COMPONENTS;

if (targets.length > 1 && fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

for (const name of targets) {
  runVite(name);
}

console.log(`Built: ${targets.map((n) => `${n}.js`).join(", ")}`);
