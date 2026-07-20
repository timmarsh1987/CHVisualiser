const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "../../dist");
const publicDir = path.join(__dirname, "../../public");

if (!fs.existsSync(distDir)) {
  console.error("dist/ not found. Run npm run build first.");
  process.exit(1);
}

fs.mkdirSync(publicDir, { recursive: true });

const copied = [];
for (const name of fs.readdirSync(distDir)) {
  if (!name.endsWith(".js")) continue;
  fs.copyFileSync(path.join(distDir, name), path.join(publicDir, name));
  copied.push(name);
}

console.log(`Copied ${copied.length} bundle(s) to public/: ${copied.join(", ")}`);
