# CHBrandCompliance

Content Hub external component for **Cytiva DAM Brand Compliance Manager**. Reviews the current asset against brand guidelines using an EPAM **CodeMie** assistant.

## Options

| Option | Required | Description |
|--------|----------|-------------|
| `apiBaseUrl` | Yes | Base URL of your Vercel deployment hosting the embed API (e.g. `https://chcomponents.vercel.app`) |
| `apiToken` | Yes | Bearer token matching `BRAND_COMPLIANCE_API_SECRET` on the server |
| `brandName` | No | Brand label shown in the UI (default: `Cytiva`) |
| `brandGuidelines` | No | Free-text brand rules sent to CodeMie with each analysis |
| `complianceReportProperty` | No | Asset property for the full report JSON (default: `BrandComplianceReport`) |
| `complianceStatusProperty` | No | Optional string property for `pass` / `warning` / `fail` |
| `complianceScoreProperty` | No | Optional number property for score `0–100` |
| `complianceAnalyzedAtProperty` | No | Optional string/datetime property for last run timestamp |
| `nameProperty` | No | Entity property for asset display name |
| `fileNameProperty` | No | Entity property for file name |
| `descriptionProperty` | No | Entity property for description |
| `metadataProperties` | No | Comma-separated property names to include in the CodeMie prompt |

## Content Hub config (JSON)

Content Hub stores component settings on **`context.config`**, not `context.options`.

```json
{
  "apiBaseUrl": "https://your-project.vercel.app",
  "apiToken": "your-secure-token",
  "brandName": "Cytiva",
  "brandGuidelines": "Use official Cytiva logo lockups, Pantone 2945 C blue, Helvetica Neue typography, and include regulatory disclaimers on promotional assets.",
  "complianceReportProperty": "BrandComplianceReport",
  "complianceStatusProperty": "BrandComplianceStatus",
  "complianceScoreProperty": "BrandComplianceScore",
  "complianceAnalyzedAtProperty": "BrandComplianceAnalyzedAt"
}
```

## Content Hub entity fields (create these on the asset definition)

| Property | Type | Purpose |
|----------|------|---------|
| `BrandComplianceReport` | **JSON** (recommended) | Full report object — required for load/save |
| `BrandComplianceStatus` | String | Optional: `pass` / `warning` / `fail` for filters |
| `BrandComplianceScore` | Integer / Decimal | Optional: score for sorting |
| `BrandComplianceAnalyzedAt` | String or DateTime | Optional: last run time |

A **JSON** member type is preferred. The component stores the report as a real JSON object by default (`complianceReportStorage: "json"`).

If you use a String/long-text member instead, set `"complianceReportStorage": "string"` in config.

### Behaviour

1. On open → load `BrandComplianceReport` from the current asset and show the last result
2. On **Run / Re-run** → call CodeMie, then PUT the JSON back onto the asset
3. Re-open the asset later → previous result appears immediately (labelled “Saved result”)

## Server setup (Vercel)

1. Deploy this repository to Vercel.
2. Set environment variables (see `api/.env.example` and `api/lib/codemie/README.md`).

### Production (Option A — client secret)

```env
BRAND_COMPLIANCE_API_SECRET=your-secure-token
CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CODEMIE_KEYCLOAK_CLIENT_ID=your-service-account-client-id
CODEMIE_KEYCLOAK_CLIENT_SECRET=your-client-secret
CODEMIE_KEYCLOAK_REALM=codemie-prod
CODEMIE_KEYCLOAK_SERVER_URL=https://auth.codemie.lab.epam.com
CODEMIE_API_URL=https://codemie.lab.epam.com/code-assistant-api
BRAND_COMPLIANCE_CORS_ORIGIN=https://your-content-hub-origin.sitecoresandbox.cloud
```

### Development (Option B — user password grant)

Same auth path Signal-Monitor uses for dev and personal scripts. **Not recommended for production.**

```env
BRAND_COMPLIANCE_API_SECRET=your-secure-token
CODEMIE_BRAND_COMPLIANCE_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CODEMIE_KEYCLOAK_CLIENT_ID=codemie-sdk
CODEMIE_KEYCLOAK_USERNAME=you@epam.com
CODEMIE_KEYCLOAK_PASSWORD=your-password
CODEMIE_KEYCLOAK_REALM=codemie-prod
CODEMIE_KEYCLOAK_SERVER_URL=https://auth.codemie.lab.epam.com
CODEMIE_API_URL=https://codemie.lab.epam.com/code-assistant-api
```

You do **not** need `CODEMIE_USE_KEYCLOAK_AUTH=true` — Keycloak is auto-detected when username + password are set.

3. Use the same `BRAND_COMPLIANCE_API_SECRET` value as `apiToken` in Content Hub.

CodeMie credentials stay on the server — they are **not** embedded in the JS bundle.

### Verify CodeMie auth

```bash
# Test Keycloak token (Option B)
curl -X POST "https://auth.codemie.lab.epam.com/realms/codemie-prod/protocol/openid-connect/token" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=password&client_id=codemie-sdk&username=YOU@epam.com&password=YOUR_PASSWORD"

# Or run the Node smoke test (set env vars first)
npm run codemie:smoke
```

## Embed API

- `POST /api/brand-compliance/analyze` — run CodeMie brand compliance analysis for an asset

## Content Hub page setup

1. Add an External component → **From path** → `https://your-project.vercel.app/CHBrandCompliance.js`
2. Paste the JSON config above into the component **Configuration** field.
3. Place the component on an **asset detail** page so `context.entity` is the DAM asset.

## Build

```bash
COMPONENT=CHBrandCompliance npm run build
npm run prepare-hosting
```

Output: `dist/CHBrandCompliance.js`

## Features

- Reads asset metadata and preview URL from the current Content Hub entity
- **Downloads the preview rendition server-side**, uploads it to CodeMie (`POST /v1/files/`), and attaches it via `file_names` for visual analysis
- Falls back to metadata-only if the preview cannot be fetched/uploaded
- Displays compliance score, summary, passed checks, and actionable issues

## Visual / document analysis flow

```
Content Hub asset
  → resolve preview (images) or downloadOriginal (PDFs)
  → Vercel downloads file bytes
  → CodeMie POST /v1/files/  (multipart)
  → CodeMie POST /v1/assistants/{id}/model  with file_names: [file_url]
```

- **Images** — uses preview/thumbnail renditions  
- **PDFs** — prefers `downloadOriginal` / original file (not just a page thumbnail)  
- Max download size defaults to **25 MB** (`BRAND_COMPLIANCE_MAX_FILE_BYTES`)

Ensure the CodeMie assistant uses a model that can read images **and** PDFs (e.g. GPT-4o).
