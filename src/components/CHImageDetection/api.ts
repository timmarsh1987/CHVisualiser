import type {
  AnalyzeImageDetectionInput,
  ImageDetectionOptions,
  ImageDetectionReport,
} from './types';

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/$/, '');
}

async function embedRequest<T>(
  options: ImageDetectionOptions,
  path: string,
  init?: RequestInit
): Promise<T> {
  const url = `${normalizeBaseUrl(options.apiBaseUrl)}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${options.apiToken}`,
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });

  const payload = (await response.json()) as T & { error?: string };

  if (!response.ok) {
    throw new Error(payload.error ?? `Request failed (${response.status})`);
  }

  return payload;
}

export async function analyzeImageDetection(
  options: ImageDetectionOptions,
  input: AnalyzeImageDetectionInput
): Promise<ImageDetectionReport> {
  const response = await embedRequest<{ report: ImageDetectionReport }>(
    options,
    '/api/image-detection/analyze',
    {
      method: 'POST',
      body: JSON.stringify(input),
    }
  );

  return response.report;
}
