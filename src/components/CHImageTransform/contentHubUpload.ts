import type { ImageAssetContext, ImageTransformOptions } from './types';

function extensionFor(mimeType: string): string {
  if (mimeType === 'image/png') return 'png';
  if (mimeType === 'image/webp') return 'webp';
  return 'jpg';
}

async function errorText(response: Response): Promise<string> {
  const text = await response.text();
  if (!text) return `HTTP ${response.status}`;
  try {
    const payload = JSON.parse(text);
    return payload?.message || payload?.error || `HTTP ${response.status}`;
  } catch {
    return text.slice(0, 300);
  }
}

function createFileToken(): string {
  const random = new Uint32Array(3);
  crypto.getRandomValues(random);
  return `${Date.now()}-${random[0]}${random[1]}-${random[2]}`;
}

async function uploadThroughCreationComponent(
  uploadUrl: string,
  componentId: number,
  assetId: number,
  image: Blob,
  fileName: string
): Promise<void> {
  const resolvedUrl = new URL(uploadUrl, window.location.origin);
  if (resolvedUrl.origin !== window.location.origin) {
    throw new Error('The create upload URL must use the current Content Hub origin.');
  }
  if (!Number.isSafeInteger(componentId) || componentId <= 0) {
    throw new Error('The create upload component ID is invalid.');
  }

  const formData = new FormData();
  formData.append('id', String(assetId));
  formData.append('componentId', String(componentId));
  formData.append('chunk', '0');
  formData.append('chunks', '1');
  formData.append('chunkSize', String(image.size));
  formData.append('fileToken', createFileToken());
  // This tenant's Creation component expects both values under the "name" key.
  formData.append('name', image, fileName);
  formData.append('name', fileName);

  const response = await fetch(resolvedUrl, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  if (!response.ok) {
    throw new Error(`Content Hub could not upload the new version: ${await errorText(response)}`);
  }

  const result = await response.clone().json().catch(() => null);
  if (result?.success === false) {
    throw new Error(result.message || 'Content Hub reported that the upload failed.');
  }
}

export async function applyImageAsNewVersion(
  asset: ImageAssetContext,
  image: Blob,
  options: ImageTransformOptions
): Promise<void> {
  // The non-chunked Content Hub upload route accepts files up to 10 MB.
  if (image.size > 10 * 1024 * 1024) {
    throw new Error('The generated image exceeds the 10 MB browser upload limit.');
  }

  const extension = extensionFor(image.type);
  const originalStem = asset.fileName.replace(/\.[^.]+$/, '') || `asset-${asset.id}`;
  const fileName = `${originalStem}-seedream.${extension}`;
  const assetId = Number(asset.id);
  if (!Number.isSafeInteger(assetId) || assetId <= 0) {
    throw new Error('Content Hub returned an invalid numeric asset ID.');
  }

  if (options.createUploadUrl) {
    if (options.createUploadComponentId == null) {
      throw new Error('Configure createUploadComponentId with createUploadUrl.');
    }
    await uploadThroughCreationComponent(
      options.createUploadUrl,
      options.createUploadComponentId,
      assetId,
      image,
      fileName
    );
    return;
  }

  const requestBody = {
    file_name: fileName,
    file_size: image.size,
    upload_configuration: {
      name: options.uploadConfiguration || 'AssetUploadConfiguration',
    },
    action: {
      name: 'NewMainFile',
      parameters: { AssetId: assetId },
    },
  };

  const createResponse = await fetch('/api/v2.0/upload', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json-patch+json' },
    body: JSON.stringify(requestBody),
  });
  if (!createResponse.ok) {
    throw new Error(`Content Hub could not start the upload: ${await errorText(createResponse)}`);
  }

  const identifiers = await createResponse.json();
  const location = createResponse.headers.get('Location');
  if (!location) {
    throw new Error('Content Hub did not return an upload URL.');
  }

  const formData = new FormData();
  formData.append('file', image, fileName);
  const processResponse = await fetch(location, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });
  if (!processResponse.ok) {
    throw new Error(`Content Hub could not upload the image: ${await errorText(processResponse)}`);
  }

  const finalizeResponse = await fetch('/api/v2.0/upload/finalize', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json-patch+json' },
    body: JSON.stringify(identifiers),
  });
  if (!finalizeResponse.ok) {
    throw new Error(`Content Hub could not create the new version: ${await errorText(finalizeResponse)}`);
  }

  const result = await finalizeResponse.json().catch(() => ({}));
  if (result?.success === false) {
    throw new Error(result.message || 'Content Hub reported that the upload failed.');
  }
}
