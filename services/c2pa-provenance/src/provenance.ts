import { createC2pa, type ResolvedManifestStore } from 'c2pa-node';
import type { ProvenanceResult } from './types.js';

export const AI_GENERATED_TYPES = new Set([
  'http://c2pa.org/digitalsourcetype/trainedAlgorithmicMedia',
  'http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia',
]);

export const AI_EDITED_TYPES = new Set([
  'http://c2pa.org/digitalsourcetype/compositeWithTrainedAlgorithmicMedia',
  'http://c2pa.org/digitalsourcetype/algorithmicallyEnhanced',
  'http://cv.iptc.org/newscodes/digitalsourcetype/compositeWithTrainedAlgorithmicMedia',
  'http://cv.iptc.org/newscodes/digitalsourcetype/algorithmicallyEnhanced',
]);

function sourceTypesFromManifest(manifest: Record<string, unknown>): string[] {
  const assertions = Array.isArray(manifest.assertions) ? manifest.assertions : [];
  const sourceTypes = new Set<string>();

  for (const assertionValue of assertions) {
    if (!assertionValue || typeof assertionValue !== 'object') continue;
    const assertion = assertionValue as Record<string, unknown>;
    if (typeof assertion.label !== 'string' || !assertion.label.startsWith('c2pa.actions')) {
      continue;
    }

    const data =
      assertion.data && typeof assertion.data === 'object'
        ? (assertion.data as Record<string, unknown>)
        : {};
    const actions = Array.isArray(data.actions) ? data.actions : [];

    for (const actionValue of actions) {
      if (!actionValue || typeof actionValue !== 'object') continue;
      const action = actionValue as Record<string, unknown>;
      const sourceType = action.digitalSourceType ?? action.digital_source_type;
      if (typeof sourceType === 'string' && sourceType.trim()) {
        sourceTypes.add(sourceType.trim());
      }
    }
  }

  return [...sourceTypes];
}

function sourceToolFromManifest(manifest: Record<string, unknown>): string | null {
  const direct = manifest.claim_generator ?? manifest.claimGenerator;
  if (typeof direct === 'string' && direct.trim()) return direct.trim();

  const rawInfo = manifest.claim_generator_info ?? manifest.claimGeneratorInfo;
  const entries = Array.isArray(rawInfo) ? rawInfo : rawInfo ? [rawInfo] : [];
  for (const value of entries) {
    if (!value || typeof value !== 'object') continue;
    const info = value as Record<string, unknown>;
    const name = typeof info.name === 'string' ? info.name.trim() : '';
    const version = typeof info.version === 'string' ? info.version.trim() : '';
    if (name) return version ? `${name}/${version}` : name;
  }
  return null;
}

export function mapManifestStore(store: ResolvedManifestStore | null): ProvenanceResult {
  const manifest = store?.active_manifest;
  if (!manifest) {
    return {
      provenanceVerified: false,
      aiGenerated: false,
      aiEdited: false,
      sourceTool: null,
      digitalSourceTypes: [],
      rawManifest: null,
      validationErrors: store?.validation_status ?? [],
    };
  }

  const manifestRecord = manifest as Record<string, unknown>;
  const sourceTypes = sourceTypesFromManifest(manifestRecord);
  const validationErrors = [
    ...(store.validation_status ?? []),
    ...(manifest.validation_status ?? []),
  ];

  return {
    provenanceVerified: validationErrors.length === 0,
    aiGenerated: sourceTypes.some((value) => AI_GENERATED_TYPES.has(value)),
    aiEdited: sourceTypes.some((value) => AI_EDITED_TYPES.has(value)),
    sourceTool: sourceToolFromManifest(manifestRecord),
    digitalSourceTypes: sourceTypes,
    rawManifest: store,
    validationErrors,
  };
}

export async function extractProvenance(
  filePath: string,
  mimeType?: string
): Promise<ProvenanceResult> {
  const c2pa = createC2pa();
  const store = await c2pa.read({ path: filePath, mimeType });
  return mapManifestStore(store);
}
