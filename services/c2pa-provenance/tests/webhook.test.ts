import { describe, expect, it } from 'vitest';
import { parseWebhookPayload } from '../src/webhook.js';

describe('parseWebhookPayload', () => {
  it('reads a simple asset ID', () => {
    expect(parseWebhookPayload({ assetId: 123 })).toEqual({
      assetId: '123',
      eventId: null,
    });
  });

  it('reads Content Hub save entity message casing', () => {
    expect(parseWebhookPayload({
      SaveEntityMessage: {
        TargetId: 456,
        EventId: 'delivery-1',
      },
    })).toEqual({
      assetId: '456',
      eventId: 'delivery-1',
    });
  });

  it('rejects payloads without an entity identifier', () => {
    expect(() => parseWebhookPayload({ type: 'updated' })).toThrow(
      'asset/entity ID'
    );
  });
});
