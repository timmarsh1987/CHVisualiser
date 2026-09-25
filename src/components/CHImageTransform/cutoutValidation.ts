/**
 * PNG validation utilities for transparent cutout images.
 *
 * PNG colour types: 0 gray, 2 RGB, 3 palette, 4 gray+alpha, 6 RGBA.
 * Types 4 and 6 have native alpha channels. Type 3 (palette) can have
 * transparency via tRNS chunk but is not considered a valid cutout here.
 */

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

export function readPngColorType(bytes: Uint8Array): number | null {
  if (bytes.length < 26) return null;
  for (let i = 0; i < 8; i++) {
    if (bytes[i] !== PNG_SIGNATURE[i]) return null;
  }
  return bytes[25];
}

export function hasAlphaChannelType(colorType: number | null): boolean {
  return colorType === 4 || colorType === 6;
}

export function isPngSignature(bytes: Uint8Array): boolean {
  if (bytes.length < 8) return false;
  for (let i = 0; i < 8; i++) {
    if (bytes[i] !== PNG_SIGNATURE[i]) return false;
  }
  return true;
}

export type CutoutCheck = { ok: true } | { ok: false; reason: string };

export interface CutoutSource {
  width: number;
  height: number;
}

const MIN_TRANSPARENT_SHARE = 0.01;
const ALPHA_THRESHOLD = 250;

export async function transparentShare(pngBlob: Blob): Promise<number> {
  const bitmap = await createImageBitmap(pngBlob);
  try {
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Canvas context unavailable');
    ctx.drawImage(bitmap, 0, 0);
    const imageData = ctx.getImageData(0, 0, bitmap.width, bitmap.height);
    const data = imageData.data;
    const total = bitmap.width * bitmap.height;
    let seeThrough = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < ALPHA_THRESHOLD) seeThrough++;
    }
    return seeThrough / total;
  } finally {
    bitmap.close();
  }
}

export async function getImageDimensions(
  blob: Blob
): Promise<{ width: number; height: number }> {
  const bitmap = await createImageBitmap(blob);
  try {
    return { width: bitmap.width, height: bitmap.height };
  } finally {
    bitmap.close();
  }
}

export async function validateCutout(
  pngBlob: Blob,
  source: CutoutSource | null
): Promise<CutoutCheck> {
  const bytes = new Uint8Array(await pngBlob.slice(0, 32).arrayBuffer());

  if (!isPngSignature(bytes)) {
    return { ok: false, reason: 'Result is not a PNG.' };
  }

  const colorType = readPngColorType(bytes);
  if (!hasAlphaChannelType(colorType)) {
    return {
      ok: false,
      reason:
        'Result has no alpha channel, so it cannot be a transparent cutout.',
    };
  }

  let resultDimensions: { width: number; height: number };
  try {
    resultDimensions = await getImageDimensions(pngBlob);
  } catch {
    return { ok: false, reason: 'Could not read result image dimensions.' };
  }

  if (source) {
    if (
      resultDimensions.width !== source.width ||
      resultDimensions.height !== source.height
    ) {
      return {
        ok: false,
        reason: `Result is ${resultDimensions.width}x${resultDimensions.height}, source is ${source.width}x${source.height}.`,
      };
    }
  }

  let share: number;
  try {
    share = await transparentShare(pngBlob);
  } catch {
    return { ok: false, reason: 'Could not analyze result image transparency.' };
  }

  if (share < MIN_TRANSPARENT_SHARE) {
    return {
      ok: false,
      reason: 'Result is fully opaque. The background was not removed.',
    };
  }

  return { ok: true };
}
