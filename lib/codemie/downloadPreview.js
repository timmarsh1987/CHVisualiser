/**
 * Download a Content Hub rendition/delivery URL for CodeMie upload.
 * Supports images and documents (PDF, etc.). Signed delivery URLs usually
 * work without Content Hub session cookies.
 */

const MAX_BYTES = Number(
  process.env.BRAND_COMPLIANCE_MAX_FILE_BYTES ??
    process.env.BRAND_COMPLIANCE_MAX_IMAGE_BYTES ??
    25 * 1024 * 1024
);

/**
 * @param {string} url
 * @param {{ expectedMimeType?: string, fileName?: string }} [options]
 * @returns {Promise<{ bytes: Buffer, mimeType: string, fileName: string } | null>}
 */
export async function downloadAssetFile(url, options = {}) {
  const trimmed = typeof url === 'string' ? url.trim() : '';
  if (!trimmed || !/^https?:\/\//i.test(trimmed)) {
    return null;
  }

  const response = await fetch(trimmed, {
    method: 'GET',
    headers: {
      Accept: 'application/pdf,image/*,application/octet-stream,*/*',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`Asset download failed (${response.status}) from Content Hub`);
  }

  const contentType = (response.headers.get('content-type') || '').split(';')[0].trim();
  const arrayBuffer = await response.arrayBuffer();
  const bytes = Buffer.from(arrayBuffer);

  if (!bytes.length) {
    throw new Error('Asset download returned an empty file');
  }

  if (bytes.length > MAX_BYTES) {
    throw new Error(
      `Asset file is too large (${bytes.length} bytes; max ${MAX_BYTES}).`
    );
  }

  const mimeType = resolveMimeType({
    contentType,
    url: trimmed,
    expectedMimeType: options.expectedMimeType,
    fileName: options.fileName,
    bytes,
  });

  return {
    bytes,
    mimeType,
    fileName: guessFileName(trimmed, mimeType, options.fileName),
  };
}

/** @deprecated Use downloadAssetFile — kept for older imports. */
export async function downloadPreviewImage(url, options = {}) {
  return downloadAssetFile(url, options);
}

/**
 * @param {{
 *   contentType: string,
 *   url: string,
 *   expectedMimeType?: string,
 *   fileName?: string,
 *   bytes: Buffer,
 * }} input
 */
function resolveMimeType(input) {
  const expected = (input.expectedMimeType || '').toLowerCase();
  if (expected.startsWith('image/') || expected === 'application/pdf') {
    return expected;
  }

  if (input.contentType.startsWith('image/') || input.contentType === 'application/pdf') {
    return input.contentType;
  }

  const fromName = guessMimeFromName(input.fileName || '') || guessMimeFromUrl(input.url);
  if (fromName) {
    return fromName;
  }

  // PDF magic bytes
  if (
    input.bytes.length >= 4 &&
    input.bytes[0] === 0x25 &&
    input.bytes[1] === 0x50 &&
    input.bytes[2] === 0x44 &&
    input.bytes[3] === 0x46
  ) {
    return 'application/pdf';
  }

  // Common image magic bytes
  if (input.bytes[0] === 0xff && input.bytes[1] === 0xd8) {
    return 'image/jpeg';
  }
  if (
    input.bytes[0] === 0x89 &&
    input.bytes[1] === 0x50 &&
    input.bytes[2] === 0x4e &&
    input.bytes[3] === 0x47
  ) {
    return 'image/png';
  }

  return 'application/octet-stream';
}

/**
 * @param {string} url
 * @param {string} mimeType
 * @param {string} [preferredName]
 */
function guessFileName(url, mimeType, preferredName) {
  if (preferredName?.trim()) {
    const name = preferredName.trim();
    if (/\.[a-z0-9]+$/i.test(name)) {
      return name;
    }
    return `${name}.${extensionForMime(mimeType)}`;
  }

  try {
    const pathname = new URL(url).pathname;
    const last = pathname.split('/').filter(Boolean).pop() || '';
    if (/\.(jpe?g|png|gif|webp|bmp|pdf)$/i.test(last)) {
      return last;
    }
  } catch {
    // ignore
  }

  return `asset-file.${extensionForMime(mimeType)}`;
}

/**
 * @param {string} mimeType
 */
function extensionForMime(mimeType) {
  switch (mimeType) {
    case 'image/png':
      return 'png';
    case 'image/gif':
      return 'gif';
    case 'image/webp':
      return 'webp';
    case 'application/pdf':
      return 'pdf';
    case 'image/jpeg':
    default:
      return mimeType.startsWith('image/') ? 'jpg' : 'bin';
  }
}

/**
 * @param {string} name
 */
function guessMimeFromName(name) {
  const lower = name.toLowerCase();
  if (lower.endsWith('.pdf')) return 'application/pdf';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.gif')) return 'image/gif';
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  return '';
}

/**
 * @param {string} url
 */
function guessMimeFromUrl(url) {
  const lower = url.toLowerCase();
  if (lower.includes('.pdf') || lower.includes('rendition=downloadoriginal')) {
    return 'application/pdf';
  }
  if (lower.includes('.png')) return 'image/png';
  if (lower.includes('.gif')) return 'image/gif';
  if (lower.includes('.webp')) return 'image/webp';
  if (lower.includes('.jpg') || lower.includes('.jpeg')) return 'image/jpeg';
  return '';
}
