/**
 * Download a Content Hub preview/rendition URL for CodeMie upload.
 * Signed delivery URLs typically work without CH session cookies.
 */

const MAX_BYTES = Number(process.env.BRAND_COMPLIANCE_MAX_IMAGE_BYTES ?? 8 * 1024 * 1024);

/**
 * @param {string} url
 * @returns {Promise<{ bytes: Buffer, mimeType: string, fileName: string } | null>}
 */
export async function downloadPreviewImage(url) {
  const trimmed = typeof url === 'string' ? url.trim() : '';
  if (!trimmed || !/^https?:\/\//i.test(trimmed)) {
    return null;
  }

  const response = await fetch(trimmed, {
    method: 'GET',
    headers: {
      Accept: 'image/*,*/*',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`Preview download failed (${response.status}) from Content Hub`);
  }

  const contentType = (response.headers.get('content-type') || '').split(';')[0].trim();
  const arrayBuffer = await response.arrayBuffer();
  const bytes = Buffer.from(arrayBuffer);

  if (!bytes.length) {
    throw new Error('Preview download returned an empty file');
  }

  if (bytes.length > MAX_BYTES) {
    throw new Error(
      `Preview image is too large (${bytes.length} bytes; max ${MAX_BYTES}). Use a smaller rendition.`
    );
  }

  const mimeType = contentType.startsWith('image/')
    ? contentType
    : guessMimeFromUrl(trimmed) || 'image/jpeg';

  return {
    bytes,
    mimeType,
    fileName: guessFileName(trimmed, mimeType),
  };
}

/**
 * @param {string} url
 * @param {string} mimeType
 */
function guessFileName(url, mimeType) {
  try {
    const pathname = new URL(url).pathname;
    const last = pathname.split('/').filter(Boolean).pop() || '';
    if (/\.(jpe?g|png|gif|webp|bmp)$/i.test(last)) {
      return last;
    }
  } catch {
    // ignore
  }

  const ext =
    mimeType === 'image/png'
      ? 'png'
      : mimeType === 'image/gif'
        ? 'gif'
        : mimeType === 'image/webp'
          ? 'webp'
          : 'jpg';

  return `asset-preview.${ext}`;
}

/**
 * @param {string} url
 */
function guessMimeFromUrl(url) {
  const lower = url.toLowerCase();
  if (lower.includes('.png')) return 'image/png';
  if (lower.includes('.gif')) return 'image/gif';
  if (lower.includes('.webp')) return 'image/webp';
  if (lower.includes('.jpg') || lower.includes('.jpeg')) return 'image/jpeg';
  return '';
}
