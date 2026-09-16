import type { GeneratedImage, ImageTransformOptions } from './types';

const ERROR_MESSAGES: Record<string, string> = {
  fal_auth_failed: 'The fal.ai API key is missing or invalid.',
  rate_limited: 'fal.ai is rate limiting requests. Wait a moment and try again.',
  content_policy_rejection: 'Seedream could not process this prompt or image. Try a different prompt.',
  seedream_timeout: 'Seedream took too long to respond. Please try again.',
  source_image_unreachable: 'The proxy could not download the Content Hub preview rendition.',
  source_image_too_large: 'The Content Hub preview rendition is too large to transform.',
  unsupported_source_image: 'Seedream requires a JPEG, PNG, or WebP preview rendition.',
  image_host_not_allowed: 'This Content Hub image host is not allowed by the proxy.',
  seedream_result_too_large: 'The generated image is too large to upload from this component.',
  unauthorized: 'The image transform proxy rejected this component configuration.',
};

export function wantsTransparentCutout(prompt: string): boolean {
  const text = prompt.toLowerCase();
  if (/\b(transparent|alpha|cut\s*-?out|knock\s*-?out|isolate)\b/.test(text)) return true;
  return (
    /\b(remove|erase|delete|without)\b/.test(text) &&
    /\b(background|backdrop|bg)\b/.test(text)
  );
}

export async function generateImage(
  imageUrl: string,
  prompt: string,
  options: ImageTransformOptions
): Promise<GeneratedImage> {
  const controller = new AbortController();
  const timeout = window.setTimeout(
    () => controller.abort(),
    options.requestTimeoutMs ?? 65_000
  );

  try {
    const response = await fetch(
      `${options.apiBaseUrl.replace(/\/+$/, '')}/api/seedream/transform`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(options.apiToken
            ? { Authorization: `Bearer ${options.apiToken}` }
            : {}),
        },
        body: JSON.stringify({
          imageUrl,
          prompt: prompt.trim(),
          outputFormat: 'png',
          removeBackground: wantsTransparentCutout(prompt),
        }),
        signal: controller.signal,
      }
    );

    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      const code = typeof payload?.error === 'string' ? payload.error : 'generation_failed';
      throw new Error(ERROR_MESSAGES[code] || 'Image generation failed. Please try again.');
    }

    const mimeType = (response.headers.get('Content-Type') || '').split(';')[0].trim();
    if (!mimeType.startsWith('image/')) {
      throw new Error('The proxy returned an invalid image response.');
    }

    const source = await response.blob();
    if (!source.size) throw new Error('The proxy returned an empty image.');
    const blob = await asPngBlob(source);
    return {
      blob,
      objectUrl: URL.createObjectURL(blob),
      mimeType: 'image/png',
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Image generation timed out. Please try again.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}

function isPng(bytes: ArrayBuffer): boolean {
  const header = new Uint8Array(bytes, 0, Math.min(4, bytes.byteLength));
  return header[0] === 0x89 && header[1] === 0x50 && header[2] === 0x4e && header[3] === 0x47;
}

async function asPngBlob(source: Blob): Promise<Blob> {
  const bytes = await source.arrayBuffer();
  if (isPng(bytes)) return new Blob([bytes], { type: 'image/png' });
  return convertImageToPng(new Blob([bytes], { type: source.type || 'image/jpeg' }));
}

async function convertImageToPng(source: Blob): Promise<Blob> {
  const bitmap = await createImageBitmap(source);
  try {
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('The browser could not prepare the generated image.');
    context.drawImage(bitmap, 0, 0);

    return await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) =>
          result
            ? resolve(result)
            : reject(new Error('The browser could not create a PNG image.')),
        'image/png'
      );
    });
  } finally {
    bitmap.close();
  }
}
