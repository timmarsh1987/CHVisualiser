import { readFile, writeFile } from "node:fs/promises";
import { parseArgs } from "node:util";
import { pathToFileURL } from "node:url";
import { loadDefaultFonts } from "./fontFiles.js";
import { renderDocument } from "./render.js";
import { parseDataContext, parseTemplate } from "./schema.js";

export interface CliIo {
  stdout: (text: string) => void;
  stderr: (text: string) => void;
}

const defaultIo: CliIo = {
  stdout: (text) => {
    process.stdout.write(text);
  },
  stderr: (text) => {
    process.stderr.write(text);
  },
};

export async function runCli(argv: string[], io: CliIo = defaultIo): Promise<number> {
  try {
    const { values } = parseArgs({
      args: argv,
      options: {
        template: { type: "string" },
        data: { type: "string" },
        background: { type: "string" },
        out: { type: "string" },
      },
      strict: true,
    });
    const templatePath = required(values.template, "template");
    const dataPath = required(values.data, "data");
    const outPath = required(values.out, "out");
    const [templateJson, dataJson, fonts] = await Promise.all([
      readFile(templatePath, "utf8"),
      readFile(dataPath, "utf8"),
      loadDefaultFonts(),
    ]);
    const template = parseTemplate(JSON.parse(templateJson) as unknown);
    const data = parseDataContext(JSON.parse(dataJson) as unknown);
    const backgroundPdf = values.background ? new Uint8Array(await readFile(values.background)) : undefined;
    if (!backgroundPdf && !template.layout) {
      throw new Error("Missing --background.");
    }
    const result = await renderDocument(template, data, {
      backgroundPdf,
      fonts,
      generatedAt: new Date().toISOString(),
    });
    await writeFile(outPath, result.bytes);
    io.stdout(`${JSON.stringify(result.report, null, 2)}\n`);
    return 0;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Render failed.";
    io.stderr(`${message}\n`);
    return 1;
  }
}

function required(value: string | undefined, name: string): string {
  if (!value) throw new Error(`Missing --${name}.`);
  return value;
}

const entry = process.argv[1];
const invokedDirectly = entry !== undefined && import.meta.url === pathToFileURL(entry).href;

if (invokedDirectly) {
  runCli(process.argv.slice(2)).then((code) => {
    process.exitCode = code;
  });
}
