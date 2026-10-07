# CHImageDetection

Content Hub external component that reviews the current **image** asset with an EPAM **CodeMie** assistant. The user chooses which checks to run. An **All** checkbox selects or clears every check.

Checks:

- Children / minors — whether people who appear to be minors are visible. Short, non-graphic reason only.
- Animals
- Cultural or sensitive imagery — a review flag, not a judgment
- Firearms or offensive items — firearms, other weapons, hate symbols, or graphic violence
- Tell me what you see — a description of the image. This does not flag the asset
- Medical or pharmaceuticals
- Logo detection — names a recognized logo when it can
- Nudity or graphic content — a short non-graphic reason only

## Options

| Option | Required | Description |
|--------|----------|-------------|
| `apiBaseUrl` | Yes | Base URL of the Vercel deployment hosting the embed API |
| `apiToken` | Yes | Bearer token matching the embed API secret on the server |
| `detectMinors` | No | When `false`, Children / minors starts unchecked. Omitted checks start selected |
| `detectAnimals` | No | When `false`, Animals starts unchecked |
| `detectCulturalSensitive` | No | When `false`, Cultural or sensitive imagery starts unchecked |
| `detectFirearmsOffensive` | No | When `false`, Firearms or offensive items starts unchecked |
| `detectWhatYouSee` | No | When `false`, Tell me what you see starts unchecked |
| `detectMedical` | No | When `false`, Medical or pharmaceuticals starts unchecked |
| `detectLogos` | No | When `false`, Logo detection starts unchecked |
| `detectNudityGraphic` | No | When `false`, Nudity or graphic content starts unchecked |
| `detectionReportProperty` | No | Asset property for the full report JSON (default: `ImageDetectionReport`) |
| `detectionReportStorage` | No | `json` (default) or `string` |
| `detectionStatusProperty` | No | Optional string property for `clear` / `flagged` |
| `detectionAnalyzedAtProperty` | No | Optional string/datetime property for last run timestamp |
| `nameProperty` | No | Entity property for the asset display name |
| `fileNameProperty` | No | Entity property for the file name |
| `descriptionProperty` | No | Entity property for the description |
| `metadataProperties` | No | Comma-separated property names to include with the image |

## Content Hub config (JSON)

Content Hub stores component settings on **`context.config`**, not `context.options`.

```json
{
  "apiBaseUrl": "https://your-project.vercel.app",
  "apiToken": "your-secure-token",
  "detectionReportProperty": "ImageDetectionReport",
  "detectionStatusProperty": "ImageDetectionStatus",
  "detectionAnalyzedAtProperty": "ImageDetectionAnalyzedAt"
}
```

## Content Hub entity fields

Create these on the asset definition if you want the result to persist:

| Property | Type | Purpose |
|----------|------|---------|
| `ImageDetectionReport` | **JSON** | Full report. Required for load/save |
| `ImageDetectionStatus` | String | Optional: `clear` / `flagged` |
| `ImageDetectionAnalyzedAt` | String or DateTime | Optional: last run time |

If those members do not exist yet, the panel still shows the fresh result and reports the save error.

### Behaviour

1. On open, load `ImageDetectionReport` from the current asset. The page entity is checked first, then a full entity GET, because Content Hub often omits custom JSON members from the page context. The saved result is shown immediately, and the checkboxes match the checks from that run.
2. The user picks checks (All selects or clears the four checks) and clicks **Analyze image**.
3. The API downloads the preview rendition, uploads it to CodeMie, and asks only for the selected checks.
4. The report is written back onto the asset. Re-open later and the saved result appears immediately.

Non-image assets (PDF, video, and similar) are rejected. At least one check must be selected.

Checks and findings are collapsed. Traffic-light pills above the findings show each check: green when it ran and nothing was found, red when it was detected, grey when it was not selected. **Scene** is blue because that check describes the image and does not flag it.

When the model can place a subject, the saved report includes approximate boxes. **Show marks on image** draws them on the preview. Set `"showOverlay": false` to keep the boxes in the saved report without drawing them. These are not measured coordinates from a dedicated detector.

## Server setup (Vercel)

Set a vision-capable assistant id and reuse the existing CodeMie auth:

```env
CODEMIE_IMAGE_DETECTION_ASSISTANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

`apiToken` must match `BRAND_COMPLIANCE_API_SECRET`, or `IMAGE_DETECTION_API_SECRET` when the earlier embed secrets are unset. See `api/.env.example` and `api/lib/codemie/README.md`.

## Build

```bash
COMPONENT=CHImageDetection npm run build
```

Output: `dist/CHImageDetection.js`. External component path: `https://your-project.vercel.app/CHImageDetection.js`.
