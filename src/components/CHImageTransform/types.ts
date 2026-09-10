export type ImageTransformOptions = {
  apiBaseUrl: string;
  apiToken?: string;
  uploadConfiguration?: string;
  createUploadUrl?: string;
  createUploadComponentId?: number;
  requestTimeoutMs?: number;
};

export type ImageAssetContext = {
  id: string;
  name: string;
  fileName: string;
  mimeType: string;
  previewUrl: string;
  sourceUrl: string;
};

export type GeneratedImage = {
  blob: Blob;
  objectUrl: string;
  mimeType: string;
  altText?: string;
};
