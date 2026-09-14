/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ProvenanceView } from './types';

function unwrap(value: unknown): unknown {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value;
  const source = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', '_value', 'value']) {
    if (key in source) return unwrap(source[key]);
  }
  return value;
}

function property(source: any, name: string): unknown {
  try {
    const value = source?.getPropertyValue?.(name);
    if (value !== undefined) return unwrap(value);
  } catch {
    // Fall through to raw properties.
  }
  const properties = source?.properties as Record<string, unknown> | undefined;
  const key = Object.keys(properties ?? {}).find(
    (candidate) => candidate.toLowerCase() === name.toLowerCase()
  );
  return key ? unwrap(properties?.[key]) : undefined;
}

function bool(value: unknown): boolean {
  return value === true || value === 'true' || value === 1;
}

function string(value: unknown): string | null {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function json(value: unknown): Record<string, unknown> | null {
  if (typeof value === 'string') {
    try {
      return json(JSON.parse(value));
    } catch {
      return null;
    }
  }
  return value && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

export function assetId(entity: any): string | null {
  const value = entity?.systemProperties?.id ?? entity?.id;
  return value == null || !String(value).trim() ? null : String(value).trim();
}

export function mapProvenanceView(entity: any): ProvenanceView {
  return {
    aiGenerated: bool(property(entity, 'EPAM.aiGenerated')),
    aiEdited: bool(property(entity, 'EPAM.aiEdited')),
    sourceTool: string(property(entity, 'EPAM.aiSourceTool')),
    provenanceVerified: bool(property(entity, 'EPAM.provenanceVerified')),
    checkedAt: string(property(entity, 'EPAM.provenanceCheckedAt')),
    summary: json(property(entity, 'SC.Asset.C2PA.Summary')),
  };
}

export async function loadAsset(client: any, id: string): Promise<any> {
  if (!client?.raw?.getAsync) throw new Error('Content Hub client is unavailable.');
  const response = await client.raw.getAsync(`/api/entities/${encodeURIComponent(id)}`);
  if (!response?.isSuccessStatusCode || !response.content) {
    throw new Error(`Could not reload asset ${id} (HTTP ${response?.statusCode ?? 'unknown'}).`);
  }
  return response.content;
}
