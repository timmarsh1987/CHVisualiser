import { inflate } from 'pako';
import type { DesignerFont, Layer } from './types';

const FALLBACK_FONT = 'Georgia, "Times New Roman", serif';

/** Faces the browser can draw without an uploaded font file. Georgia stays the empty default. */
export const BUILTIN_FONTS: { id: string; label: string; stack: string }[] = [
  { id: 'Arial', label: 'Arial', stack: 'Arial, Helvetica, sans-serif' },
  { id: 'Calibri', label: 'Calibri', stack: 'Calibri, Candara, sans-serif' },
  { id: 'Cambria', label: 'Cambria', stack: 'Cambria, Georgia, serif' },
  { id: 'Candara', label: 'Candara', stack: 'Candara, Calibri, sans-serif' },
  { id: 'Consolas', label: 'Consolas', stack: 'Consolas, "Courier New", monospace' },
  { id: 'Constantia', label: 'Constantia', stack: 'Constantia, Georgia, serif' },
  { id: 'Corbel', label: 'Corbel', stack: 'Corbel, "Segoe UI", sans-serif' },
  { id: 'Courier New', label: 'Courier New', stack: '"Courier New", Courier, monospace' },
  { id: 'Franklin Gothic Medium', label: 'Franklin Gothic', stack: '"Franklin Gothic Medium", Arial, sans-serif' },
  { id: 'Garamond', label: 'Garamond', stack: 'Garamond, "Palatino Linotype", serif' },
  { id: 'Gill Sans', label: 'Gill Sans', stack: '"Gill Sans", "Gill Sans MT", Calibri, sans-serif' },
  { id: 'Helvetica', label: 'Helvetica', stack: 'Helvetica, Arial, sans-serif' },
  { id: 'Impact', label: 'Impact', stack: 'Impact, Haettenschweiler, sans-serif' },
  { id: 'Palatino Linotype', label: 'Palatino', stack: '"Palatino Linotype", Palatino, "Book Antiqua", serif' },
  { id: 'Segoe UI', label: 'Segoe UI', stack: '"Segoe UI", sans-serif' },
  { id: 'Tahoma', label: 'Tahoma', stack: 'Tahoma, Verdana, sans-serif' },
  { id: 'Times New Roman', label: 'Times New Roman', stack: '"Times New Roman", Times, serif' },
  { id: 'Trebuchet MS', label: 'Trebuchet MS', stack: '"Trebuchet MS", sans-serif' },
  { id: 'Verdana', label: 'Verdana', stack: 'Verdana, Geneva, sans-serif' },
];

export function builtinFont(family?: string): (typeof BUILTIN_FONTS)[number] | undefined {
  const name = family?.trim();
  if (!name) return undefined;
  return BUILTIN_FONTS.find((font) => font.id === name);
}

export function fontFamilyStack(family?: string): string {
  const name = family?.trim();
  if (!name || name.toLowerCase() === 'georgia') return FALLBACK_FONT;
  const builtin = builtinFont(name);
  if (builtin) return builtin.stack;
  return `"${name.replace(/"/g, '')}", ${FALLBACK_FONT}`;
}

type FontLayer = Pick<Layer, 'type' | 'fontFamily' | 'fontWeight' | 'fontStyle'>;

/** A text layer uses this loaded face by PostScript name, or by family plus weight. */
export function layerUsesFont(layer: FontLayer, font: DesignerFont, fonts: DesignerFont[]): boolean {
  if (layer.type !== 'text') return false;
  const name = layer.fontFamily?.trim();
  if (!name) return false;
  if (name === font.postScriptName) return true;
  if (name !== font.family) return false;
  const sameFamily = fonts.filter((item) => item.family === font.family);
  if (sameFamily.length === 1) return true;
  return (layer.fontWeight ?? 400) === font.weight && (layer.fontStyle ?? 'normal') === font.style;
}

/** Georgia is the default. A named face that is not in the document is missing. */
export function layerFontIsLoaded(layer: FontLayer, fonts: DesignerFont[]): boolean {
  if (layer.type !== 'text') return true;
  const name = layer.fontFamily?.trim();
  if (!name || name.toLowerCase() === 'georgia' || builtinFont(name)) return true;
  return fonts.some((font) => layerUsesFont(layer, font, fonts));
}

/** Distinct font names requested by these layers and not loaded. */
export function missingFontNames(layers: Layer[], fonts: DesignerFont[]): string[] {
  const names: string[] = [];
  for (const layer of layers) {
    if (layer.type !== 'text' || !layer.visible) continue;
    const name = layer.fontFamily?.trim();
    if (!name || layerFontIsLoaded(layer, fonts)) continue;
    if (!names.includes(name)) names.push(name);
  }
  return names;
}

export async function fontsFromFiles(files: File[]): Promise<DesignerFont[]> {
  const fonts: DesignerFont[] = [];
  for (const file of files) {
    const buffer = await file.arrayBuffer();
    const info = readFontInfo(buffer, file.name);
    fonts.push({
      id: fontId(),
      family: info.family,
      postScriptName: info.postScriptName,
      weight: info.weight,
      style: info.style,
      dataUrl: await dataUrlFromBuffer(buffer, file),
    });
  }
  return fonts;
}

