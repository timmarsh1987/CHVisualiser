# Hosting CH component bundles (portal upload workaround)

If **Settings → Portal assets** upload fails with:

```text
Unable to cast object of type 'System.Decimal' to type 'System.Double'
```

that is a **Content Hub platform bug** during portal asset processing — not a problem with the bundle contents. When every `.js` file fails the same way, use external hosting and **From path** in the External component instead.

## Vercel (recommended for Brand Compliance)

This repo is set up so **one Vercel project** serves:

| Path | Purpose |
|------|---------|
| `/CHBrandCompliance.js` | Content Hub External component bundle |
| `/CHFineArtTagging.js` | Fine Art Tagging Analyst bundle |
| `/api/brand-compliance/analyze` | CodeMie brand compliance proxy |
| `/api/fine-art-tagging/analyze` | CodeMie fine-art tagging proxy |

### 1. Prepare bundles locally

```bash
COMPONENT=CHBrandCompliance npm run build
npm run prepare-hosting
```

Commit `public/CHBrandCompliance.js` (and other bundles you need). Vercel serves `public/` as static files and does **not** need a build step.

### 2. Create / import the Vercel project

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import the GitHub repo (`timmarsh1987/CHVisualiser` or your fork)
3. Framework Preset: **Other**
4. Root Directory: `.` (repo root)
5. Build Command: `npm run vercel-build` (skips `tsc`; serves committed `public/`)
6. Output Directory: `public` (already set in `vercel.json`)
7. Click **Deploy**

> Note: Setting `buildCommand` to `null` does **not** skip the build — Vercel falls back to `npm run build`, which runs `tsc` and fails. Use `npm run vercel-build` instead.

### 3. Add environment variables

Vercel → Project → **Settings → Environment Variables**

Add for **Production** (and Preview if useful):

```env
BRAND_COMPLIANCE_API_SECRET=pick-a-long-random-secret
CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CODEMIE_KEYCLOAK_CLIENT_ID=codemie-sdk
CODEMIE_KEYCLOAK_USERNAME=you@epam.com
CODEMIE_KEYCLOAK_PASSWORD=your-password
CODEMIE_KEYCLOAK_REALM=codemie-prod
CODEMIE_KEYCLOAK_SERVER_URL=https://auth.codemie.lab.epam.com
CODEMIE_API_URL=https://codemie.lab.epam.com/code-assistant-api
BRAND_COMPLIANCE_CORS_ORIGIN=https://epamdemo.sitecoresandbox.cloud
```

For production later, replace username/password with client credentials:

```env
CODEMIE_KEYCLOAK_CLIENT_ID=your-service-account-client-id
CODEMIE_KEYCLOAK_CLIENT_SECRET=your-client-secret
```

**Redeploy** after adding env vars (Deployments → … → Redeploy).

### 4. Smoke-test the API

```bash
curl -X POST "https://YOUR-PROJECT.vercel.app/api/brand-compliance/analyze" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer pick-a-long-random-secret" \
  -d "{\"asset\":{\"id\":\"123\",\"name\":\"Hero\",\"fileName\":\"hero.jpg\",\"mimeType\":\"image/jpeg\"}}"
```

Also open in a browser:

```text
https://YOUR-PROJECT.vercel.app/CHBrandCompliance.js
```

You should see JavaScript source (not a 404).

### 5. Wire Content Hub (epamdemo)

1. **Manage → Pages** → asset detail page → add **External** component
2. **From path**:

```text
https://YOUR-PROJECT.vercel.app/CHBrandCompliance.js
```

3. **Configuration** JSON:

```json
{
  "apiBaseUrl": "https://YOUR-PROJECT.vercel.app",
  "apiToken": "pick-a-long-random-secret",
  "brandName": "Cytiva",
  "brandGuidelines": "Use official Cytiva logo lockups, brand blue, approved typography, and regulatory disclaimers on promotional assets."
}
```

`apiToken` must match `BRAND_COMPLIANCE_API_SECRET`.

### 6. After code changes

```bash
COMPONENT=CHBrandCompliance npm run build
npm run prepare-hosting
git add public/CHBrandCompliance.js
git commit -m "Rebuild CHBrandCompliance for hosting"
git push
```

Vercel redeploys from the push. Bust Content Hub cache if needed: append `?v=2` to the JS path.

---

## Content Hub setup (summary)

1. External component → **From path** → full HTTPS URL to the `.js` file.
2. Save the page layout.
3. Open an asset detail page and click **Run compliance check**.

## Sitecore support

Open a ticket with:

- Exact error message
- Content Hub version / environment
- Note that **all** JavaScript portal asset uploads fail
- Request fix for portal asset rendition / metadata processing (`Decimal` vs `Double`)
