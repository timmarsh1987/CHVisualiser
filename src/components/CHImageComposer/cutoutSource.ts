// cutoutSource.ts
//
// Resolves the cutout asset's original file URL and metadata.

/* eslint-disable @typescript-eslint/no-explicit-any */
export type CutoutSource = {
  url: string;
  assetId: number;
  // Stored in the layout so we can warn if the cutout changed after the composition was saved
  fingerprint: string;
  // Value of assetVariant on the asset, or null if it is not set
  variant: string | null;
};

type ContentHubClient = {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
  };
};

export async function resolveCutout(
  client: ContentHubClient,
  assetId: number
): Promise<CutoutSource> {
  if (!client.raw?.getAsync) {
    throw new Error("Content Hub client is not available");
  }

  const res = await client.raw.getAsync<any>(
    `/api/entities/${assetId}?members=renditions,properties`
  );
  if (!res.isSuccessStatusCode || !res.content) {
    throw new Error(`Could not load cutout asset ${assetId}: ${res.statusCode}`);
  }

  const asset = res.content;

  // Use the original file so transparency survives. Rendition names vary by instance.
  const url =
    asset.renditions?.downloadOriginal?.[0]?.href ??
    asset.renditions?.original?.[0]?.href ??
    asset.renditions?.preview?.[0]?.href;
  if (!url) {
    throw new Error("No original rendition found on the cutout asset");
  }

  const variantValue = asset.properties?.assetVariant;
  const variant: string | null = Array.isArray(variantValue)
    ? (variantValue[0] ?? null)
    : (variantValue ?? null);

  // Modified date is a cheap fingerprint. Swap for a content hash if available.
  const fingerprint = String(
    asset.properties?.modifiedOn ?? asset.properties?.["Content-Md5"] ?? asset.id ?? ""
  );

  return { url, assetId, fingerprint, variant };
}