interface FaceDescriptor {
  key: string;
  family: string;
  weight: string;
  style: 'normal' | 'italic';
}

/** Register each face under its PostScript name and its family, so imports and the font menu both match. */
export async function registerDesignerFonts(fonts: DesignerFont[]): Promise<void> {
  if (typeof FontFace === 'undefined' || typeof document === 'undefined') return;
  for (const font of fonts) {
    const buffer = dataUrlToBuffer(font.dataUrl);
    for (const face of faceDescriptors(font)) {
      if (registeredFaces.has(face.key)) continue;
      try {
        const loaded = new FontFace(face.family, buffer, { weight: face.weight, style: face.style });
        await loaded.load();
        document.fonts.add(loaded);
        registeredFaces.set(face.key, loaded);
      } catch {
        // A face that fails to load keeps the Georgia fallback.
      }
    }
  }
}

/** Drop a face from the page. A family still used by another file stays registered. */
export function unregisterDesignerFont(font: DesignerFont, remaining: DesignerFont[] = []): void {
  if (typeof document === 'undefined') return;
  const kept = new Set(remaining.flatMap((item) => faceDescriptors(item).map((face) => face.key)));
  for (const face of faceDescriptors(font)) {
    if (kept.has(face.key)) continue;
    const loaded = registeredFaces.get(face.key);
    if (!loaded) continue;
    document.fonts.delete(loaded);
    registeredFaces.delete(face.key);
  }
}

function faceDescriptors(font: DesignerFont): FaceDescriptor[] {
  const names = font.postScriptName === font.family ? [font.family] : [font.postScriptName, font.family];
  return names.map((family) => {
    const exact = family === font.postScriptName && family !== font.family;
    const weight = exact ? 400 : font.weight;
    const style: 'normal' | 'italic' = exact ? 'normal' : font.style;
    return { key: `${family}|${weight}|${style}`, family, weight: String(weight), style };
  });
}

interface FontInfo {
  family: string;
  postScriptName: string;
  weight: number;
  style: 'normal' | 'italic';
}

export function readFontInfo(buffer: ArrayBuffer, fileName = 'Font'): FontInfo {
  const bytes = new Uint8Array(buffer);
  const signature = latin(bytes, 0, 4);
  if (signature === 'ttcf') {
    throw new Error('Font collections can’t be added. Choose a single .otf or .ttf file.');
  }
  if (signature === 'wOF2') {
    const stem = fileStem(fileName);
    return { family: stem, postScriptName: stem, ...inferStyle(stem, stem) };
  }
  const view = signature === 'wOFF' ? new DataView(unpackWoff(bytes)) : new DataView(buffer);
  if (!isSfnt(view)) {
    throw new Error('Choose an .otf, .ttf, .woff, or .woff2 font file.');
  }
  const tables = readTableDirectory(view);
  const nameTable = tables.get('name');
  if (!nameTable) throw new Error('This font file has no name.');
  const names = readNameTable(view, nameTable.offset, nameTable.length);
  const family = names.get(16) || names.get(1) || names.get(4) || fileStem(fileName);
  const postScriptName = names.get(6) || family;
  const subfamily = names.get(17) || names.get(2) || '';
  const os2 = tables.get('OS/2');
  const fromOs2 = os2 ? readOs2(view, os2.offset, os2.length) : null;
  const inferred = inferStyle(`${subfamily} ${postScriptName}`, postScriptName);
  return {
    family,
    postScriptName,
    weight: fromOs2?.weight || inferred.weight,
    style: fromOs2?.italic ? 'italic' : inferred.style,
  };
}

const registeredFaces = new Map<string, FontFace>();

