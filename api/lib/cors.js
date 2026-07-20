/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export function applyCors(req, res) {
  const configured = process.env.BRAND_COMPLIANCE_CORS_ORIGIN?.trim();
  const requestOrigin = typeof req.headers.origin === 'string' ? req.headers.origin : '';

  const allowedOrigins = configured
    ? configured.split(',').map((value) => value.trim()).filter(Boolean)
    : [];

  const allowOrigin =
    allowedOrigins.length === 0
      ? '*'
      : allowedOrigins.includes(requestOrigin)
        ? requestOrigin
        : allowedOrigins[0];

  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}
