export interface C2PAProvenanceOptions {
  apiBaseUrl: string;
  apiToken: string;
  requestTimeoutMs: number;
}

export interface ProvenanceView {
  aiGenerated: boolean;
  aiEdited: boolean;
  sourceTool: string | null;
  provenanceVerified: boolean;
  checkedAt: string | null;
  previewUrl: string | null;
  summary: Record<string, unknown> | null;
}
