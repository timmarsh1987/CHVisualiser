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
          prompt,
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

    const blob = await response.blob();
    if (!blob.size) throw new Error('The proxy returned an empty image.');
    return {
      blob,
      objectUrl: URL.createObjectURL(blob),
      mimeType,
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
