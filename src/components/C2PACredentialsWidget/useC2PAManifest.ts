import { useCallback, useEffect, useState } from 'react';
import {
  mapStoredC2PASummary,
  readSummaryProperty,
  type C2PAManifestSummary,
} from './c2paSummary';

export type { C2PAManifestSummary } from './c2paSummary';

export interface C2PAManifestClient {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
  };
}

export interface C2PAManifestRequest {
  entityId: number;
  client?: C2PAManifestClient | null;
  entity?: {
    getPropertyValue?<T = unknown>(propertyName: string): T;
    properties?: Record<string, unknown>;
  } | null;
}

export interface UseC2PAManifestResult {
  manifest: C2PAManifestSummary | null;
  loading: boolean;
  error: string | null;
  /** True when Content Hub has a stored provenance check for this asset. */
  ready: boolean;
  hasCredentials: boolean;
  refetch: () => void;
}

export function useC2PAManifest(
  request: C2PAManifestRequest | null
): UseC2PAManifestResult {
  const [loading, setLoading] = useState(Boolean(request?.entityId));
  const [error, setError] = useState<string | null>(null);
  const [manifest, setManifest] = useState<C2PAManifestSummary | null>(null);
  const [ready, setReady] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);

  const entityId = request?.entityId ?? null;
  const client = request?.client ?? null;
  const entity = request?.entity ?? null;

  const refetch = useCallback(() => {
    setReloadToken((value) => value + 1);
  }, []);

  useEffect(() => {
    if (entityId == null) {
      setLoading(false);
      setError(null);
      setManifest(null);
      setReady(false);
      return;
    }

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      const fromContext = mapStoredC2PASummary(readSummaryProperty(entity));
      let stored = fromContext;

      if (client?.raw?.getAsync) {
        try {
          const response = await client.raw.getAsync<Record<string, unknown>>(
            `/api/entities/${entityId}`
          );
          if (!response.isSuccessStatusCode || !response.content) {
            const status = response.statusCode ?? 'unknown';
            if (!fromContext.ready) {
              throw new Error(
                `Could not load the asset C2PA summary (HTTP ${status}).`
              );
            }
          } else {
            const fetched = mapStoredC2PASummary(
              readSummaryProperty(response.content as {
                properties?: Record<string, unknown>;
              })
            );
            if (fetched.ready || !fromContext.ready) stored = fetched;
          }
        } catch (err) {
          if (!fromContext.ready) {
            if (!cancelled) {
              setManifest(null);
              setReady(false);
              setError(err instanceof Error ? err.message : 'Failed to read the C2PA summary.');
              setLoading(false);
            }
            return;
          }
        }
      } else if (!fromContext.ready) {
        if (!cancelled) {
          setManifest(null);
          setReady(false);
          setError('Content Hub client is not available to read the asset C2PA summary.');
          setLoading(false);
        }
        return;
      }

      if (cancelled) return;
      setManifest(stored.manifest);
      setReady(stored.ready);
      setError(null);
      setLoading(false);
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [entityId, client, entity, reloadToken]);

  return {
    manifest,
    loading,
    error,
    ready,
    hasCredentials: Boolean(manifest?.hasManifest),
    refetch,
  };
}
