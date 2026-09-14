# C2PA provenance service

Node 22 provenance processor used by the repository's Vercel API route for
image extraction, Content Hub write-back, and Content Hub JSON history.

## Local verification

```powershell
npm install
npm test
npm run typecheck
npm run inspect -- C:\samples\firefly.jpg
npm run inspect -- C:\samples\camera.jpg
```

Pass `--raw` to the inspect command to print the complete manifest store.
`c2pa-node` uses a native binary, so install dependencies on the same OS and
architecture used to run the service.

## Content Hub setup

Before changing the schema, search **all entity definitions** for collisions
with these globally unique member names:

| Member | Type |
| --- | --- |
| `EPAM.aiGenerated` | Boolean |
| `EPAM.aiEdited` | Boolean |
| `EPAM.aiSourceTool` | String, single line, non-multilingual |
| `EPAM.provenanceVerified` | Boolean |
| `EPAM.provenanceCheckedAt` | DateTime |
| `SC.Asset.C2PA.Summary` | JSON |

Add the collision-free members to the target asset definition (often
`M.Asset`, but confirm it in the target instance). Mark the Boolean members as
searchable and add `EPAM.aiGenerated` and `EPAM.aiEdited` as search facets.
Create and publish a saved search named **AI Generated** with
`EPAM.aiGenerated = true`. Schema and search configuration are instance-admin
operations and are intentionally not guessed or automated by this service.

Create a least-privilege OAuth client that can:

- read the asset entity and its original rendition;
- download the original image;
- update the five provenance members and `SC.Asset.C2PA.Summary`.

The JSON summary contains the latest readable manifest summary and a bounded
history of checks. `SUMMARY_HISTORY_LIMIT` defaults to 50. It excludes binary
resources and thumbnails to keep the entity property manageable.

Configure an asset create/update webhook to:

```text
POST https://<vercel-project>/api/c2pa/webhook
Authorization: Bearer <C2PA_WEBHOOK_SECRET>
```

The parser accepts common Content Hub payload shapes including
`SaveEntityMessage.TargetId`. Capture one real payload from the target sandbox
and add it as a fixture before the demo.

Content Hub deployments commonly update entities with `PUT` plus an
`entitydefinition` link, so that is the default. Set
`CH_ENTITY_UPDATE_METHOD=PATCH` if the target instance supports partial PATCH.

## Configuration

Add the values listed in `.env.example` to the Vercel project's encrypted
environment variables. Do not expose them through Content Hub component
options or browser code.

Authentication uses only the Content Hub OAuth Client Credentials grant at
`<CH_BASE_URL>/oauth/token`. The service caches short-lived access tokens and
automatically reacquires one before expiry or after the first API 401. No
username, password, manually supplied access token, or refresh token is used.

`CH_TOKEN_URL`, the asset definition, and original-rendition names are
instance-specific. `FILE_FETCH_*` implements exponential backoff for the
upload/rendition race. `WEBHOOK_DEDUP_WINDOW_SECONDS` prevents the provenance
write-back from creating an update-webhook loop. This history is not
independent of Content Hub and cannot record an event when Content Hub itself
is unavailable.

## HTTP API

- `POST /api/c2pa/webhook` processes an asset event.
- `GET /api/c2pa/webhook?assetId=<id>` authenticates and reads one asset as a
  harmless connectivity diagnostic.

Both operations require `Authorization: Bearer <C2PA_WEBHOOK_SECRET>`.

## Deployment

Deploy through the repository's existing Vercel project. The route requires a
plan that supports its configured 300-second maximum duration, and Vercel must
package the `c2pa-node` Linux native binary. Test one real C2PA image in the
deployed environment before connecting the Content Hub webhook.

## Known v1 gap

Assets without a manifest are correctly marked unverified and not AI flagged,
but there is no manual AI-assisted declaration flow yet.
