import { applyCors } from '../lib/cors.js';
import { getBearerToken, getEmbedApiSecret } from '../lib/embedAuth.js';

/**
 * @param {unknown} value
 */
function asString(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  return '';
}

/**
 * @param {string} input
 * @returns {{ fileKey: string, nodeId: string } | null}
 */
function parseFigmaUrl(input) {
  const trimmed = asString(input);
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    if (!/figma\.com$/i.test(url.hostname) && !/\.figma\.com$/i.test(url.hostname)) {
      return null;
    }

    const pathMatch = url.pathname.match(/\/(?:design|file|proto)\/([a-zA-Z0-9]+)/);
    const fileKey = pathMatch?.[1];
    if (!fileKey) return null;

    const rawNode =
      url.searchParams.get('node-id') ??
      url.searchParams.get('node_id') ??
      url.searchParams.get('nodeId');
    if (!asString(rawNode)) return null;

    const nodeId = decodeURIComponent(asString(rawNode)).replace(/-/g, ':');
    return { fileKey, nodeId };
  } catch {
    return null;
  }
}

/**
 * @param {import('http').IncomingMessage} req
 */
function verifyFigmaImportAuth(req) {
  const secret =
    process.env.FIGMA_IMPORT_API_SECRET?.trim() ||
    getEmbedApiSecret();

  // If no shared secret is configured, allow the request when a Figma token exists (dev).
  if (!secret) {
    return { ok: true, optional: true };
  }

  const token = getBearerToken(req);
  if (!token || token !== secret) {
    return { ok: false, status: 401, error: 'Unauthorized' };
  }

  return { ok: true };
}

/**
 * Vercel serverless: fetch a Figma frame/node for Marketing Builder import.
 *
 * POST body:
 *   { figmaUrl: string }
 *   or { fileKey: string, nodeId: string }
 *
 * Env:
 *   FIGMA_ACCESS_TOKEN — Figma personal access token (required)
 *   FIGMA_IMPORT_API_SECRET — optional bearer secret (falls back to BRAND_COMPLIANCE_API_SECRET)
 */
export default async function handler(req, res) {
  applyCors(req, res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const auth = verifyFigmaImportAuth(req);
  if (!auth.ok) {
    res.statusCode = auth.status ?? 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: auth.error ?? 'Unauthorized' }));
    return;
  }

  const figmaToken = process.env.FIGMA_ACCESS_TOKEN?.trim();
  if (!figmaToken) {
    res.statusCode = 503;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: 'Figma import is not configured. Set FIGMA_ACCESS_TOKEN on the server.',
      })
    );
    return;
  }

  /** @type {Record<string, unknown>} */
  let body = {};
  try {
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const raw = Buffer.concat(chunks).toString('utf8');
    if (raw.trim()) {
      body = JSON.parse(raw);
    }
  } catch {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Invalid JSON body' }));
    return;
  }

  const fromUrl = asString(body.figmaUrl) ? parseFigmaUrl(asString(body.figmaUrl)) : null;
  const fileKey = asString(body.fileKey) || fromUrl?.fileKey || '';
  const nodeId = (asString(body.nodeId) || fromUrl?.nodeId || '').replace(/-/g, ':');

  if (!fileKey || !nodeId) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error:
          'Provide a Figma URL that includes node-id, or fileKey + nodeId (e.g. 12:34).',
      })
    );
    return;
  }

  const apiUrl = `https://api.figma.com/v1/files/${encodeURIComponent(fileKey)}/nodes?ids=${encodeURIComponent(nodeId)}&geometry=paths`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Figma-Token': figmaToken,
      },
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message =
        asString(payload?.err) ||
        asString(payload?.message) ||
        `Figma API error (${response.status})`;
      res.statusCode = response.status === 404 ? 404 : 502;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: message, status: response.status }));
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        fileKey,
        nodeId,
        name: asString(payload?.name) || fileKey,
        nodes: payload?.nodes ?? {},
      })
    );
  } catch (error) {
    res.statusCode = 502;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Failed to reach Figma API',
      })
    );
  }
}
