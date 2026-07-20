import type {
  AnalyzeComplianceInput,
  BrandComplianceOptions,
  ComplianceReport,
} from './types';

function normalizeBaseUrl(baseUrl: string) {
  return baseUrl.replace(/\/$/, '');
}

async function embedRequest<T>(
  options: BrandComplianceOptions,
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

export async function analyzeBrandCompliance(
  options: BrandComplianceOptions,
  input: AnalyzeComplianceInput
): Promise<ComplianceReport> {
  const response = await embedRequest<{ report: ComplianceReport }>(
    options,
    '/api/brand-compliance/analyze',
    {
      method: 'POST',
      body: JSON.stringify(input),
    }
  );

  return response.report;
}
