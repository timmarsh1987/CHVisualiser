import { applyCors } from '../lib/cors.js';
import { FalError, transformWithSeedream, wantsTransparentCutout } from '../lib/fal/client.js';

export const config = {
  maxDuration: 180,
};

async function readJsonBody(req) {
  if (req.body != null) {
    return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  return raw ? JSON.parse(raw) : {};
}

function hasValidProxySecret(req) {
  const expected = process.env.IMAGE_TRANSFORM_API_SECRET?.trim();
  if (!expected) return true;
  const header = typeof req.headers.authorization === 'string' ? req.headers.authorization : '';
  return header === `Bearer ${expected}`;
}

export default async function handler(req, res) {
  applyCors(req, res);
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST, OPTIONS');
    res.end(JSON.stringify({ error: 'method_not_allowed' }));
    return;
  }
  if (!hasValidProxySecret(req)) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: 'unauthorized' }));
    return;
  }

  try {
    const body = await readJsonBody(req);
    const imageUrl = typeof body?.imageUrl === 'string' ? body.imageUrl.trim() : '';
    const prompt = typeof body?.prompt === 'string' ? body.prompt.trim() : '';
    const outputFormat = 'png';
    const removeBackground =
      body?.removeBackground === true || wantsTransparentCutout(prompt);

    if (!imageUrl || !prompt) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'missing_params' }));
      return;
    }
    if (prompt.length > 10_000) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'prompt_too_long' }));
      return;
    }

    const result = await transformWithSeedream({
      imageUrl,
      prompt,
      outputFormat,
      removeBackground,
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', result.mimeType || 'image/png');
    res.setHeader('Content-Length', String(result.bytes.length));
    res.end(result.bytes);
  } catch (error) {
    const known = error instanceof FalError;
    const message = error instanceof Error ? error.message : 'unexpected_error';
    console.error('[seedream-transform]', message, known ? error.detail : error);
    res.statusCode = known ? error.status : 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: known ? error.code : 'unexpected_error' }));
  }
}
