import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const FONT_FILES = [
  "LiberationSans-Regular.ttf",
  "LiberationSans-Bold.ttf",
  "LiberationSans-Italic.ttf",
  "LiberationSans-BoldItalic.ttf",
] as const;

export async function loadDefaultFonts(): Promise<Record<string, Uint8Array>> {
  const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "fonts");
  const fonts: Record<string, Uint8Array> = {};
  for (const name of FONT_FILES) {
    const bytes = await readFile(join(dir, name));
    fonts[name] = new Uint8Array(bytes);
  }
  return fonts;
}
