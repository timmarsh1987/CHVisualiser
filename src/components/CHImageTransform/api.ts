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
          prompt: withTransparencyInstruction(prompt),
          outputFormat: 'png',
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

    let blob = await response.blob();
    if (!blob.size) throw new Error('The proxy returned an empty image.');
    if ((blob.type || mimeType) !== 'image/png') {
      blob = await convertImageToPng(blob);
    }
    return {
      blob,
      objectUrl: URL.createObjectURL(blob),
      mimeType: blob.type || 'image/png',
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

const TRANSPARENCY_INSTRUCTION =
  'If any part of the image is removed, erased, or cut out, leave those pixels fully transparent. Do not fill removed areas with white, black, or a background color.';

function withTransparencyInstruction(prompt: string): string {
  return `${prompt.trim()}\n\n${TRANSPARENCY_INSTRUCTION}`;
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
