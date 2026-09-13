export interface ProvenanceResult {
  provenanceVerified: boolean;
  aiGenerated: boolean;
  aiEdited: boolean;
  sourceTool: string | null;
  digitalSourceTypes: string[];
  rawManifest: unknown | null;
  validationErrors: unknown[];
}

export interface ProvenanceCheckSummary {
  checkedAt: string;
  provenanceFound: boolean;
  provenanceVerified: boolean;
  aiGenerated: boolean;
  aiEdited: boolean;
  sourceTool: string | null;
  digitalSourceTypes: string[];
  validationErrors: unknown[];
  manifest: unknown | null;
  webhookEventId: string | null;
}

export interface ProvenanceSummary {
  schemaVersion: 1;
  latest: ProvenanceCheckSummary;
  history: ProvenanceCheckSummary[];
}

export interface ContentHubAsset {
  id: string;
  properties?: Record<string, unknown>;
  renditions?: unknown;
  [key: string]: unknown;
}
