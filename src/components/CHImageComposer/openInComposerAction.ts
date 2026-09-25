// openInComposerAction.ts
//
// Adds an "Open in composer" button to the asset detail page.
// It only shows when the asset is a cutout (assetVariant = "cutout").
//
// Register this as a page-level action or a custom detail-page component.
// The exact registration call differs by Content Hub version, so the wiring
// at the bottom is the part to check against your instance.

export type ActionContext = {
  // The asset the user is looking at
  entityId: number;
  // Property values already loaded on the page, if your extension point provides them
  properties?: Record<string, unknown>;
  // Content Hub navigation helper. Name and shape vary by version.
  navigate?: (url: string) => void;
};

const COMPOSER_PAGE_URL = "/en-us/page/imageComposer"; // change to your page route

async function getAssetVariant(entityId: number): Promise<string | null> {
  const res = await fetch(`/api/entities/${entityId}?members=properties`, {
    credentials: "include",
  });
  if (!res.ok) return null;
  const asset = await res.json();
  const value = asset.properties?.assetVariant;
  // Taxonomy and dropdown values can come back as a string or an array
  return Array.isArray(value) ? (value[0] ?? null) : (value ?? null);
}

export async function canOpenInComposer(ctx: ActionContext): Promise<boolean> {
  const fromContext = ctx.properties?.assetVariant;
  if (fromContext !== undefined) {
    const v = Array.isArray(fromContext) ? fromContext[0] : fromContext;
    return v === "cutout";
  }
  return (await getAssetVariant(ctx.entityId)) === "cutout";
}

export function openInComposer(ctx: ActionContext): void {
  const url = `${COMPOSER_PAGE_URL}?cutoutAssetId=${ctx.entityId}`;
  if (ctx.navigate) {
    ctx.navigate(url);
  } else {
    window.location.href = url;
  }
}

// Wiring sketch. Replace with the registration call your version uses.
export const openInComposerAction = {
  name: "epamOpenInComposer",
  label: "Open in composer",
  icon: "image",
  isVisible: canOpenInComposer,
  execute: openInComposer,
};