function fontId(): string {
  return `font-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function fileStem(fileName: string): string {
  return fileName.replace(/\.[^.]+$/, '').trim() || 'Font';
}

function dataUrlFromBuffer(buffer: ArrayBuffer, file: File): Promise<string> {
  const type = file.type || mimeFor(file.name);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('Could not read this font file.'));
    reader.readAsDataURL(new Blob([buffer], { type }));
  });
}

function mimeFor(fileName: string): string {
  const name = fileName.toLowerCase();
  if (name.endsWith('.otf')) return 'font/otf';
  if (name.endsWith('.woff2')) return 'font/woff2';
  if (name.endsWith('.woff')) return 'font/woff';
  return 'font/ttf';
}

function dataUrlToBuffer(dataUrl: string): ArrayBuffer {
  const base64 = dataUrl.slice(dataUrl.indexOf(',') + 1);
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes.buffer;
}

function inferStyle(label: string, postScriptName: string): { weight: number; style: 'normal' | 'italic' } {
  const value = `${label} ${postScriptName}`.toLowerCase();
  const style = /italic|oblique/.test(value) ? 'italic' : 'normal';
  if (/black|heavy/.test(value)) return { weight: 900, style };
  if (/semibold|semi-bold|demi/.test(value)) return { weight: 600, style };
  if (/bold/.test(value)) return { weight: 700, style };
  if (/medium/.test(value)) return { weight: 500, style };
  if (/light/.test(value)) return { weight: 300, style };
  if (/thin|hairline/.test(value)) return { weight: 100, style };
  return { weight: 400, style };
}

function isSfnt(view: DataView): boolean {
  if (view.byteLength < 12) return false;
  const tag = view.getUint32(0);
  return tag === 0x00010000 || tag === 0x4f54544f || tag === 0x74727565 || tag === 0x74797031;
}

function readTableDirectory(view: DataView): Map<string, { offset: number; length: number }> {
  const count = view.getUint16(4);
  const tables = new Map<string, { offset: number; length: number }>();
  for (let index = 0; index < count; index += 1) {
    const entry = 12 + index * 16;
    if (entry + 16 > view.byteLength) break;
    const tag = latin(new Uint8Array(view.buffer, view.byteOffset + entry, 4), 0, 4);
    tables.set(tag, { offset: view.getUint32(entry + 8), length: view.getUint32(entry + 12) });
  }
  return tables;
}

function readNameTable(view: DataView, tableOffset: number, tableLength: number): Map<number, string> {
  const names = new Map<number, { score: number; text: string }>();
  if (tableLength < 6) return new Map();
  const count = view.getUint16(tableOffset + 2);
  const stringOffset = view.getUint16(tableOffset + 4);
  const storage = tableOffset + stringOffset;
  for (let index = 0; index < count; index += 1) {
    const record = tableOffset + 6 + index * 12;
    if (record + 12 > tableOffset + tableLength) break;
    const platform = view.getUint16(record);
    const encoding = view.getUint16(record + 2);
    const language = view.getUint16(record + 4);
    const nameId = view.getUint16(record + 6);
    const length = view.getUint16(record + 8);
    const offset = view.getUint16(record + 10);
    if (storage + offset + length > view.byteLength) continue;
    const text = decodeName(view, storage + offset, length, platform, encoding);
    if (!text) continue;
    const score = platform === 3 && language === 0x409 ? 4 : platform === 3 ? 3 : platform === 0 ? 2 : 1;
    const previous = names.get(nameId);
    if (!previous || score > previous.score) names.set(nameId, { score, text });
  }
  return new Map([...names].map(([id, value]) => [id, value.text]));
}

function readOs2(view: DataView, offset: number, length: number): { weight: number; italic: boolean } | null {
  if (length < 64 || offset + 64 > view.byteLength) return null;
  const weight = view.getUint16(offset + 4);
  const selection = view.getUint16(offset + 62);
  return {
    weight: weight >= 1 && weight <= 1000 ? weight : 400,
    italic: (selection & 1) !== 0,
  };
}

function decodeName(view: DataView, offset: number, length: number, platform: number, encoding: number): string {
  if (length < 1) return '';
  const wide = platform === 3 || platform === 0 || (platform === 1 && encoding === 1);
  if (wide) {
    let text = '';
    for (let index = 0; index + 1 < length; index += 2) {
      const code = view.getUint16(offset + index);
      if (code) text += String.fromCharCode(code);
    }
    return text.trim();
  }
  let text = '';
  for (let index = 0; index < length; index += 1) {
    const code = view.getUint8(offset + index);
    if (code) text += String.fromCharCode(code);
  }
  return text.trim();
}

function unpackWoff(bytes: Uint8Array): ArrayBuffer {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const count = view.getUint16(12);
  const tables: { tag: string; offset: number; compLength: number; origLength: number }[] = [];
  for (let index = 0; index < count; index += 1) {
    const entry = 44 + index * 20;
    tables.push({
      tag: latin(bytes, entry, 4),
      offset: view.getUint32(entry + 4),
      compLength: view.getUint32(entry + 8),
      origLength: view.getUint32(entry + 12),
    });
  }
  const directory = 12 + count * 16;
  let body = directory;
  for (const table of tables) body += table.origLength + (4 - (table.origLength % 4)) % 4;
  const out = new Uint8Array(body);
  const outView = new DataView(out.buffer);
  out.set(bytes.subarray(4, 8), 0);
  outView.setUint16(4, count);
  let cursor = directory;
  tables.forEach((table, index) => {
    const entry = 12 + index * 16;
    out.set(bytes.subarray(44 + index * 20, 44 + index * 20 + 4), entry);
    outView.setUint32(entry + 8, cursor);
    outView.setUint32(entry + 12, table.origLength);
    const slice = bytes.subarray(table.offset, table.offset + table.compLength);
    const raw = table.compLength === table.origLength ? slice : inflateZlib(slice, table.origLength);
    out.set(raw.subarray(0, table.origLength), cursor);
    cursor += table.origLength + (4 - (table.origLength % 4)) % 4;
  });
  return out.buffer;
}

function inflateZlib(bytes: Uint8Array, size: number): Uint8Array {
  try {
    return inflate(bytes);
  } catch {
    return bytes.subarray(0, size);
  }
}

function latin(bytes: Uint8Array, offset: number, length: number): string {
  let text = '';
  for (let index = 0; index < length; index += 1) text += String.fromCharCode(bytes[offset + index] || 0);
  return text;
}
