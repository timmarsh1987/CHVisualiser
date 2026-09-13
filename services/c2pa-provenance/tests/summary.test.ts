import { describe, expect, it } from 'vitest';
import { buildProvenanceSummary } from '../src/contentHub.js';
import type { ProvenanceResult } from '../src/types.js';

const result: ProvenanceResult = {
  provenanceVerified: true,
  aiGenerated: true,
  aiEdited: false,
  sourceTool: 'Adobe_Firefly/2.1',
  digitalSourceTypes: [
    'http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia',
  ],
  validationErrors: [],
  rawManifest: {
    active_manifest: {
      label: 'manifest-1',
      title: 'firefly.jpg',
      claim_generator: 'Adobe_Firefly/2.1',
      assertions: [{ label: 'c2pa.actions', data: { actions: [] } }],
      resources: { omitted: true },
    },
  },
};

describe('buildProvenanceSummary', () => {
  it('stores readable data without binary resources', () => {
    const summary = buildProvenanceSummary(
      null,
      result,
      new Date('2026-09-13T00:00:00Z'),
      'event-1',
      50
    );
    expect(summary.latest).toMatchObject({
      provenanceVerified: true,
      aiGenerated: true,
      sourceTool: 'Adobe_Firefly/2.1',
      webhookEventId: 'event-1',
    });
    expect(summary.latest.manifest).not.toHaveProperty('resources');
  });

  it('prepends checks and enforces the history limit', () => {
    const first = buildProvenanceSummary(
      null,
      result,
      new Date('2026-09-13T00:00:00Z'),
      'event-1',
      50
    );
    const second = buildProvenanceSummary(
      first,
      result,
      new Date('2026-09-13T00:01:00Z'),
      'event-2',
      1
    );
    expect(second.history).toHaveLength(1);
    expect(second.history[0].webhookEventId).toBe('event-2');
  });
});
