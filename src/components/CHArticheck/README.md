# Articheck Condition Report Panel — Content Hub External Page

Displays Articheck condition reports for the current asset, pulled via
the Articheck API using the asset's `EPAM.artworkId` as the bridge key.

---

## Project structure

```
CHArticheck/
├── index.tsx                         ← Content Hub external page entry
├── ArticheckPanel.tsx                ← main React panel component
├── auth.js                           ← Articheck auth proxy (Vercel function)
└── reports.js                        ← Articheck reports proxy (Vercel function)
```

---

## User flow

1. User opens the asset detail page in Content Hub
2. Articheck login screen appears (dark navy, Articheck branding)
3. User enters their Articheck credentials and clicks Sign in
4. Vercel function exchanges credentials for a bearer token via Articheck API
5. Vercel function fetches all condition reports for the artwork
6. Panel renders:
   - Artifact summary bar (title, artist, dimensions, current condition)
   - Condition reports (collapsible, most recent first)
     - Examiner details and date
     - Condition category badge (Excellent / Good / Fair / Poor / Critical)
     - Condition notes
     - Condition images with lightbox
     - Full + summary PDF download buttons
   - Exhibition and loan history (groups)

---

## Deploying to Vercel

1. Copy `vercel-api/` contents into your Vercel project under `/api/`
2. No environment variables needed for the dummy flow
3. For production, the Articheck API base URL is `https://api.articheck.com/v2`
   — no secrets needed beyond the user's own credentials (token-based)

---

## Registering in Content Hub as an external page

1. Go to **Manage > Pages**
2. Create a new External Page
3. Set URL to your hosted component
4. Add option binding:
   - Name: `artworkId`
   - Source: Entity field
   - Field: `EPAM.artworkId`
5. Attach to Asset detail page layout

---

## Switching from dummy to production

### auth.js
Uncomment the production block. The POST goes to:
`https://api.articheck.com/v2/auth-token/`
Body: `{ username, password }`
Response: `{ token }`

### reports.js
Uncomment the production block. Assumes a GET endpoint:
`https://api.articheck.com/v2/reports/?id=:artworkId`

Confirm this with Articheck support — their public docs only show POST.
If the GET shape differs from the POST response, update `transformResponse()`
in reports.js to normalise it. The frontend expects this shape:

```json
{
  "artifact_id": 5427,
  "artifact_url": "...",
  "title": "...",
  "artist": "...",
  "media_template": "...",
  "date_of_creation": "...",
  "dimensions": "...",
  "lender": "...",
  "groups": [ { "id", "code", "type", "name", "venues", "start", "end", "description" } ],
  "reports": [
    {
      "report_id": 5437,
      "created_at": "unix_timestamp",
      "updated_at": "unix_timestamp",
      "updated_by": "email",
      "examined_by": "name",
      "examiner_title": "title",
      "examination_location": "location",
      "general_conditions_category": "Good",
      "general_conditions_notes": "...",
      "pdf_url": "...",
      "summary_pdf_url": "...",
      "images": [ { "id", "title", "url" } ]
    }
  ]
}
```

---

## Content Hub schema (for reference)

| Entity | Field          | Type   | Purpose                      |
|--------|----------------|--------|------------------------------|
| Asset  | EPAM.artworkId | String | Passed to Articheck as `id`  |

Read-only. No write-back to Content Hub in this version.

---

## Notes on the Articheck API

- Auth: POST `https://api.articheck.com/v2/auth-token/` — user-scoped tokens
- The API is user-scoped, so each Content Hub user authenticates
  with their own Articheck credentials. No shared service account needed.
- Images are base64 on write but will need a URL on read — confirm with Articheck
- Groups can be exhibitions or general (loans, storage events, etc.)
- `general_conditions_category` is free text in Articheck — the component
  handles: Excellent, Good, Fair, Poor, Critical. Any other value gets a grey badge.
