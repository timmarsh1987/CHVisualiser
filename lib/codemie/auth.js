const API_BASE =
  process.env.CODEMIE_API_URL?.replace(/\/$/, '') ??
  'https://codemie.lab.epam.com/code-assistant-api';
const KEYCLOAK_BASE =
  process.env.CODEMIE_KEYCLOAK_SERVER_URL?.replace(/\/$/, '') ??
  'https://auth.codemie.lab.epam.com';
const REALM = process.env.CODEMIE_KEYCLOAK_REALM ?? 'codemie-prod';

/** @type {{ token: string, expiresAt: number } | null} */
let tokenCache = null;

async function fetchKeycloakToken() {
  const clientId = process.env.CODEMIE_KEYCLOAK_CLIENT_ID?.trim();
  const clientSecret = process.env.CODEMIE_KEYCLOAK_CLIENT_SECRET?.trim();
  const username = process.env.CODEMIE_KEYCLOAK_USERNAME?.trim();
  const password = process.env.CODEMIE_KEYCLOAK_PASSWORD?.trim();

  const body = new URLSearchParams();

  // Option A: client credentials (production / CI)
  if (clientId && clientSecret) {
    body.set('grant_type', 'client_credentials');
    body.set('client_id', clientId);
    body.set('client_secret', clientSecret);
  }
  // Option B: password grant (dev / personal scripts — same as Signal-Monitor)
  else if (username && password) {
    body.set('grant_type', 'password');
    body.set('client_id', clientId || 'codemie-sdk');
    body.set('username', username);
    body.set('password', password);
  }
  // Option C: static bearer token (expires — manual refresh)
  else if (process.env.CODEMIE_API_KEY?.trim()) {
    return process.env.CODEMIE_API_KEY.trim();
  } else {
    throw new Error(
      'CodeMie auth not configured. Set client secret (Option A), username/password (Option B), or CODEMIE_API_KEY (Option C). See api/.env.example'
    );
  }

  const tokenUrl = `${KEYCLOAK_BASE}/realms/${REALM}/protocol/openid-connect/token`;

  if (process.env.AI_DEBUG === 'true') {
    console.log('[codemie/auth] requesting token from', tokenUrl);
  }

  const res = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  if (!res.ok) {
    const detail = await res.text();
    const hint =
      res.status === 401
        ? ' — check username/password (Option B) or client credentials (Option A)'
        : '';
    throw new Error(`Keycloak token failed: ${res.status} ${detail}${hint}`);
  }

  const data = await res.json();
  return data.access_token;
}

export async function getCodeMieAccessToken() {
  if (tokenCache && Date.now() < tokenCache.expiresAt) {
    return tokenCache.token;
  }

  const token = await fetchKeycloakToken();
  tokenCache = { token, expiresAt: Date.now() + 55 * 60 * 1000 };
  return token;
}

export function getCodeMieApiBase() {
  return API_BASE;
}
