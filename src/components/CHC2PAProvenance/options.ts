import type { C2PAProvenanceOptions } from './types';

function record(value: unknown): Record<string, unknown> | null {
  if (typeof value === 'string') {
    try {
      return record(JSON.parse(value));
    } catch {
      return null;
    }
  }
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function text(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function parse(value: unknown): Partial<C2PAProvenanceOptions> {
  const source = record(value);
  if (!source) return {};
  const nested = parse(source.config ?? source.settings ?? source.json);
  const timeout = Number(source.requestTimeoutMs);
  return {
    ...nested,
    apiBaseUrl: text(source.apiBaseUrl) ?? nested.apiBaseUrl,
    apiToken: text(source.apiToken) ?? nested.apiToken,
    requestTimeoutMs:
      Number.isFinite(timeout) && timeout > 0 ? timeout : nested.requestTimeoutMs,
  };
}

export function parseC2PAProvenanceOptions(
  options: unknown,
  context?: Record<string, unknown>
): Partial<C2PAProvenanceOptions> {
  return {
    ...parse(context?.config),
    ...parse(options),
    ...parse(context),
  };
}
