export interface AIDetectionResult {
  modelUsed: string;
  confidenceScore: number;
  labels: string[];
  rawResponse?: unknown;
}

export interface AIDetectionService {
  detect(fileBlob: Blob): Promise<AIDetectionResult>;
}

/** Stub until CodeMie endpoint/auth is confirmed. Swap the export in useAIDetection.ts when ready. */
export const stubAIDetectionService: AIDetectionService = {
  async detect(): Promise<AIDetectionResult> {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      modelUsed: 'stub-detector',
      confidenceScore: 0.5,
      labels: ['unverified-stub-result'],
    };
  },
};
