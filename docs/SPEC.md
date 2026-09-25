# EPAM Image Composer: Build Spec (v2)

Audience: Cursor, and the developer driving it.
Product: a Sitecore Content Hub module that places a background-removed headshot on top of one of a few managed backgrounds and saves the result as a new asset.

What changed since v1:
- Background removal stays a separate step. The composer never calls the transform.
- The transform now returns a transparent PNG and sets `assetVariant = cutout`. Its own brief is `TRANSFORM_BRIEF.md`.
- The composer trusts `assetVariant` to know what it is opening, and checks the cutout really has transparency before it lets the user save.

## 1. Goal

A user opens a cutout asset, picks one of up to four backgrounds, drags and scales the headshot into position, and saves a 1200 x 1200 JPEG as a new asset. The layout is stored so it can be reopened and edited later.

## 2. How the pieces fit

```
Original headshot (assetVariant = original)
   |  image transform: remove background  (see TRANSFORM_BRIEF.md)
   v
Cutout, transparent PNG (assetVariant = cutout)   relation: EPAMCutoutToSourceAsset
   |  "Open in composer" action, then the composer (this spec)
   v
Composed JPEG (assetVariant = composed)   relations: EPAMComposedAssetToCutout, EPAMComposedAssetToBackground
```

Two separate deliverables, built in this order:
1. The transform update (`TRANSFORM_BRIEF.md`). It creates the cutouts the composer needs.
2. The composer (this document).

## 3. Stack and conventions

- Sitecore Content Hub, custom schema under the `EPAM.` prefix.
- React with TypeScript, hosted as a custom page component inside Content Hub.
- All schema and property names are camelCase and human readable.
- Prefer inline editing and side panels. **No modals** anywhere in the composer.
- Admin workflows must be low-code: backgrounds are managed as entities, not hardcoded.
- No em dashes in any user-facing text or comments.

## 4. Files in the repo

| File | Purpose |
|---|---|
| `TRANSFORM_BRIEF.md` | Separate brief for the image transform update. Not part of the composer build. |
| `schema/epam-composer-schema.json` | Property additions, entity, relations and seed data. The wrapper shape needs matching to a real export from the instance. |
| `src/ImageComposer.tsx` | Canvas editor, side panel, save button, stale-cutout notice. |
| `src/cutoutSource.ts` | Resolves the cutout's original-file URL and a fingerprint. |
| `src/contentHubApi.ts` | Loads backgrounds, loads a saved composition, saves a new composed asset. |
| `src/index.tsx` | Page entry point. |
| `src/openInComposerAction.ts` | "Open in composer" button on the asset detail page, cutouts only. |
| `src/adapterTagging.ts` | Reference for the transform change. The real change is made in the transform repo using `TRANSFORM_BRIEF.md`. |

Treat the code as a starting point, not final. Several API calls were written from memory and must be verified (section 11).

## 5. Data model

### 5.1 New properties on `M.Asset`

| Property | Type | Values or notes |
|---|---|---|
| `assetVariant` | Dropdown (string) | `original`, `cutout`, `composed`. Default `original`. Set to `cutout` by the transform and `composed` by the composer. |
| `compositionLayout` | Long text | JSON written by the composer. |

### 5.2 New entity `EPAM.ComposerBackground`

| Property | Type | Default | Notes |
|---|---|---|---|
| `backgroundName` | String, mandatory | | Shown under the thumbnail |
| `sortOrder` | Integer, mandatory | 100 | Ascending |
| `isActive` | Boolean, mandatory | true | Admins switch off instead of deleting |
| `defaultAnchorX` | Decimal 0 to 1 | 0.5 | Horizontal center of the cutout |
| `defaultAnchorBottom` | Decimal 0 to 1.5 | 1 | Bottom edge of the cutout |
| `defaultHeadshotHeight` | Decimal 0.1 to 1.6 | 0.85 | Cutout height as a fraction of canvas height |

### 5.3 Relations

| Relation | Parent | Child | Created by |
|---|---|---|---|
| `EPAMComposerBackgroundToAsset` | `M.Asset` (the background image) | `EPAM.ComposerBackground` | Admin |
| `EPAMCutoutToSourceAsset` | `M.Asset` (original headshot) | `M.Asset` (cutout) | Transform |
| `EPAMComposedAssetToCutout` | `M.Asset` (cutout) | `M.Asset` (composed) | Composer |
| `EPAMComposedAssetToBackground` | `EPAM.ComposerBackground` | `M.Asset` (composed) | Composer |

