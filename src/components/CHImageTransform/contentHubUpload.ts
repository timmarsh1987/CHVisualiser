import type {
  GeneratedImage,
  ImageAssetContext,
  ImageTransformOptions,
} from './types';

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
      responseHeaders?: Record<string, unknown>;
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

function asRecord(content: unknown): Record<string, unknown> | null {
  let value = content;
  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return null;
    try {
      value = JSON.parse(trimmed);
    } catch {
      return null;
    }
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function uploadRecord(content: unknown): Record<string, unknown> | null {
  const record = asRecord(content);
  if (!record) return null;
  const hasUploadFields =
    'asset_id' in record ||
    'assetId' in record ||
    'AssetId' in record ||
    'asset_identifier' in record ||
    'assetIdentifier' in record ||
    'AssetIdentifier' in record ||
    'success' in record;
  if (hasUploadFields) return record;
  return asRecord(record.content ?? record.Content) ?? record;
}

function positiveId(value: unknown): number | null {
  if (typeof value === 'string') {
    const fromHref = value.match(/\/api\/entities\/(\d+)/i);
    if (fromHref) return positiveId(fromHref[1]);
  }
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    return positiveId(record.id ?? record.Id ?? record.href ?? record.Href);
  }
  const id = typeof value === 'number' ? value : Number(value);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function createdAssetId(content: unknown): number | null {
  const record = uploadRecord(content);
  if (!record) return null;
  return (
    positiveId(record.asset_id) ??
    positiveId(record.assetId) ??
    positiveId(record.AssetId) ??
    positiveId(record.id) ??
    positiveId(record.Id)
  );
}

function createdAssetIdentifier(content: unknown): string | null {
  const record = uploadRecord(content);
  if (!record) return null;
  const value =
    record.asset_identifier ??
    record.assetIdentifier ??
    record.AssetIdentifier ??
    record.identifier ??
    record.Identifier;
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed || null;
}

function uploadFailureMessage(content: unknown): string | null {
  const record = uploadRecord(content);
  if (!record || record.success !== false) return null;
  return typeof record.message === 'string' && record.message.trim()
    ? record.message.trim()
    : 'Content Hub reported that the upload failed.';
}

function headerText(headers: unknown, name: string): string {
  if (!headers) return '';
  const wanted = name.toLowerCase();
  if (typeof (headers as { get?: unknown }).get === 'function') {
    const value = (headers as { get: (key: string) => unknown }).get(name);
    return value == null ? '' : String(value);
  }
  if (headers instanceof Map) {
    for (const [key, value] of headers.entries()) {
      if (String(key).toLowerCase() === wanted) return value == null ? '' : String(value);
    }
    return '';
  }
  if (typeof headers !== 'object') return '';
  const entry = Object.entries(headers as Record<string, unknown>).find(
    ([key]) => key.toLowerCase() === wanted
  );
  const raw = entry?.[1];
  if (Array.isArray(raw)) return raw[0] == null ? '' : String(raw[0]);
  return raw == null ? '' : String(raw);
}

function assetIdFromLocation(headers: unknown): number | null {
  return positiveId(headerText(headers, 'location'));
}

function identifierFromLocation(headers: unknown): string | null {
  const location = headerText(headers, 'location');
  const match = location.match(/\/api\/entities\/identifier\/([^/?#]+)/i);
  if (!match) return null;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

async function assetIdFromIdentifier(
  client: ContentHubClient,
  identifier: string
): Promise<number | null> {
  if (!client.raw?.getAsync) return null;
  const response = await client.raw.getAsync(
    `/api/entities/identifier/${encodeURIComponent(identifier)}`
  );
  if (response?.isSuccessStatusCode === false) return null;
  return createdAssetId(response?.content) ?? assetIdFromLocation(response?.responseHeaders);
}

async function resolveCreatedAssetId(
  client: ContentHubClient,
  response: UploadResponse
): Promise<number> {
  const direct =
    createdAssetId(response?.content) ??
    assetIdFromLocation(response?.responseHeaders);
  if (direct) return direct;

  const identifier =
    createdAssetIdentifier(response?.content) ??
    identifierFromLocation(response?.responseHeaders);
  if (identifier) {
    const resolved = await assetIdFromIdentifier(client, identifier);
    if (resolved) return resolved;
    throw new Error(
      `Content Hub created the asset (${identifier}) but did not return its numeric asset ID.`
    );
  }

  throw new Error('Content Hub created the asset but did not return its Content Hub ID.');
}

function shouldPreserveTargetProperty(name: string): boolean {
  const normalized = name.replace(/[^a-z0-9]/gi, '').toLowerCase();
  return (
    normalized.startsWith('file') ||
    normalized.includes('mimetype') ||
    normalized.includes('identifier') ||
    normalized.includes('contenthubid') ||
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

async function setAssetVariant(
  client: ContentHubClient,
  assetId: number,
  variant: string
): Promise<void> {
  if (!client.raw?.putAsync) {
    throw new Error('The Content Hub entity client is unavailable for setting asset variant.');
  }

  const response = await client.raw.putAsync(`/api/entities/${assetId}`, {
    entitydefinition: { href: '/api/entitydefinitions/M.Asset' },
    properties: { AssetVariant: variant },
  });

  if (!response.isSuccessStatusCode) {
    throw new Error(
      `Content Hub could not set assetVariant property (HTTP ${response.statusCode ?? 'unknown'}).`
    );
  }
}

async function createCutoutRelation(
  client: ContentHubClient,
  sourceAssetId: number,
  cutoutAssetId: number
): Promise<boolean> {
  if (!client.raw?.putAsync) {
    console.warn(
      '[CHImageTransform] Entity client unavailable for creating EPAMCutoutToSourceAsset relation.'
    );
    return false;
  }

  try {
    const response = await client.raw.putAsync(`/api/entities/${cutoutAssetId}`, {
      entitydefinition: { href: '/api/entitydefinitions/M.Asset' },
      relations: {
        EPAMCutoutToSourceAsset: {
          parents: [{ href: `/api/entities/${sourceAssetId}` }],
        },
      },
    });

    if (!response.isSuccessStatusCode) {
      console.warn(
        `[CHImageTransform] Could not create EPAMCutoutToSourceAsset relation (HTTP ${response.statusCode ?? 'unknown'}). ` +
        'The relation may not exist on this instance.'
      );
      return false;
    }
    return true;
  } catch (err) {
    console.warn(
      '[CHImageTransform] Could not create EPAMCutoutToSourceAsset relation.',
      err
    );
    return false;
  }
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
  generated: GeneratedImage,
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

  const uploadMode = mode;
  const shouldTagAsCutout = Boolean(generated.isCutout);

  const pngBlob =
    generated.blob.type === 'image/png'
      ? generated.blob
      : new Blob([await generated.blob.arrayBuffer()], { type: 'image/png' });
  const extension = extensionFor(pngBlob.type);
  const originalStem = asset.fileName.replace(/\.[^.]+$/, '') || `asset-${asset.id}`;
  const fileName = shouldTagAsCutout && uploadMode === 'new-asset'
    ? `${originalStem}-cutout.${extension}`
    : `${originalStem}-${timestampForFileName()}.${extension}`;
  const buffer = await pngBlob.arrayBuffer();

  const request: UploadRequestShape = {
    source: {
      name: fileName,
      getReadableSourceAsync: () => Promise.resolve(buffer),
    },
    configurationName:
      options.uploadConfiguration || 'AssetUploadConfiguration',
    actionName: uploadMode === 'version' ? 'NewMainFile' : 'NewAsset',
    actionParameters: uploadMode === 'version' ? { AssetId: String(assetId) } : {},
  };

  const response = await client.uploads.uploadAsync(request);
  const failure = uploadFailureMessage(response?.content);
  if (response?.isSuccessStatusCode === false || failure) {
    throw new Error(
      `Content Hub could not ${uploadMode === 'version' ? 'create the new version' : 'create the new asset'} ` +
      `(HTTP ${response?.statusCode ?? 'unknown'}${failure ? `: ${failure}` : ''}).`
    );
  }

  if (uploadMode === 'version') {
    if (shouldTagAsCutout) {
      await setAssetVariant(client, assetId, 'cutout');
    }
    return assetId;
  }

  const newAssetId = await resolveCreatedAssetId(client, response);

  await copyAssetMetadata(client, assetId, newAssetId);

  if (shouldTagAsCutout) {
    await setAssetVariant(client, newAssetId, 'cutout');
    await createCutoutRelation(client, assetId, newAssetId);
  }

  return newAssetId;
}
