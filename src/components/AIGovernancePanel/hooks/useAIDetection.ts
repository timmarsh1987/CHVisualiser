import { useState, useCallback } from 'react';
import { stubAIDetectionService, type AIDetectionResult } from '../services/aiDetectionService';

export function useAIDetection() {
  const [result, setResult] = useState<AIDetectionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runDetection = useCallback(async (fileBlob: Blob) => {
    setLoading(true);
    setError(null);
    try {
      const detectionResult = await stubAIDetectionService.detect(fileBlob);
      setResult(detectionResult);
      return detectionResult;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Detection failed');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { result, loading, error, runDetection };
}