### 5.4 Layout JSON (stored in `compositionLayout`)

```json
{
  "cx": 0.5,
  "by": 1,
  "h": 0.85,
  "flipped": false,
  "cutoutAssetId": 12345,
  "cutoutFingerprint": "2026-09-25T20:10:00Z"
}
```

- `cx`, `by`, `h` are fractions of the 1200 x 1200 canvas, so the layout does not depend on screen size.
- The background is not stored in the JSON. It comes from the `EPAMComposedAssetToBackground` relation.

## 6. Functional requirements

### 6.1 Entry points

1. An "Open in composer" action on the asset detail page. It is visible only when `assetVariant` is `cutout`.
2. It navigates to the composer page with `?cutoutAssetId=<id>`.
3. To reopen a saved composition the page also accepts `?composedAssetId=<id>`.
4. If the page is opened with an asset that is not a cutout, show an inline message: "This asset is not a cutout. Run background removal first." Do not render the canvas.

### 6.2 Composer page

1. On load, fetch in parallel: active backgrounds sorted by `sortOrder`, the cutout source, and the saved composition if `composedAssetId` was supplied.
2. If there are no active backgrounds, show an inline message. Do not render the canvas.
3. Canvas is 1200 x 1200 internally and scales to fit its container at 1:1 aspect.
4. Draw order: background (cover fit, centered), then cutout (height from `h`, anchored at bottom center at `cx`, `by`, optionally mirrored).
5. Interactions:
   - Drag the cutout with pointer events (mouse and touch).
   - Mouse wheel scales the cutout in 3% steps, clamped to 0.1 to 1.6.
   - Size slider, range 0.2 to 1.6.
   - Flip button mirrors horizontally around the cutout's center.
   - Reset returns to the selected background's default anchors.
6. Choosing a background switches the image and applies that background's default anchors, replacing any manual placement.
7. Layout changes are live. No apply or confirm buttons.

### 6.3 Transparency check (new)

Once the cutout image has loaded, draw it to a small offscreen canvas (for example 64 pixels on the long side) and read the pixels.

1. If fewer than 1 percent of pixels have alpha below 250, the cutout is effectively opaque.
2. In that case show an inline warning above the canvas: "This cutout has no transparent area. The headshot will show as a box. Re-run background removal." Keep the canvas usable, but disable the Save button.
3. This is a safety net. The transform should already have rejected opaque results.

```ts
export function hasTransparency(img: HTMLImageElement): boolean {
  const size = 64;
  const scale = size / Math.max(img.naturalWidth, img.naturalHeight);
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return true; // cannot check, do not block
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;
  let seeThrough = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] < 250) seeThrough++;
  }
  return seeThrough / (w * h) >= 0.01;
}
```

### 6.4 Saving

1. Export the canvas as JPEG at quality 0.92, 1200 x 1200. The composed output is a JPEG because it has a solid background. The transparent PNG is only the cutout.
2. Create a new asset from the blob.
3. On the new asset set `assetVariant = composed`, set `compositionLayout`, and create the relations to the cutout and the background.
4. The asset gets whatever lifecycle default the instance has. No custom lifecycle.
5. On success show an inline confirmation with a link to the new asset. On failure show an inline error and keep the composer state so the user can retry.

### 6.5 Stale cutout notice

If a saved composition is reopened and the cutout's fingerprint no longer matches the one in the layout, show an inline banner above the canvas: "The cutout has changed since this was saved." with a "Keep layout" button that dismisses it. Picking a different background also dismisses it.

### 6.6 Admin

Admins manage backgrounds through the normal entity UI on `EPAM.ComposerBackground`: create, relate to a background image asset, set anchors and sort order, tick or untick `isActive`. No code change is needed to add or retire a background. Ship with four seed backgrounds: Studio grey, Modern office, Brand gradient, Outdoor blur.

## 7. Non-functional requirements

