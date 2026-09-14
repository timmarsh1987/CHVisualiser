import { describe, expect, it } from 'vitest';
import type { ResolvedManifestStore } from 'c2pa-node';
import { mapManifestStore } from '../src/provenance.js';

function store(
  digitalSourceTypes: string[],
  validationStatus: unknown[] = []
): ResolvedManifestStore {
  return {
    active_manifest: {
      assertions: [{
        label: 'c2pa.actions',
        data: {
          actions: digitalSourceTypes.map((digitalSourceType) => ({ digitalSourceType })),
        },
      }],
      claim_generator: 'Adobe_Firefly/2.1',
      ingredients: [],
      thumbnail: null,
    },
    manifests: {},
    validation_status: validationStatus,
  } as ResolvedManifestStore;
}

describe('mapManifestStore', () => {
  it('returns an unverified negative result when no manifest exists', () => {
    expect(mapManifestStore(null)).toMatchObject({
      provenanceVerified: false,
      aiGenerated: false,
      aiEdited: false,
      sourceTool: null,
      rawManifest: null,
    });
  });

  it('maps trained algorithmic media to AI generated', () => {
    expect(
      mapManifestStore(
        store(['http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia'])
      )
    ).toMatchObject({
      provenanceVerified: true,
      aiGenerated: true,
      aiEdited: false,
      sourceTool: 'Adobe_Firefly/2.1',
    });
  });

  it('maps any matching action instead of only the first action', () => {
    const result = mapManifestStore(store([
      'http://c2pa.org/digitalsourcetype/digitalCapture',
      'http://c2pa.org/digitalsourcetype/compositeWithTrainedAlgorithmicMedia',
    ]));
    expect(result.aiGenerated).toBe(false);
    expect(result.aiEdited).toBe(true);
  });

  it('does not verify a manifest with validation failures', () => {
    const result = mapManifestStore(
      store(
        ['http://c2pa.org/digitalsourcetype/trainedAlgorithmicMedia'],
        [{ code: 'claimSignature.mismatch' }]
      )
    );
    expect(result.provenanceVerified).toBe(false);
    expect(result.aiGenerated).toBe(true);
  });

  it('reads source tool from C2PA claim generator info', () => {
    const manifestStore = store([]);
    if (manifestStore.active_manifest) {
      manifestStore.active_manifest.claim_generator = undefined;
      manifestStore.active_manifest.claim_generator_info = [
        { name: 'Adobe Firefly', version: '2.1' },
      ];
    }
    expect(mapManifestStore(manifestStore).sourceTool).toBe('Adobe Firefly/2.1');
  });
});
