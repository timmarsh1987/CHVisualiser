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
  imageAttached?: boolean;
  imageUploadError?: string;
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
  /**
   * Asset entity property that stores the full compliance report.
   * Prefer a Content Hub **JSON** member. Default: BrandComplianceReport
   */
  complianceReportProperty?: string;
  /**
   * How to write the report property.
   * - `json` (default): store as a JSON object — use with a JSON member type
   * - `string`: store stringified JSON in a String/long-text member
   */
  complianceReportStorage?: 'json' | 'string';
  /** Optional string property for status: pass | warning | fail */
  complianceStatusProperty?: string;
  /** Optional number property for score 0–100 */
  complianceScoreProperty?: string;
  /** Optional string/datetime property for last analyzed timestamp */
  complianceAnalyzedAtProperty?: string;
};

export type AnalyzeComplianceInput = {
  asset: BrandComplianceAsset;
  options?: {
    brandName?: string;
    brandGuidelines?: string;
  };
};
