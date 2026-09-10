const SEEDREAM_ENDPOINT = 'https://fal.run/bytedance/seedream/v5/pro/edit';
const DEFAULT_TIMEOUT_MS = 50_000;
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

async function runSeedream(imageUrl, prompt) {
  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(),
    Number(process.env.SEEDREAM_TIMEOUT_MS) || DEFAULT_TIMEOUT_MS
  );

  try {
    const response = await fetch(SEEDREAM_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Key ${requireFalKey()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        image_urls: [validateSourceUrl(imageUrl)],
        image_size: process.env.SEEDREAM_IMAGE_SIZE?.trim() || 'auto_2K',
        num_images: 1,
        output_format: 'jpeg',
        enable_safety_checker: true,
      }),
      signal: controller.signal,
    });
    const payload = await readJson(response);
    if (!response.ok) {
      const code = falErrorCode(response.status, payload);
      throw new FalError(code, response.status === 429 ? 429 : 502, payload);
    }

    const resultUrl = payload?.images?.[0]?.url;
    if (!resultUrl) throw new FalError('seedream_invalid_response', 502, payload);
    return resultUrl;
  } catch (error) {
    if (error instanceof FalError) throw error;
    if (error instanceof Error && error.name === 'AbortError') {
      throw new FalError('seedream_timeout', 504);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
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

  const mimeType = (response.headers.get('content-type') || 'image/jpeg')
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
  return { bytes, mimeType };
}

export async function transformWithSeedream({ imageUrl, prompt }) {
  const resultUrl = await runSeedream(imageUrl, prompt);
  return downloadResult(resultUrl);
}
