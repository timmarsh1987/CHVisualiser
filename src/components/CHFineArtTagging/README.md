# CHFineArtTagging

Content Hub external component for a **Fine Art Tagging Analyst**. Reviews the current artwork asset using an EPAM **CodeMie** assistant and saves structured tags / visual analysis as JSON on the entity.

## Options

| Option | Required | Description |
|--------|----------|-------------|
| `apiBaseUrl` | Yes | Base URL of your Vercel deployment hosting the embed API |
| `apiToken` | Yes | Bearer token matching `BRAND_COMPLIANCE_API_SECRET` or `FINE_ART_TAGGING_API_SECRET` |
| `displayName` | No | Label shown in the UI (default: `Fine Art`) |
| `taggingReportProperty` | No | Asset property for the full report JSON (default: `FineArtTaggingReport`) |
| `taggingReportStorage` | No | `json` (default) or `string` |
| `mustHaveTagsProperty` | No | Optional string property for comma-separated must-have tags |
| `niceToHaveTagsProperty` | No | Optional string property for comma-separated nice-to-have tags |
| `taggingAnalyzedAtProperty` | No | Optional string/datetime property for last run timestamp |
| `nameProperty` | No | Entity property for display name (default prefers `ArtworkTitle`) |
| `fileNameProperty` | No | Entity property for file name |
| `descriptionProperty` | No | Entity property for description (default prefers `ArtworkDescription`) |
| `metadataProperties` | No | Comma-separated property names for the CodeMie prompt. Default: title, description, dimensions, size fields |

### Catalog context sent to CodeMie (automatic)

Without extra config, analysis includes:

- **Properties:** `ArtworkTitle`, `ArtworkDescription`, `DimensionUnframed` / `DimensionFramed`, `ArtWidth` / `ArtHeight` / `ArtDepth` / `ArtLength` / `ArtDiameter`, `ArtworkHasFrame`, `ArtworkWeight`
- **Relations (via `related_paths`):** Artist (`ArtistsWorks`), Medium (`ArtworkMedium`), Year (`ArtworkYear`), Exhibitions (`ExhibitionToArtwork`)

Commercial fields (price, insurance, sales) are **not** sent by default. Add them via `metadataProperties` if needed.

## Content Hub config (JSON)

Content Hub stores component settings on **`context.config`**, not `context.options`.

```json
{
  "apiBaseUrl": "https://your-project.vercel.app",
  "apiToken": "your-secure-token",
  "displayName": "Fine Art",
  "taggingReportProperty": "FineArtTaggingReport",
  "mustHaveTagsProperty": "FineArtMustHaveTags",
  "niceToHaveTagsProperty": "FineArtNiceToHaveTags",
  "taggingAnalyzedAtProperty": "FineArtTaggingAnalyzedAt"
}
```

## Content Hub entity fields (create these on the asset definition)

| Property | Type | Purpose |
|----------|------|---------|
| `FineArtTaggingReport` | **JSON** (recommended) | Full tagging report object — required for load/save |
| `FineArtMustHaveTags` | String | Optional: comma-separated must-have tags for search/filters |
| `FineArtNiceToHaveTags` | String | Optional: comma-separated nice-to-have tags |
| `FineArtTaggingAnalyzedAt` | String or DateTime | Optional: last run time |

A **JSON** member type is preferred. The component stores the report as a real JSON object by default (`taggingReportStorage: "json"`).

If you use a String/long-text member instead, set `"taggingReportStorage": "string"` in config.

### Saved report shape

One artwork entry (from CodeMie’s `artworks[]`) plus persistence metadata:

```json
{
  "file_name": "…",
  "concise_visual_analysis": { "…": "…" },
  "medium_format_cues": { "likely_medium": "…", "evidence": "…" },
  "style_movement_hypotheses": [{ "label": "…", "confidence": 0.7, "evidence": "…" }],
  "suggested_tags_grouped": {
    "Subject": { "tags": ["swan"], "rationale": "…" }
  },
  "tag_pack": {
    "must_have": ["swan", "bird"],
    "nice_to_have": ["decorative patterning"]
  },
  "analyzedAt": "2026-07-21T12:00:00.000Z",
  "imageAttached": true
}
```

### Behaviour

1. On open → load `FineArtTaggingReport` from the current asset and show the last result
2. On **Run / Re-run** → call CodeMie, then PUT the JSON (+ optional tag/timestamp fields) back onto the asset
3. Re-open the asset later → previous result appears immediately (labelled “Saved result”)

## Server setup (Vercel)

1. Deploy this repository to Vercel.
2. Set environment variables (see `api/.env.example` and `api/lib/codemie/README.md`).

```env
# Same secret as Brand Compliance is fine — or use a dedicated one
BRAND_COMPLIANCE_API_SECRET=your-secure-token
# FINE_ART_TAGGING_API_SECRET=your-secure-token

CODEMIE_FINE_ART_TAGGING_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
CODEMIE_KEYCLOAK_CLIENT_ID=…
CODEMIE_KEYCLOAK_CLIENT_SECRET=…
CODEMIE_KEYCLOAK_REALM=codemie-prod
CODEMIE_KEYCLOAK_SERVER_URL=https://auth.codemie.lab.epam.com
CODEMIE_API_URL=https://codemie.lab.epam.com/code-assistant-api
BRAND_COMPLIANCE_CORS_ORIGIN=https://your-content-hub-origin.sitecoresandbox.cloud
```

Use the same secret value as `apiToken` in Content Hub.

CodeMie credentials stay on the server — they are **not** embedded in the JS bundle.

## Embed API

- `POST /api/fine-art-tagging/analyze` — run CodeMie fine-art tagging for an asset

## Content Hub page setup

1. Add an External component → **From path** → `https://your-project.vercel.app/CHFineArtTagging.js`
2. Paste the JSON config above into the component **Configuration** field.
3. Place the component on an **asset detail** page so `context.entity` is the DAM asset.

## Build

```bash
COMPONENT=CHFineArtTagging npm run build
npm run prepare-hosting
```

Output: `dist/CHFineArtTagging.js`

## Features

- Reads asset metadata and preview URL from the current Content Hub entity
- Downloads the preview rendition server-side, uploads it to CodeMie, and attaches it via `file_names`
- Falls back to metadata-only if the preview cannot be fetched/uploaded
- Displays must-have / nice-to-have tags, style hypotheses, visual analysis, and grouped suggestions
- Saves the full JSON report (and optional denormalized tag fields) onto the asset

## Visual analysis flow

```
Content Hub preview URL
  → Vercel downloads image bytes
  → CodeMie POST /v1/files/  (multipart)
  → CodeMie POST /v1/assistants/{id}/model  with file_names: [file_url]
```

Ensure the CodeMie assistant uses a vision-capable model so it can inspect the attached image.
