export type CutoutOutputMode = 'newAsset' | 'newVersion';

export type ImageTransformOptions = {
  apiBaseUrl: string;
  apiToken?: string;
  uploadConfiguration?: string;
  requestTimeoutMs?: number;
  cutoutOutputMode?: CutoutOutputMode;
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
  isCutout?: boolean;
  sourceDimensions?: { width: number; height: number };
};
