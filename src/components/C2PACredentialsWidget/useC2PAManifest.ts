/**
 * PLACEHOLDER — C2PACredentialsWidget was not present in this repository when
 * AIGovernancePanel was built. Replace this file with the real hook when available.
 * Do not treat this stub as the production C2PA implementation.
 */
import { useEffect, useState } from 'react';

export interface C2PAManifestSummary {
  hasManifest: boolean;
  claimGenerator?: string;
  title?: string;
  ingredients?: unknown[];
  assertions?: unknown[];
  raw?: unknown;
}

export interface UseC2PAManifestResult {
  manifest: C2PAManifestSummary | null;
  loading: boolean;
  error: string | null;
  hasCredentials: boolean;
  refetch: () => void;
}

export function useC2PAManifest(
  _source?: string | Blob | null
): UseC2PAManifestResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [manifest, setManifest] = useState<C2PAManifestSummary | null>(null);

  const run = () => {
    setLoading(true);
    setError(null);
    // Auto-runs on mount (same contract as the intended real hook).
    window.setTimeout(() => {
      setManifest({
        hasManifest: false,
        claimGenerator: undefined,
        ingredients: [],
        assertions: [],
      });
      setError(
        'C2PACredentialsWidget/useC2PAManifest is a placeholder — the real widget was not found in this repo.'
      );
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    run();
  }, [_source]);

  return {
    manifest,
    loading,
    error,
    hasCredentials: Boolean(manifest?.hasManifest),
    refetch: run,
  };
}
