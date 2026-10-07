import { LIBERATION_SANS, parseDataContext, parseTemplate, renderDocument } from '../../../pdf-builder/packages/render-core/src/browser';
import type { Template } from '../../../pdf-builder/packages/render-core/src/browser';
import boldItalicUrl from '../../../pdf-builder/packages/render-core/fonts/LiberationSans-BoldItalic.ttf?url';
import boldUrl from '../../../pdf-builder/packages/render-core/fonts/LiberationSans-Bold.ttf?url';
import italicUrl from '../../../pdf-builder/packages/render-core/fonts/LiberationSans-Italic.ttf?url';
import regularUrl from '../../../pdf-builder/packages/render-core/fonts/LiberationSans-Regular.ttf?url';

const FONT_URLS: Record<string, string> = {
  'LiberationSans-Regular.ttf': regularUrl,
  'LiberationSans-Bold.ttf': boldUrl,
  'LiberationSans-Italic.ttf': italicUrl,
  'LiberationSans-BoldItalic.ttf': boldItalicUrl,
};

let fontsPromise: Promise<Record<string, Uint8Array>> | null = null;

function copyBytes(bytes: Uint8Array): Uint8Array {
  const copy = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(copy).set(bytes);
  return new Uint8Array(copy);
}

async function loadFonts(): Promise<Record<string, Uint8Array>> {
  if (!fontsPromise) {
    fontsPromise = Promise.all(
      Object.entries(FONT_URLS).map(async ([name, url]) => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Could not load font ${name}.`);
        return [name, copyBytes(new Uint8Array(await response.arrayBuffer()))] as const;
      })
    ).then((entries) => Object.fromEntries(entries));
  }
  return fontsPromise;
}

export function blankTemplate(name: string): Template {
  return parseTemplate({
    id: 'pdf-template',
    name,
    version: 1,
    language: 'en',
    fonts: [LIBERATION_SANS],
    defaults: { fontFamily: 'Liberation Sans', fontSize: 12, color: '#000000' },
    pages: [{ pageIndex: 0, size: { width: 612, height: 792 }, regions: [] }],
    layout: {
      columnCount: 12,
      margin: 36,
      columnGap: 6,
      rowGap: 10,
      rows: [],
    },
  });
}

export function readTemplate(json: string, name: string): Template {
  if (!json.trim()) return blankTemplate(name);
  const template = parseTemplate(JSON.parse(json) as unknown);
  template.name = name || template.name;
  return template;
}

export async function renderTemplate(
  template: Template,
  data: Record<string, unknown>
): Promise<Uint8Array> {
  const fonts = await loadFonts();
  const result = await renderDocument(template, parseDataContext(data), {
    fonts,
    generatedAt: new Date().toISOString(),
  });
  return result.bytes;
}
