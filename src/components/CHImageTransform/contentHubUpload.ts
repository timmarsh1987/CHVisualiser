import type { ImageAssetContext, ImageTransformOptions } from './types';

type UploadResponse = {
  isSuccessStatusCode?: boolean;
  statusCode?: number;
  content?: unknown;
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
};

export type ImageUploadMode = 'version' | 'new-asset';

function extensionFor(mimeType: string): string {
  if (mimeType === 'image/png') return 'png';
  if (mimeType === 'image/webp') return 'webp';
  return 'jpg';
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

  const extension = extensionFor(image.type);
  const originalStem = asset.fileName.replace(/\.[^.]+$/, '') || `asset-${asset.id}`;
  const fileName = `${originalStem}-${timestampForFileName()}.${extension}`;
  const buffer = await image.arrayBuffer();

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

  const newAssetId = createdAssetId(response?.content);
  if (!newAssetId) {
    throw new Error('Content Hub created the asset but did not return its asset ID.');
  }
  return newAssetId;
}
