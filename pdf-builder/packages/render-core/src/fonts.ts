import fontkit from "@pdf-lib/fontkit";
import { FontResolutionError } from "./errors.js";
import type { FontDef } from "./schema.js";

export const LIBERATION_SANS: FontDef = {
  family: "Liberation Sans",
  regular: "LiberationSans-Regular.ttf",
  bold: "LiberationSans-Bold.ttf",
  italic: "LiberationSans-Italic.ttf",
  boldItalic: "LiberationSans-BoldItalic.ttf",
};

export interface FontFaceSelection {
  fileName: string;
  fallback: string | null;
}

export interface FontMetrics {
  widthOf(text: string, fontSize: number): number;
  ascent(fontSize: number): number;
  missingGlyphs(text: string): string[];
}

interface FontKitGlyph {
  id: number;
}

interface FontKitFont {
  unitsPerEm: number;
  ascent: number;
  glyphForCodePoint(codePoint: number): FontKitGlyph;
  layout(text: string): { advanceWidth: number };
}

interface FontKitModule {
  create(bytes: Uint8Array): FontKitFont;
}

export function resolveFontFace(fonts: FontDef[], family: string, bold: boolean, italic: boolean): FontFaceSelection {
  const def = fonts.find((font) => font.family === family);
  if (!def) {
    throw new FontResolutionError(`Font family ${family} is not listed on the template.`, "missing-family");
  }
  if (bold && italic && def.boldItalic) return { fileName: def.boldItalic, fallback: null };
  if (bold && !italic && def.bold) return { fileName: def.bold, fallback: null };
  if (!bold && italic && def.italic) return { fileName: def.italic, fallback: null };
  if (!bold && !italic) return { fileName: def.regular, fallback: null };
  const requested = bold && italic ? "bold italic" : bold ? "bold" : "italic";
  return {
    fileName: def.regular,
    fallback: `${requested} was requested but ${family} has no ${requested} face. Regular was used instead.`,
  };
}

export function createFontMetrics(fontBytes: Uint8Array): FontMetrics {
  const created = (fontkit as FontKitModule).create(fontBytes);
  return {
    widthOf(text, fontSize) {
      if (text.length === 0) return 0;
      const advance = created.layout(text).advanceWidth;
      return (advance / created.unitsPerEm) * fontSize;
    },
    ascent(fontSize) {
      return (created.ascent / created.unitsPerEm) * fontSize;
    },
    missingGlyphs(text) {
      const missing: string[] = [];
      const seen = new Set<string>();
      for (const char of text) {
        if (char === "\n" || char === " " || char === "\t" || char === "\u00A0") continue;
        const code = char.codePointAt(0);
        if (code === undefined) continue;
        const glyph = created.glyphForCodePoint(code);
        if (!glyph || glyph.id === 0) {
          if (!seen.has(char)) {
            seen.add(char);
            missing.push(char);
          }
        }
      }
      return missing;
    },
  };
}
