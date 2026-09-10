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
  const requestBody = {
    file_name: fileName,
    file_size: image.size,
    upload_configuration: {
      name: options.uploadConfiguration || 'AssetUploadConfiguration',
    },
    action: {
      name: 'NewMainFile',
      parameters: { AssetId: asset.id },
    },
  };

  const createResponse = await fetch('/api/v2.0/upload', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
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
    headers: { 'Content-Type': 'application/json' },
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
