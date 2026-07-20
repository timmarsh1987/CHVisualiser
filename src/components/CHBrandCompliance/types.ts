export type ComplianceStatus = 'pass' | 'warning' | 'fail';

export type ComplianceSeverity = 'critical' | 'major' | 'minor';

export type ComplianceIssue = {
  id: string;
  severity: ComplianceSeverity;
  category: string;
  title: string;
  description: string;
  recommendation: string;
};

export type ComplianceReport = {
  status: ComplianceStatus;
  score: number;
  summary: string;
  issues: ComplianceIssue[];
  passedChecks: string[];
  analyzedAt: string;
};

export type AssetMetadataEntry = {
  key: string;
  value: string;
};

export type BrandComplianceAsset = {
  id: string;
  name: string;
  fileName?: string;
  mimeType?: string;
  description?: string;
  previewUrl?: string;
  definition?: string;
  metadata?: AssetMetadataEntry[];
};

export type BrandComplianceOptions = {
  apiBaseUrl: string;
  apiToken: string;
  brandName?: string;
  brandGuidelines?: string;
  nameProperty?: string;
  fileNameProperty?: string;
  descriptionProperty?: string;
  /** Comma-separated entity property names, or JSON array in config */
  metadataProperties?: string;
};

export type AnalyzeComplianceInput = {
  asset: BrandComplianceAsset;
  options?: {
    brandName?: string;
    brandGuidelines?: string;
  };
};
