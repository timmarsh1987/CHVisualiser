export interface CHEntity {
  id: number;
  identifier: string;
  getPropertyValue?<T = unknown>(propertyName: string): T;
  properties?: Record<string, unknown>;
  relations?: Record<string, unknown>;
}

export interface CHRawClient {
  raw?: {
    getAsync?: <T>(url: string) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
    postAsync?: <T>(url: string, body: unknown) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
    putAsync?: <T>(url: string, body: unknown) => Promise<{
      isSuccessStatusCode?: boolean;
      statusCode?: number;
      content?: T;
    }>;
  };
}

export interface ExternalComponentContext {
  entity: CHEntity | null;
  client: CHRawClient | null;
  culture: string;
  /** Optional username for audit triggeredBy; falls back to "system". */
  currentUser?: string;
  theme?: unknown;
  options?: Record<string, unknown>;
}

export type GovernanceStatus =
  | 'pending'
  | 'compliant'
  | 'nonCompliant'
  | 'needsReview'
  | 'flagged';

export type Article50Category =
  | 'aiInteraction'
  | 'syntheticContent'
  | 'emotionBiometric'
  | 'deepfakePublicInterest'
  | 'none';

export type EvidenceType = 'c2paManifest' | 'aiDetectionResult' | 'manualAttestation';
export type VerificationStatus = 'verified' | 'unverified' | 'invalid' | 'notApplicable';
export type AuditEventType = 'evidenceAdded' | 'statusChanged' | 'profileAssigned';

export interface EvidenceRecord {
  id: number;
  evidenceType: EvidenceType;
  evidenceSource: string;
  capturedAt: string;
  confidenceScore: number | null;
  verificationStatus: VerificationStatus;
  evidenceData: unknown;
}

export interface GovernanceRecord {
  id: number;
  governanceStatus: GovernanceStatus;
  article50Categories: Article50Category[];
  disclosureRequired: boolean;
  disclosureText: string;
  overallConfidence: number | null;
  lastEvaluated: string | null;
  evidenceRecords: EvidenceRecord[];
  complianceProfileId: number | null;
}

export interface AuditEntry {
  id: number;
  eventType: AuditEventType;
  eventDetail: string;
  occurredAt: string;
  triggeredBy: string;
}

export interface ComplianceProfile {
  id: number;
  profileName: string;
  applicableArticle50Categories: Article50Category[];
  requiredEvidenceTypes: EvidenceType[];
  disclosureTemplate: string;
}

/** evidenceData shape for evidenceType: c2paManifest */
export interface C2PAEvidenceData {
  hasManifest: boolean;
  claimGenerator?: string;
  ingredients?: unknown[];
  raw?: unknown;
}

/** evidenceData shape for evidenceType: aiDetectionResult */
export interface AIDetectionEvidenceData {
  modelUsed: string;
  confidenceScore: number;
  labels: string[];
  rawResponse?: unknown;
}

/** evidenceData shape for evidenceType: manualAttestation */
export interface ManualAttestationEvidenceData {
  reviewerName: string;
  note: string;
  attestationConfirmed: boolean;
}
