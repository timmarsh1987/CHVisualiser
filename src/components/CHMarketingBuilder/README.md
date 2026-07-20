# CHMarketingBuilder

Content Hub external component for social, email, and newsletter asset building with
brand-kit enforcement and a governed raw-HTML override path.

## Structure

```
CHMarketingBuilder/
  index.tsx                    // createExternalRoot entry (Content Hub pattern)
  MarketingBuilderPanel.tsx    // loads data and routes to the correct builder
  options.ts                   // parses context.options / entity fields
  types.ts                     // EPAM.* entity schema types
  api.ts                       // Content Hub REST proxy client
  BrandKitContext.tsx          // brand kit provider for zone rendering
  sanitizeHtml.ts              // lightweight HTML sanitizer for zones
  loadHtml2Canvas.ts           // CDN loader (kept out of bundle for portal upload)
  SocialAssetBuilder.tsx       // fixed-layout social builder (PNG export)
  EmailNewsletterBuilder.tsx   // stacked-zone email builder (HTML export)
  TemplateAdminZoneEditor.tsx  // admin screen for template zones
  TemplateZoneRenderer.tsx     // shared zone renderer
  AssetPicker.tsx              // collection-restricted image picker
  EjectToHtmlButton.tsx        // permission-gated raw HTML override
  index.css
```

## Component options

| Option | Type | Description |
|--------|------|-------------|
| `builderMode` | `social` \| `email` \| `admin` | Which builder UI to show. Defaults from template channel type. |
| `templateId` | string | EPAM.Template entity ID |
| `marketingAssetId` | string | EPAM.MarketingAsset entity ID (required for social/email) |
| `brandKitId` | string | Optional override; otherwise taken from the template |
| `userHasOverridePermission` | boolean | Shows the raw HTML eject button when true |
| `renderEmailApiUrl` | string | Server endpoint for email HTML rendering (default `/api/render-email-html`) |
| `contentHubProxyBase` | string | Proxy base for Management API calls (default `/api/content-hub`) |
| `html2canvasCdnUrl` | string | CDN URL for social PNG export (loaded at runtime, not bundled) |
| `figmaImportApiUrl` | string | Figma import proxy (default `/api/figma/import`) |
| `figmaImportApiToken` | string | Bearer token when `FIGMA_IMPORT_API_SECRET` (or brand-compliance secret) is set |

## Figma → template zones

In Template admin, **Import from Figma** accepts a frame URL (must include `node-id`).

Name layers for stable mapping:

```
zone:headline | type:Heading
zone:hero | type:Image
zone:body | type:Text
zone:logo | type:Logo
zone:cta | type:CTA Button
```

Server env: `FIGMA_ACCESS_TOKEN` (required), optional `FIGMA_IMPORT_API_SECRET`. See `api/.env.example`.

## Portal asset upload

`html2canvas` is intentionally loaded from CDN at runtime rather than bundled. Content Hub's portal asset upload pipeline can fail on bundles that contain canvas/image-processing code (`Unable to cast object of type 'System.Decimal' to type 'System.Double'`).

Social PNG export requires network access to the CDN (default: jsDelivr). Override with `html2canvasCdnUrl` if needed.

## Build

Built as `CHMarketingBuilder.js` via the standard component build:

```bash
COMPONENT=CHMarketingBuilder npm run build
```

## External dependencies

- `/api/content-hub/*` — serverless proxy for Content Hub Management API
- `/api/render-email-html` — server-side email HTML renderer (see original PoC `api/render-email-html.ts`)
