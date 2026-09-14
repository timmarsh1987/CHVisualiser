import type { C2PAProvenanceOptions } from './types';

function errorMessage(value: unknown, status: number): string {
  if (value && typeof value === 'object') {
    const source = value as Record<string, unknown>;
    if (typeof source.message === 'string') return source.message;
  }
  return `Provenance check failed (HTTP ${status}).`;
}

export async function triggerProvenanceCheck(
  assetId: string,
  options: C2PAProvenanceOptions
): Promise<void> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), options.requestTimeoutMs);

  try {
    const response = await fetch(
      `${options.apiBaseUrl.replace(/\/+$/, '')}/api/c2pa/webhook`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${options.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assetId }),
        signal: controller.signal,
      }
    );
    const body = await response.json().catch(() => null);
    if (!response.ok) throw new Error(errorMessage(body, response.status));
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('The provenance check timed out.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
