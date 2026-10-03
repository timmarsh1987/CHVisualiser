const SEEDREAM_ENDPOINT = 'https://fal.run/bytedance/seedream/v5/pro/edit';
const BIREFNET_ENDPOINT = 'https://fal.run/fal-ai/birefnet/v2';
const DEFAULT_TIMEOUT_MS = 150_000;
const DEFAULT_MAX_SOURCE_BYTES = 10 * 1024 * 1024;
const DEFAULT_MAX_OUTPUT_BYTES = 10 * 1024 * 1024;

export class FalError extends Error {
  constructor(code, status = 502, detail) {
    super(code);
    this.name = 'FalError';
    this.code = code;
    this.status = status;
    this.detail = detail;
  }
}

function requireFalKey() {
  const key = process.env.FAL_KEY?.trim();
  if (!key) throw new FalError('proxy_not_configured', 503);
  return key;
}

function allowedSourceHosts() {
  return (process.env.IMAGE_TRANSFORM_SOURCE_HOSTS || '')
    .split(',')
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean);
}

function validateSourceUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new FalError('invalid_image_url', 400);
  }

  if (url.protocol !== 'https:' || url.username || url.password) {
    throw new FalError('invalid_image_url', 400);
  }

  const allowlist = allowedSourceHosts();
  const hostname = url.hostname.toLowerCase();
  if (
    allowlist.length > 0 &&
    !allowlist.some((host) => hostname === host || hostname.endsWith(`.${host}`))
  ) {
    throw new FalError('image_host_not_allowed', 400);
  }
  return url.toString();
}

async function downloadSourceAsDataUri(imageUrl) {
  const response = await fetch(validateSourceUrl(imageUrl), {
    headers: { Accept: 'image/jpeg,image/png,image/webp' },
    redirect: 'error',
  });
  if (!response.ok) {
    throw new FalError('source_image_unreachable', 502, {
      status: response.status,
    });
  }

  const mimeType = (response.headers.get('content-type') || '')
    .split(';')[0]
    .trim()
    .toLowerCase();
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(mimeType)) {
    throw new FalError('unsupported_source_image', 415, { mimeType });
  }

  const maxBytes =
    Number(process.env.IMAGE_TRANSFORM_MAX_SOURCE_BYTES) || DEFAULT_MAX_SOURCE_BYTES;
  const declaredSize = Number(response.headers.get('content-length'));
  if (declaredSize > maxBytes) throw new FalError('source_image_too_large', 413);

  const bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.length) throw new FalError('source_image_unreachable', 502);
  if (bytes.length > maxBytes) throw new FalError('source_image_too_large', 413);
  return `data:${mimeType};base64,${bytes.toString('base64')}`;
}

async function readJson(response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { detail: text.slice(0, 500) };
  }
}

function detailText(payload) {
  const detail = payload?.detail ?? payload?.error ?? payload?.message ?? '';
  return typeof detail === 'string' ? detail : JSON.stringify(detail);
}

function falErrorCode(status, payload) {
  if (status === 401 || status === 403) return 'fal_auth_failed';
  if (status === 408 || status === 504) return 'seedream_timeout';
  if (status === 429) return 'rate_limited';

  const detail = detailText(payload).toLowerCase();
  if (/safety|moderation|content.?policy|unsafe|blocked|nsfw/.test(detail)) {
    return 'content_policy_rejection';
  }
  if (/image|url|download|fetch/.test(detail)) {
    return 'source_image_unreachable';
  }
  return 'seedream_generate_failed';
}

export function wantsTransparentCutout(prompt) {
  const text = String(prompt || '').toLowerCase();
  if (/\b(transparent|alpha|cut\s*-?out|knock\s*-?out|isolate)\b/.test(text)) return true;
  return (
    /\b(remove|erase|delete|without)\b/.test(text) &&
    /\b(background|backdrop|bg)\b/.test(text)
  );
}

