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

function firstProperty(properties: Record<string, unknown> | undefined, ...names: string[]): unknown {
  if (!properties) return undefined;
  for (const name of names) {
    if (properties[name] != null && properties[name] !== "") return properties[name];
  }
  return undefined;
}

function isActiveBackground(properties: Record<string, unknown> | undefined): boolean {
  const value = firstProperty(properties, "isActive", "IsActive");
  return value !== false && value !== "false";
}

function idFromHref(href: unknown): number | null {
  const match = String(href ?? "").match(/\/api\/entities\/(\d+)/i);
  if (!match) return null;
  const id = Number(match[1]);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function renditionUrl(asset: any): string | null {
  return (
    asset?.renditions?.preview?.[0]?.href ??
    asset?.renditions?.downloadOriginal?.[0]?.href ??
    asset?.renditions?.original?.[0]?.href ??
    null
  );
}

async function loadFullEntity(client: ContentHubClient, entity: any): Promise<any | null> {
  if (!client.raw?.getAsync) return entity ?? null;
  const id = Number(entity?.id) || idFromHref(entity?.full?.href ?? entity?.href ?? entity?.self?.href);
  if (!id) return entity ?? null;
  const response = await client.raw.getAsync<any>(`/api/entities/${id}`);
  return response.isSuccessStatusCode && response.content ? response.content : entity;
}

function backgroundRelationHref(relations: Record<string, any> | undefined): string | null {
  if (!relations) return null;
  const match = Object.entries(relations).find(
    ([name]) => name.toLowerCase() === "epamcomposerbackgroundtoasset"
  );
  const relation = match?.[1];
  return relation?.href ?? relation?.self?.href ?? null;
}

export async function loadBackgrounds(client: ContentHubClient): Promise<Background[]> {
  if (!client.raw?.getAsync) {
    throw new Error("Content Hub client is not available");
  }

  const query = encodeURIComponent("Definition.Name=='EPAM.ComposerBackground'");
  const listResponse = await client.raw.getAsync<any>(
    `/api/entities/query?query=${query}&take=20`
  );
  if (!listResponse.isSuccessStatusCode || !listResponse.content) {
    throw new Error("Failed to load composer backgrounds");
  }

  const items: Background[] = [];
  for (const stub of listResponse.content.items ?? []) {
    // Query results on this instance are stubs with empty properties and relations.
    const entity = await loadFullEntity(client, stub);
    if (!entity || !isActiveBackground(entity.properties)) continue;

    const relHref = backgroundRelationHref(entity.relations);
    if (!relHref) continue;

    const relResponse = await client.raw.getAsync<any>(relHref);
    if (!relResponse.isSuccessStatusCode) continue;

    const linked = relResponse.content?.items?.[0] ?? relResponse.content?.parent;
    const asset = await loadFullEntity(client, linked);
    const url = renditionUrl(asset);
    if (!url) continue;

    const properties = entity.properties ?? {};
    items.push({
      id: entity.id,
      name: String(firstProperty(properties, "backgroundName", "BackgroundName") ?? "Background"),
      url,
      anchorX: Number(firstProperty(properties, "defaultAnchorX", "DefaultAnchorX") ?? 0.5),
      anchorBottom: Number(firstProperty(properties, "defaultAnchorBottom", "DefaultAnchorBottom") ?? 1),
      headshotHeight: Number(
        firstProperty(properties, "defaultHeadshotHeight", "DefaultHeadshotHeight") ?? 0.85
      ),
      sortOrder: Number(firstProperty(properties, "sortOrder", "SortOrder") ?? 100),
    });
  }
  return items.sort((a, b) => a.sortOrder - b.sortOrder);
}

function readComposition(
  raw: unknown
): { layout: Layout; backgroundId: number } | null {
  let value = raw;
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return null;
    }
  }
  if (!value || typeof value !== "object") return null;

  const record = value as Record<string, unknown>;
  const backgroundId = Number(record.backgroundId);
  const cutoutAssetId = Number(record.cutoutAssetId);
  const cx = Number(record.cx);
  const by = Number(record.by);
  const h = Number(record.h);
  if (![backgroundId, cutoutAssetId, cx, by, h].every((n) => Number.isFinite(n))) return null;
  if (backgroundId <= 0) return null;

  return {
    backgroundId,
    layout: {
      cx,
      by,
      h,
      flipped: Boolean(record.flipped),
      cutoutAssetId,
      cutoutFingerprint: String(record.cutoutFingerprint ?? ""),
    },
  };
}

export async function loadComposition(
  client: ContentHubClient,
  composedAssetId: number
): Promise<{ layout: Layout; backgroundId: number } | null> {
  if (!client.raw?.getAsync) return null;

  const res = await client.raw.getAsync<any>(`/api/entities/${composedAssetId}`);
  if (!res.isSuccessStatusCode || !res.content) return null;

  const properties = res.content.properties ?? {};
  return readComposition(properties.CompositionLayout ?? properties.compositionLayout);
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
      AssetVariant: "composed",
      CompositionLayout: {
        ...opts.layout,
        backgroundId: opts.background.id,
      },
    },
  });

  if (!updateResponse.isSuccessStatusCode) {
    console.warn(
      `[CHImageComposer] Could not set properties on asset ${newAssetId}: ${updateResponse.statusCode}`
    );
  }

  return newAssetId;
}
