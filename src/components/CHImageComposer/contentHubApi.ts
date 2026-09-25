// contentHubApi.ts
//
// Content Hub API interactions for the Image Composer.
// Uses the SDK client pattern from CHImageTransform for uploads.

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Background, Layout } from "./ImageComposer";

type ContentHubClient = {
  uploads?: {
    uploadAsync: (request: UploadRequestShape) => Promise<UploadResponse>;
  };
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
    putAsync?: <T>(url: string, body: unknown) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
  };
};

type UploadRequestShape = {
  source: {
    name: string;
    getReadableSourceAsync: () => Promise<ArrayBuffer>;
  };
  configurationName: string;
  actionName: string;
  actionParameters: Record<string, unknown>;
};

type UploadResponse = {
  isSuccessStatusCode?: boolean;
  statusCode?: number;
  content?: unknown;
  responseHeaders?: Record<string, unknown>;
};

function timestampForFileName(date = new Date()): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
  ];
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}${months[date.getMonth()]}${date.getFullYear()}-${hours}${minutes}`;
}

function createdAssetId(content: unknown): number | null {
  let value = content;
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return null;
    }
  }
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const id = Number(record.asset_id ?? record.assetId ?? record.id);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function assetIdFromLocation(headers: Record<string, unknown> | undefined): number | null {
  if (!headers) return null;
  const locationEntry = Object.entries(headers).find(
    ([name]) => name.toLowerCase() === "location"
  );
  const location = String(locationEntry?.[1] ?? "");
  const match = location.match(/\/api\/entities\/(\d+)/i);
  if (!match) return null;
  const id = Number(match[1]);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

export async function loadBackgrounds(client: ContentHubClient): Promise<Background[]> {
  if (!client.raw?.getAsync) {
    throw new Error("Content Hub client is not available");
  }

  const query = encodeURIComponent(
    "Definition.Name=='EPAM.ComposerBackground' AND isActive==true"
  );
  const listResponse = await client.raw.getAsync<any>(`/api/entities/query?query=${query}&take=20`);
  if (!listResponse.isSuccessStatusCode || !listResponse.content) {
    throw new Error("Failed to load composer backgrounds");
  }

  const items: Background[] = [];
  for (const entity of listResponse.content.items ?? []) {
    const relHref = entity.relations?.EPAMComposerBackgroundToAsset?.href;
    if (!relHref) continue;

    const relResponse = await client.raw.getAsync<any>(relHref);
    if (!relResponse.isSuccessStatusCode) continue;

    const asset = relResponse.content?.items?.[0] ?? relResponse.content?.parent;
    if (!asset) continue;

    const url =
      asset.renditions?.preview?.[0]?.href ??
      asset.renditions?.downloadOriginal?.[0]?.href ??
      asset.renditions?.original?.[0]?.href;
    if (!url) continue;

    items.push({
      id: entity.id,
      name: entity.properties?.backgroundName ?? "Background",
      url,
      anchorX: entity.properties?.defaultAnchorX ?? 0.5,
      anchorBottom: entity.properties?.defaultAnchorBottom ?? 1,
      headshotHeight: entity.properties?.defaultHeadshotHeight ?? 0.85,
      sortOrder: entity.properties?.sortOrder ?? 100,
    });
  }
  return items.sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function loadComposition(
  client: ContentHubClient,
  composedAssetId: number
): Promise<{ layout: Layout; backgroundId: number } | null> {
  if (!client.raw?.getAsync) return null;

  const res = await client.raw.getAsync<any>(
    `/api/entities/${composedAssetId}?members=properties,relations`
  );
  if (!res.isSuccessStatusCode || !res.content) return null;

  const raw = res.content.properties?.compositionLayout;
  if (!raw) return null;

  let layout: Layout;
  try {
    layout = JSON.parse(raw);
  } catch {
    return null;
  }

  const bgHref = res.content.relations?.EPAMComposedAssetToBackground?.href;
  if (!bgHref) return null;

  const relResponse = await client.raw.getAsync<any>(bgHref);
  if (!relResponse.isSuccessStatusCode) return null;

  const backgroundId = relResponse.content?.items?.[0]?.id ?? relResponse.content?.parent?.id;
  if (!backgroundId) return null;

  return { layout, backgroundId };
}

async function uploadBlob(
  client: ContentHubClient,
  blob: Blob,
  fileName: string
): Promise<number> {
  if (!client.uploads?.uploadAsync) {
    throw new Error("The Content Hub upload client is not available in this component context.");
  }

  const buffer = await blob.arrayBuffer();
  const request: UploadRequestShape = {
    source: {
      name: fileName,
      getReadableSourceAsync: () => Promise.resolve(buffer),
    },
    configurationName: "AssetUploadConfiguration",
    actionName: "NewAsset",
    actionParameters: {},
  };

  const response = await client.uploads.uploadAsync(request);
  if (response?.isSuccessStatusCode === false) {
    throw new Error(
      `Content Hub could not create the new asset (HTTP ${response.statusCode ?? "unknown"}).`
    );
  }

  const newAssetId =
    createdAssetId(response?.content) ||
    assetIdFromLocation(response?.responseHeaders);
  if (!newAssetId) {
    throw new Error("Content Hub created the asset but did not return its asset ID.");
  }

  return newAssetId;
}

export async function saveComposition(
  client: ContentHubClient,
  opts: {
    blob: Blob;
    fileName: string;
    cutoutAssetId: number;
    background: Background;
    layout: Layout;
  }
): Promise<number> {
  const stemName = opts.fileName.replace(/\.[^.]+$/, "") || "composed";
  const finalFileName = `${stemName}-${timestampForFileName()}.jpg`;

  const newAssetId = await uploadBlob(client, opts.blob, finalFileName);

  if (!client.raw?.putAsync) {
    throw new Error("Content Hub client cannot update entity properties.");
  }

  const updateResponse = await client.raw.putAsync(`/api/entities/${newAssetId}`, {
    entitydefinition: { href: "/api/entitydefinitions/M.Asset" },
    properties: {
      assetVariant: "composed",
      compositionLayout: JSON.stringify(opts.layout),
    },
  });

  if (!updateResponse.isSuccessStatusCode) {
    console.warn(
      `[CHImageComposer] Could not set properties on asset ${newAssetId}: ${updateResponse.statusCode}`
    );
  }

  // Set relations to cutout and background
  // Using the children pattern since composed asset is the child
  try {
    await client.raw.putAsync(
      `/api/entities/${newAssetId}/relations/EPAMComposedAssetToCutout`,
      {
        parent: { href: `/api/entities/${opts.cutoutAssetId}` },
      }
    );
  } catch (e) {
    console.warn("[CHImageComposer] Could not set cutout relation:", e);
  }

  try {
    await client.raw.putAsync(
      `/api/entities/${newAssetId}/relations/EPAMComposedAssetToBackground`,
      {
        parent: { href: `/api/entities/${opts.background.id}` },
      }
    );
  } catch (e) {
    console.warn("[CHImageComposer] Could not set background relation:", e);
  }

  return newAssetId;
}
