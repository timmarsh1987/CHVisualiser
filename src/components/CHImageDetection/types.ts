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
  /** Short label used on the traffic-light pills. */
  shortLabel: string;
  description: string;
  /** Flag checks can mark the report flagged. Describe checks are informational. */
  kind: DetectionCheckKind;
};

export const DETECTION_CHECKS: DetectionCheckDefinition[] = [
  {
    id: 'minors',
    label: 'Children / minors',
    shortLabel: 'Children',
    optionKey: 'detectMinors',
    description: 'Flag if people who appear to be minors are visible.',
    kind: 'flag',
  },
  {
    id: 'animals',
    label: 'Animals',
    shortLabel: 'Animals',
    optionKey: 'detectAnimals',
    description: 'Flag if any animal is visible.',
    kind: 'flag',
  },
  {
    id: 'culturalSensitive',
    label: 'Cultural or sensitive imagery',
    shortLabel: 'Cultural',
    optionKey: 'detectCulturalSensitive',
    description:
      'Flag religious, cultural, memorial, or politically sensitive scenes for review.',
    kind: 'flag',
  },
  {
    id: 'firearmsOffensive',
    label: 'Firearms or offensive items',
    shortLabel: 'Offensive',
    optionKey: 'detectFirearmsOffensive',
    description: 'Flag firearms, other weapons, hate symbols, or graphic violence.',
    kind: 'flag',
  },
  {
    id: 'whatYouSee',
    label: 'Tell me what you see',
    shortLabel: 'Scene',
    optionKey: 'detectWhatYouSee',
    description: 'Describe the subject, setting, and notable objects. This does not flag the image.',
    kind: 'describe',
  },
  {
    id: 'medical',
    label: 'Medical or pharmaceuticals',
    shortLabel: 'Medical',
    optionKey: 'detectMedical',
    description: 'Flag medicines, devices, pharmaceutical packaging, or a clinical setting.',
    kind: 'flag',
  },
  {
    id: 'logos',
    label: 'Logo detection',
    shortLabel: 'Logos',
    optionKey: 'detectLogos',
    description: 'Flag a logo, brand mark, or wordmark, and name it when recognized.',
    kind: 'flag',
  },
  {
    id: 'nudityGraphic',
    label: 'Nudity or graphic content',
    shortLabel: 'Graphic',
    optionKey: 'detectNudityGraphic',
    description: 'Flag nudity or graphic content such as gore. The reason stays non-graphic.',
    kind: 'flag',
  },
];

export type DetectionSelection = Record<DetectionCheckId, boolean>;

/** Box as percentages of the image, origin at the top left. */
export type DetectionRegion = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type DetectionFinding = {
  id: DetectionCheckId;
  label: string;
  detected: boolean;
  confidence: number;
  summary: string;
  /** Approximate areas. Empty when the model could not place a box. */
  regions?: DetectionRegion[];
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
  /**
   * When false, location marks are still stored on the report but not drawn.
   * Omitted defaults to showing the marks.
   */
  showOverlay?: boolean;
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
