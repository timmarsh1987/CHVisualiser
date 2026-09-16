import type { ImageAssetContext, ImageTransformOptions } from './types';

type UploadResponse = {
  isSuccessStatusCode?: boolean;
  statusCode?: number;
  content?: unknown;
  responseHeaders?: Record<string, unknown>;
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
    postAsync?: <T>(url: string, body: unknown) => Promise<{
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

export type ImageUploadMode = 'version' | 'new-asset';

function extensionFor(mimeType: string): string {
  if (mimeType === 'image/webp') return 'webp';
  return 'png';
}

function timestampForFileName(date = new Date()): string {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
  ];
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}${months[date.getMonth()]}${date.getFullYear()}-${hours}${minutes}`;
}

function createdAssetId(content: unknown): number | null {
  let value = content;
  if (typeof value === 'string') {
    try {
      value = JSON.parse(value);
    } catch {
      return null;
    }
  }
  if (!value || typeof value !== 'object') return null;
  const record = value as Record<string, unknown>;
  const id = Number(record.asset_id ?? record.assetId ?? record.id);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function assetIdFromLocation(headers: Record<string, unknown> | undefined): number | null {
  if (!headers) return null;
  const locationEntry = Object.entries(headers).find(
    ([name]) => name.toLowerCase() === 'location'
  );
  const location = String(locationEntry?.[1] ?? '');
  const match = location.match(/\/api\/entities\/(\d+)/i);
  if (!match) return null;
  const id = Number(match[1]);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function shouldPreserveTargetProperty(name: string): boolean {
  const normalized = name.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return (
    normalized.startsWith('file') ||
    normalized.includes('mimetype') ||
    ['width', 'height', 'imagewidth', 'imageheight', 'dimensions'].includes(normalized)
  );
}

function containsNumericValue(value: unknown): boolean {
  if (typeof value === 'number') return true;
  if (Array.isArray(value)) return value.some(containsNumericValue);
  if (value && typeof value === 'object') {
    return Object.values(value as Record<string, unknown>).some(containsNumericValue);
  }
  return false;
}

function shouldPreserveTargetRelation(name: string): boolean {
  return /assetmedia|mediamatrix|rendition|repository|lifecycle|publiclink|version|masterasset/i.test(
    name
  );
}

async function copyAssetMetadata(
  client: ContentHubClient,
  sourceAssetId: number,
  destinationAssetId: number
): Promise<void> {
  if (!client.raw?.getAsync || !client.raw?.postAsync) {
    throw new Error('The Content Hub entity client is unavailable for copying metadata.');
  }

  const sourceResponse = await client.raw.getAsync<{
    entitydefinition?: { href?: string };
    properties?: Record<string, unknown>;
    relations?: Record<string, unknown>;
  }>(`/api/entities/${sourceAssetId}`);
  if (!sourceResponse.isSuccessStatusCode || !sourceResponse.content) {
    throw new Error('Content Hub could not load the original asset metadata.');
  }

  const sourceProperties = sourceResponse.content.properties ?? {};
  const numericProperties: Record<string, unknown> = {};
  const propertyCopyOptions = Object.entries(sourceProperties).map(
    ([property, value]) => {
      const numeric = containsNumericValue(value);
      if (numeric && !shouldPreserveTargetProperty(property)) {
        numericProperties[property] = value;
      }
      return {
      property,
        method:
          shouldPreserveTargetProperty(property) || numeric ? 'Ignore' : 'Keep',
      };
    }
  );
  const relationCopyOptions = Object.keys(sourceResponse.content.relations ?? {}).map(
    (relation) => ({
      relation,
      method: shouldPreserveTargetRelation(relation) ? 'Ignore' : 'Keep',
    })
  );
  const payload = {
    destination_entity_id: destinationAssetId,
    property_copy_options: propertyCopyOptions,
    relation_copy_options: relationCopyOptions,
  };

  const delays = [0, 750, 2000];
  let lastStatus: number | undefined;
  let lastMessage = '';
  for (const delay of delays) {
    if (delay) await new Promise((resolve) => window.setTimeout(resolve, delay));
    const response = await client.raw.postAsync(
      `/api/entities/${sourceAssetId}/copy`,
      payload
    );
    const content =
      response.content && typeof response.content === 'object'
        ? (response.content as Record<string, unknown>)
        : undefined;
    if (response.isSuccessStatusCode && content?.success !== false) {
      await copyNumericProperties(
        client,
        destinationAssetId,
        numericProperties,
        sourceResponse.content.entitydefinition
      );
      return;
    }
    lastStatus = response.statusCode;
    lastMessage = typeof content?.message === 'string' ? content.message : '';
  }

  throw new Error(
    `The new asset was created as ${destinationAssetId}, but its metadata could not be copied ` +
    `(HTTP ${lastStatus ?? 'unknown'}${lastMessage ? `: ${lastMessage}` : ''}).`
  );
}

async function copyNumericProperties(
  client: ContentHubClient,
  destinationAssetId: number,
  properties: Record<string, unknown>,
  entitydefinition: { href?: string } | undefined
): Promise<void> {
  if (!client.raw?.putAsync || Object.keys(properties).length === 0) return;

  // The entity-copy endpoint has a Decimal-to-Double bug. Updating each numeric
  // member separately avoids one incompatible member blocking the others.
  for (const [property, value] of Object.entries(properties)) {
    try {
      const response = await client.raw.putAsync(`/api/entities/${destinationAssetId}`, {
        entitydefinition: {
          href: entitydefinition?.href || '/api/entitydefinitions/M.Asset',
        },
        properties: { [property]: value },
      });
      if (!response.isSuccessStatusCode) {
        console.warn(`[CHImageTransform] Could not copy numeric property "${property}".`);
      }
    } catch {
      console.warn(`[CHImageTransform] Could not copy numeric property "${property}".`);
    }
  }
}

export async function uploadGeneratedImage(
  client: ContentHubClient | undefined,
  asset: ImageAssetContext,
  image: Blob,
  options: ImageTransformOptions,
  mode: ImageUploadMode
): Promise<number> {
  if (!client?.uploads?.uploadAsync) {
    throw new Error('The Content Hub upload client is not available in this component context.');
  }

  const assetId = Number(asset.id);
  if (!Number.isSafeInteger(assetId) || assetId <= 0) {
    throw new Error('Content Hub returned an invalid numeric asset ID.');
  }

  const pngBlob =
    image.type === 'image/png'
      ? image
      : new Blob([await image.arrayBuffer()], { type: 'image/png' });
  const extension = extensionFor(pngBlob.type);
  const originalStem = asset.fileName.replace(/\.[^.]+$/, '') || `asset-${asset.id}`;
  const fileName = `${originalStem}-${timestampForFileName()}.${extension}`;
  const buffer = await pngBlob.arrayBuffer();

  // This is structurally equivalent to the SDK's ArrayBufferUploadSource and
  // UploadRequest. The authenticated context client performs create/process/finalize.
  const request: UploadRequestShape = {
    source: {
      name: fileName,
      getReadableSourceAsync: () => Promise.resolve(buffer),
    },
    configurationName:
      options.uploadConfiguration || 'AssetUploadConfiguration',
    actionName: mode === 'version' ? 'NewMainFile' : 'NewAsset',
    actionParameters: mode === 'version' ? { AssetId: assetId } : {},
  };

  const response = await client.uploads.uploadAsync(request);
  if (response?.isSuccessStatusCode === false) {
    throw new Error(
      `Content Hub could not ${mode === 'version' ? 'create the new version' : 'create the new asset'} ` +
      `(HTTP ${response.statusCode ?? 'unknown'}).`
    );
  }

  if (mode === 'version') return assetId;

  const newAssetId =
    createdAssetId(response?.content) ||
    assetIdFromLocation(response?.responseHeaders);
  if (!newAssetId) {
    throw new Error('Content Hub created the asset but did not return its asset ID.');
  }
  await copyAssetMetadata(client, assetId, newAssetId);
  return newAssetId;
}
