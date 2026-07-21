export type AssetMetadataEntry = {
  key: string;
  value: string;
};

export type FineArtAsset = {
  id: string;
  name: string;
  fileName?: string;
  mimeType?: string;
  description?: string;
  previewUrl?: string;
  definition?: string;
  metadata?: AssetMetadataEntry[];
};

export type ConciseVisualAnalysis = {
  subject_matter: string;
  setting: string;
  dominant_colors: string[];
  lighting: string;
  texture_mark_making: string;
  line_quality: string;
  perspective_space: string;
  composition: string;
};

export type MediumFormatCues = {
  likely_medium: string;
  evidence: string;
};

export type StyleMovementHypothesis = {
  label: string;
  confidence: number;
  evidence: string;
};

export type TagGroup = {
  tags: string[];
  rationale: string;
};

export type TagPack = {
  must_have: string[];
  nice_to_have: string[];
};

/**
 * Persisted report for a single asset (one entry from the CodeMie `artworks` array).
 */
export type FineArtTaggingReport = {
  file_name?: string;
  concise_visual_analysis: ConciseVisualAnalysis;
  medium_format_cues: MediumFormatCues;
  style_movement_hypotheses: StyleMovementHypothesis[];
  suggested_tags_grouped: Record<string, TagGroup>;
  tag_pack: TagPack;
  analyzedAt: string;
  imageAttached?: boolean;
  imageUploadError?: string;
};

export type FineArtTaggingOptions = {
  apiBaseUrl: string;
  apiToken: string;
  displayName?: string;
  nameProperty?: string;
  fileNameProperty?: string;
  descriptionProperty?: string;
  /** Comma-separated entity property names, or JSON array in config */
  metadataProperties?: string;
  /**
   * Asset entity property that stores the full tagging report.
   * Prefer a Content Hub **JSON** member. Default: FineArtTaggingReport
   */
  taggingReportProperty?: string;
  /**
   * How to write the report property.
   * - `json` (default): store as a JSON object — use with a JSON member type
   * - `string`: store stringified JSON in a String/long-text member
   */
  taggingReportStorage?: 'json' | 'string';
  /** Optional string property for comma-separated must-have tags */
  mustHaveTagsProperty?: string;
  /** Optional string property for comma-separated nice-to-have tags */
  niceToHaveTagsProperty?: string;
  /** Optional string/datetime property for last analyzed timestamp */
  taggingAnalyzedAtProperty?: string;
};

export type AnalyzeFineArtTaggingInput = {
  asset: FineArtAsset;
  options?: {
    displayName?: string;
  };
};
