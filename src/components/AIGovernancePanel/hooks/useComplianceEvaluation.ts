import type { EvidenceRecord, EvidenceType } from '../types';

interface ComplianceProfile {
  requiredEvidenceTypes: EvidenceType[];
}

export function useComplianceEvaluation(
  evidenceRecords: EvidenceRecord[],
  profile: ComplianceProfile | null
) {
  if (!profile) {
    return { satisfied: false, missingTypes: [] as EvidenceType[] };
  }

  const presentTypes = new Set(evidenceRecords.map((e) => e.evidenceType));
  const missingTypes = profile.requiredEvidenceTypes.filter((t) => !presentTypes.has(t));

  return {
    satisfied: missingTypes.length === 0,
    missingTypes,
  };
}