function isCutoutOnlyPrompt(prompt) {
  const text = String(prompt || '').toLowerCase();
  if (!wantsTransparentCutout(text)) return false;
  return !/\b(replace|reimagine|wearing|wear|add|change|sunset|lighting|style|color|colour|put|insert|swap|instead)\b/.test(
    text
  );
}

async function falImageRequest(endpoint, body, timeoutCode) {
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(),
    Number(process.env.SEEDREAM_TIMEOUT_MS) || DEFAULT_TIMEOUT_MS
  );

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Key ${requireFalKey()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    const payload = await readJson(response);
    if (!response.ok) {
      const code = falErrorCode(response.status, payload);
      throw new FalError(code, response.status === 429 ? 429 : 502, payload);
    }
    return payload;
  } catch (error) {
    if (error instanceof FalError) throw error;
    if (error instanceof Error && error.name === 'AbortError') {
      throw new FalError(timeoutCode, 504);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}

async function runSeedream(imageDataUri, prompt, outputFormat) {
  const payload = await falImageRequest(
    SEEDREAM_ENDPOINT,
    {
      prompt,
      image_urls: [imageDataUri],
      image_size: process.env.SEEDREAM_IMAGE_SIZE?.trim() || 'auto_2K',
      num_images: 1,
      output_format: outputFormat,
      enable_safety_checker: true,
    },
    'seedream_timeout'
  );
  const resultUrl = payload?.images?.[0]?.url;
  if (!resultUrl) throw new FalError('seedream_invalid_response', 502, payload);
  return resultUrl;
}

async function runBirefnet(imageUrl) {
  const payload = await falImageRequest(
    BIREFNET_ENDPOINT,
    {
      image_url: imageUrl,
      output_format: 'png',
      refine_foreground: true,
      model: 'Matting',
      operating_resolution: '2048x2048',
    },
    'seedream_timeout'
  );
  const resultUrl = payload?.image?.url;
  if (!resultUrl) throw new FalError('seedream_invalid_response', 502, payload);
  return resultUrl;
}

function mimeFromBytes(bytes, declaredMimeType) {
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return 'image/png';
  }
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return 'image/jpeg';
  if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) {
    return 'image/webp';
  }
  return declaredMimeType;
}

async function downloadResult(resultUrl) {
  let url;
  try {
    url = new URL(resultUrl);
  } catch {
    throw new FalError('seedream_invalid_response', 502);
  }
  if (url.protocol !== 'https:') throw new FalError('seedream_invalid_response', 502);

  const response = await fetch(url);
  if (!response.ok) throw new FalError('seedream_result_download_failed', 502);

  const mimeType = (response.headers.get('content-type') || 'image/png')
    .split(';')[0]
    .trim()
    .toLowerCase();
  if (!mimeType.startsWith('image/')) {
    throw new FalError('seedream_result_download_failed', 502);
  }

  const maxBytes =
    Number(process.env.IMAGE_TRANSFORM_MAX_OUTPUT_BYTES) || DEFAULT_MAX_OUTPUT_BYTES;
  const declaredSize = Number(response.headers.get('content-length'));
  if (declaredSize > maxBytes) throw new FalError('seedream_result_too_large', 413);

  const bytes = Buffer.from(await response.arrayBuffer());
  if (!bytes.length) throw new FalError('seedream_result_download_failed', 502);
  if (bytes.length > maxBytes) throw new FalError('seedream_result_too_large', 413);
  return { bytes, mimeType: mimeFromBytes(bytes, mimeType) };
}

export async function transformWithSeedream({
  imageUrl,
  prompt,
  outputFormat = 'png',
  removeBackground = false,
}) {
  const imageDataUri = await downloadSourceAsDataUri(imageUrl);
  const cutout = removeBackground || wantsTransparentCutout(prompt);
  const png = cutout ? 'png' : outputFormat;

  if (cutout && isCutoutOnlyPrompt(prompt)) {
    return downloadResult(await runBirefnet(imageDataUri));
  }

  const resultUrl = await runSeedream(imageDataUri, prompt, png);
  if (cutout) return downloadResult(await runBirefnet(resultUrl));
  return downloadResult(resultUrl);
}
