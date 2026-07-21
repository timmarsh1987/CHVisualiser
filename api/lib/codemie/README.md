# CodeMie integration

Server-side CodeMie client used by `CHBrandCompliance` and `CHFineArtTagging` embed API routes.

Implementation mirrors Signal-Monitor:

- `auth.js` — Keycloak token fetch, ~55 min cache, fallback to `CODEMIE_API_KEY`
- `client.js` — `POST /v1/assistants/{id}/model`
- `parseJson.js` — parse structured JSON from assistant replies

---

## Authentication options

Auth is chosen automatically at runtime (first match wins):

| Priority | Method | Env vars | Best for |
|----------|--------|----------|----------|
| 1 | Client credentials | `CODEMIE_KEYCLOAK_CLIENT_ID` + `CODEMIE_KEYCLOAK_CLIENT_SECRET` | Production, CI/CD, shared servers |
| 2 | Password grant | `CODEMIE_KEYCLOAK_USERNAME` + `CODEMIE_KEYCLOAK_PASSWORD` | Local dev, personal scripts |
| 3 | Static token | `CODEMIE_API_KEY` | Quick manual tests (expires) |

You do **not** need `CODEMIE_USE_KEYCLOAK_AUTH=true` — Keycloak is auto-detected when credentials are present.

---

## Option B — user password grant (dev)

Signal-Monitor uses this for development and personal scripts.

```env
CODEMIE_KEYCLOAK_CLIENT_ID=codemie-sdk
CODEMIE_KEYCLOAK_USERNAME=you@epam.com
CODEMIE_KEYCLOAK_PASSWORD=your-password
CODEMIE_KEYCLOAK_REALM=codemie-prod
CODEMIE_KEYCLOAK_SERVER_URL=https://auth.codemie.lab.epam.com
CODEMIE_API_URL=https://codemie.lab.epam.com/code-assistant-api
CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

### What each variable does

| Variable | Value | Purpose |
|----------|-------|---------|
| `CODEMIE_KEYCLOAK_CLIENT_ID` | `codemie-sdk` | Keycloak OAuth client. `codemie-sdk` is the standard public client for user login. |
| `CODEMIE_KEYCLOAK_USERNAME` | your EPAM email | Your CodeMie/EPAM account username |
| `CODEMIE_KEYCLOAK_PASSWORD` | your password | Your account password |
| `CODEMIE_KEYCLOAK_REALM` | `codemie-prod` | Keycloak realm CodeMie uses in EPAM lab |
| `CODEMIE_KEYCLOAK_SERVER_URL` | `https://auth.codemie.lab.epam.com` | Where to request tokens |

### Runtime flow

```
1. POST .../protocol/openid-connect/token
   grant_type=password
   client_id=codemie-sdk
   username=you@epam.com
   password=***

2. Cache access_token for ~55 minutes

3. POST {CODEMIE_API_URL}/v1/assistants/{assistant_id}/model
   Authorization: Bearer <access_token>
   { "text": "...", "stream": false }
```

---

## Option A — client secret (production)

```env
CODEMIE_KEYCLOAK_CLIENT_ID=your-service-account-client-id
CODEMIE_KEYCLOAK_CLIENT_SECRET=your-client-secret
CODEMIE_KEYCLOAK_REALM=codemie-prod
CODEMIE_KEYCLOAK_SERVER_URL=https://auth.codemie.lab.epam.com
```

No username or password. Get client ID/secret from your CodeMie/EPAM admin.

---

## Assistant ID

Set one of:

- `CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID` — preferred for this project
- `CODEMIE_MY_AGENT_ASSISTANT_ID` — generic fallback

Copy the UUID from the CodeMie UI → open your assistant → copy ID.

---

## Smoke test

```bash
npm run codemie:smoke
```

Requires the env vars above to be set in your shell (or Vercel project settings).

Manual Keycloak test:

```bash
curl -X POST "https://auth.codemie.lab.epam.com/realms/codemie-prod/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password&client_id=codemie-sdk&username=YOU@epam.com&password=YOUR_PASSWORD"
```

---

## When to use which option

**Option B (password)** — good for:

- Local development
- Personal scripts
- Quick integration testing

**Not ideal for:**

- Production backends
- CI/CD
- Shared servers (password in env is a security risk)

**Option A (client secret)** — use for production deployments on Vercel.

---

## Common issues

| Symptom | Likely cause |
|---------|----------------|
| 401 from Keycloak | Wrong username/password, or account not in `codemie-prod` realm |
| HTML instead of JSON from CodeMie API | Token invalid or expired |
| 403 on assistant call | Assistant not shared with your account |
| Works locally, fails in CI | Password grant blocked — switch to client secret |
| `CodeMie auth not configured` | No auth block set in environment variables |
