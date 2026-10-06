export type DetectionCheckId =
  | 'minors'
  | 'animals'
  | 'culturalSensitive'
  | 'firearmsOffensive'
  | 'whatYouSee'
  | 'medical'
  | 'logos'
  | 'nudityGraphic';

export type DetectionStatus = 'clear' | 'flagged';

export type DetectionCheckKind = 'flag' | 'describe';

export type DetectionCheckDefinition = {
  id: DetectionCheckId;
  label: string;
  optionKey:
    | 'detectMinors'
    | 'detectAnimals'
    | 'detectCulturalSensitive'
    | 'detectFirearmsOffensive'
    | 'detectWhatYouSee'
    | 'detectMedical'
    | 'detectLogos'
    | 'detectNudityGraphic';
  description: string;
  /** Flag checks can mark the report flagged. Describe checks are informational. */
  kind: DetectionCheckKind;
};

export const DETECTION_CHECKS: DetectionCheckDefinition[] = [
  {
    id: 'minors',
    label: 'Children / minors',
    optionKey: 'detectMinors',
    description: 'Flag if people who appear to be minors are visible.',
    kind: 'flag',
  },
  {
    id: 'animals',
    label: 'Animals',
    optionKey: 'detectAnimals',
    description: 'Flag if any animal is visible.',
    kind: 'flag',
  },
  {
    id: 'culturalSensitive',
    label: 'Cultural or sensitive imagery',
    optionKey: 'detectCulturalSensitive',
    description:
      'Flag religious, cultural, memorial, or politically sensitive scenes for review.',
    kind: 'flag',
  },
  {
    id: 'firearmsOffensive',
    label: 'Firearms or offensive items',
    optionKey: 'detectFirearmsOffensive',
    description: 'Flag firearms, other weapons, hate symbols, or graphic violence.',
    kind: 'flag',
  },
  {
    id: 'whatYouSee',
    label: 'Tell me what you see',
    optionKey: 'detectWhatYouSee',
    description: 'Describe the subject, setting, and notable objects. This does not flag the image.',
    kind: 'describe',
  },
  {
    id: 'medical',
    label: 'Medical or pharmaceuticals',
    optionKey: 'detectMedical',
    description: 'Flag medicines, devices, pharmaceutical packaging, or a clinical setting.',
    kind: 'flag',
  },
  {
    id: 'logos',
    label: 'Logo detection',
    optionKey: 'detectLogos',
    description: 'Flag a logo, brand mark, or wordmark, and name it when recognized.',
    kind: 'flag',
  },
  {
    id: 'nudityGraphic',
    label: 'Nudity or graphic content',
    optionKey: 'detectNudityGraphic',
    description: 'Flag nudity or graphic content such as gore. The reason stays non-graphic.',
    kind: 'flag',
  },
];

export type DetectionSelection = Record<DetectionCheckId, boolean>;

export type DetectionFinding = {
  id: DetectionCheckId;
  label: string;
  detected: boolean;
  confidence: number;
  summary: string;
};

export type ImageDetectionReport = {
  status: DetectionStatus;
  summary: string;
  findings: DetectionFinding[];
  checksRun: DetectionCheckId[];
  analyzedAt: string;
  imageAttached?: boolean;
  imageUploadError?: string;
};

export type AssetMetadataEntry = {
  key: string;
  value: string;
};

export type ImageDetectionAsset = {
  id: string;
  name: string;
  fileName?: string;
  mimeType?: string;
  description?: string;
  previewUrl?: string;
  downloadUrl?: string;
  /** Best image URL to send to CodeMie */
  fileUrl?: string;
  definition?: string;
  metadata?: AssetMetadataEntry[];
};

export type ImageDetectionOptions = {
  apiBaseUrl: string;
  apiToken: string;
  /** When false, the check starts unchecked. Omitted checks start selected. */
  detectMinors?: boolean;
  detectAnimals?: boolean;
  detectCulturalSensitive?: boolean;
  detectFirearmsOffensive?: boolean;
  detectWhatYouSee?: boolean;
  detectMedical?: boolean;
  detectLogos?: boolean;
  detectNudityGraphic?: boolean;
  nameProperty?: string;
  fileNameProperty?: string;
  descriptionProperty?: string;
  metadataProperties?: string;
  /**
   * Asset entity property that stores the full detection report.
   * Prefer a Content Hub JSON member. Default: ImageDetectionReport
   */
  detectionReportProperty?: string;
  /**
   * How to write the report property.
   * - `json` (default): store as a JSON object
   * - `string`: store stringified JSON in a String member
   */
  detectionReportStorage?: 'json' | 'string';
  /** Optional string property for status: clear | flagged */
  detectionStatusProperty?: string;
  /** Optional string/datetime property for last analyzed timestamp */
  detectionAnalyzedAtProperty?: string;
};

export type AnalyzeImageDetectionInput = {
  asset: ImageDetectionAsset;
  checks: DetectionCheckId[];
};
