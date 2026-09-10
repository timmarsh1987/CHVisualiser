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

function extensionFor(mimeType: string): string {
  if (mimeType === 'image/png') return 'png';
  if (mimeType === 'image/webp') return 'webp';
  return 'jpg';
}

export async function applyImageAsNewVersion(
  client: ContentHubClient | undefined,
  asset: ImageAssetContext,
  image: Blob,
  options: ImageTransformOptions
): Promise<void> {
  if (!client?.uploads?.uploadAsync) {
    throw new Error('The Content Hub upload client is not available in this component context.');
  }

  const assetId = Number(asset.id);
  if (!Number.isSafeInteger(assetId) || assetId <= 0) {
    throw new Error('Content Hub returned an invalid numeric asset ID.');
  }

  const extension = extensionFor(image.type);
  const originalStem = asset.fileName.replace(/\.[^.]+$/, '') || `asset-${asset.id}`;
  const fileName = `${originalStem}-seedream.${extension}`;
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
    actionName: 'NewMainFile',
    actionParameters: { AssetId: assetId },
  };

  const response = await client.uploads.uploadAsync(request);
  if (response?.isSuccessStatusCode === false) {
    throw new Error(
      `Content Hub could not create the new version (HTTP ${response.statusCode ?? 'unknown'}).`
    );
  }
}
