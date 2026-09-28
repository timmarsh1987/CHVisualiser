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

function variantText(value: unknown): string | null {
  if (value == null || value === "") return null;
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return variantText(value[0]);
  if (typeof value === "object") {
    const record = value as Record<string, unknown>;
    return variantText(
      record.identifier ?? record.value ?? record.Invariant ?? record["en-US"] ?? record["en-us"]
    );
  }
  return null;
}

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

  // A members filter on this instance returns empty property bags. Load the full entity.
  const res = await client.raw.getAsync<any>(`/api/entities/${assetId}`);
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

  const variant = variantText(asset.properties?.AssetVariant ?? asset.properties?.assetVariant);

  // Modified date is a cheap fingerprint. Swap for a content hash if available.
  const fingerprint = String(
    asset.modified_on ?? asset.properties?.modifiedOn ?? asset.properties?.["Content-Md5"] ?? asset.id ?? ""
  );

  return { url, assetId, fingerprint, variant };
}