- Works with mouse and touch.
- The canvas must not be tainted. Cutout and backgrounds load with `crossOrigin = "anonymous"`. If renditions are served from a CDN, it must send CORS headers.
- The cutout loads from the original file, never from a JPEG rendition, so transparency survives.
- Keyboard: flip, reset, save and background buttons are reachable by Tab and have visible focus.
- Backgrounds have `alt` text from `backgroundName`.
- Plain 2D canvas for v1. No canvas library.

## 8. Build order

Stop for review after each step.

1. **Transform first.** Do `TRANSFORM_BRIEF.md` in the transform repo. Produce at least two real cutouts to test with.
2. **Schema.** Match `schema/epam-composer-schema.json` to a real export from the instance, then import it. Create the four seed backgrounds and relate each to an image asset.
3. **Data layer.** Verify and fix `contentHubApi.ts` against Swagger: query, relation following, upload, finalize, entity update. Write a small script or test page that saves a dummy JPEG and confirms the relations exist.
4. **Composer UI.** Wire `ImageComposer.tsx` to real data with a hardcoded `cutoutAssetId`. Confirm drag, scale, flip, reset and save. Add the transparency check from 6.3.
5. **Page hosting.** Register the page and make `cutoutAssetId` and `composedAssetId` arrive through the page options.
6. **Asset action.** Register "Open in composer", visible only for cutouts.
7. **Re-edit.** Open a saved composition, confirm the layout restores, then replace the cutout with a new version and confirm the stale banner appears.

## 9. Acceptance criteria

1. Given a cutout asset, "Open in composer" appears on its detail page and does not appear on an original or composed asset.
2. Opening the page directly with a non-cutout asset shows the inline message and no canvas.
3. The composer shows exactly the active backgrounds in `sortOrder`. Setting `isActive` to false removes one on next load.
4. Selecting each background places the headshot at that background's default anchors.
5. An opaque cutout shows the warning and cannot be saved.
6. The exported JPEG matches the canvas the user saw, at 1200 x 1200, with no white box around the head.
7. After saving, a new asset exists with `assetVariant = composed`, `compositionLayout` populated, and relations to the correct cutout and background.
8. Reopening the composed asset in the composer restores position, size, flip and background.
9. Replacing the cutout with a new version and reopening shows the stale banner. "Keep layout" dismisses it.
10. No modal dialogs appear anywhere in the flow.

## 10. Out of scope for v1

- Running background removal from inside the composer.
- Output presets (1:1, 16:9, 4:5).
- Shadow, edge softening and colour matching on the cutout.
- Rotation.
- Server-side rendering.
- Custom lifecycle or approval for composed assets.
- More than one person per composition.

## 11. Known risks and things to verify

These were written from memory and have not been run against a real instance.

1. **Upload flow.** The v2.0 upload steps, especially finalize and how to read the new asset id, differ by version. The transform already uploads successfully, so reuse that approach and delete `uploadBlob` if it works.
2. **Relation payload shape.** `parents: [{ href }]` inside `relations` is the expected shape. Confirm on a real PUT.
3. **Relation direction.** Confirm which side is parent and child in the export format so the cardinality is right.
4. **Rendition names.** `downloadOriginal`, `original` and `preview` may be named differently. Log the renditions object once and fix the names.
5. **Fingerprint.** `modifiedOn` is a weak fingerprint. Use a content hash if the instance exposes one.
6. **Page registration.** The `createExternalRoot` signature and option passing depend on the Content Hub version.
7. **Property value shapes.** Dropdown values can return as a string or an array. The code handles both for `assetVariant`, so keep that handling.
8. **Full resolution.** Rendering in the browser caps output at 1200 x 1200. A server-side render is a later option.

## 12. Suggested next iterations

1. Soft shadow and edge feathering, which is what separates "pasted on" from "looks real".
2. Output presets driven by a taxonomy.
3. Rotation and a snap guide for the horizon line.
4. Server-side final render for full resolution.

## 13. Prompt to paste into Cursor

```
Read SPEC.md in full. The transform work in TRANSFORM_BRIEF.md is a separate task
and is being done elsewhere, so do not touch it. Start at step 2 of the build order.
Before writing code, check the existing files under src/ and schema/, list anything
in section 11 you can verify from the repo, and ask me about anything you cannot.
Work one build step at a time and stop after each for review.
```
