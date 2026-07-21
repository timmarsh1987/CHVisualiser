/**
 * @param {import('http').IncomingMessage} req
 */
export function getBearerToken(req) {
  const header = req.headers.authorization ?? req.headers.Authorization;
  if (!header || typeof header !== 'string') {
    return null;
  }

  const match = header.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() ?? null;
}

export function getEmbedApiSecret() {
  return (
    process.env.BRAND_COMPLIANCE_API_SECRET?.trim() ??
    process.env.BRAND_COMPLIANCE_EMBED_API_SECRET?.trim() ??
    ''
  );
}

/**
 * @param {import('http').IncomingMessage} req
 */
export function verifyEmbedAuth(req) {
  const secret = getEmbedApiSecret();
  if (!secret) {
    return {
      ok: false,
      status: 503,
      error:
        'Embed API is not configured on the server — set BRAND_COMPLIANCE_API_SECRET in Vercel env vars and redeploy',
    };
  }

  const token = getBearerToken(req);
  if (!token || token !== secret) {
    return {
      ok: false,
      status: 401,
      error:
        'Unauthorized — Content Hub apiToken must exactly match BRAND_COMPLIANCE_API_SECRET on Vercel',
    };
  }

  return { ok: true };
}
