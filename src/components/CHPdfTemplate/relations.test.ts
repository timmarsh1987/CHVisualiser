import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { linkedHrefs, relationEndpoint, relationIsExpanded, renditionHref } from './relations.ts';

describe('relation links', () => {
  it('reads a child href and does not treat the relation endpoint as a link', () => {
    const relation = {
      children: [{ href: 'https://example.test/api/entities/60735' }],
      inherits_security: true,
      self: { href: 'https://example.test/api/entities/60734/relations/PCMProductToMasterAsset' },
    };
    assert.equal(relationIsExpanded(relation), true);
    assert.deepEqual(linkedHrefs(relation), ['https://example.test/api/entities/60735']);
  });

  it('reads a parent href', () => {
    const relation = {
      parent: { href: 'https://example.test/api/entities/30216' },
      self: { href: 'https://example.test/api/entities/60734/relations/PCMProductStatusToProduct' },
    };
    assert.deepEqual(linkedHrefs(relation), ['https://example.test/api/entities/30216']);
  });

  it('keeps an unexpanded relation as an endpoint to load', () => {
    const relation = { href: 'https://example.test/api/entities/60734/relations/PCMProductFamilyToProduct' };
    assert.equal(relationIsExpanded(relation), false);
    assert.equal(relationEndpoint(relation), relation.href);
    assert.deepEqual(linkedHrefs(relation), []);
  });
});

describe('rendition href', () => {
  it('prefers the preview rendition and ignores the original download', () => {
    const entity = {
      renditions: {
        downloadOriginal: [{ href: 'https://example.test/original' }],
        preview: [{ href: 'https://example.test/preview' }],
        thumbnail: [{ href: 'https://example.test/thumbnail' }],
      },
    };
    assert.equal(renditionHref(entity), 'https://example.test/preview');
  });

  it('returns nothing when the entity has no image rendition', () => {
    assert.equal(renditionHref({ renditions: {} }), '');
  });

  it('uses the original file when no preview rendition exists', () => {
    const entity = {
      renditions: {
        downloadOriginal: [{ href: 'https://example.test/original' }],
      },
    };
    assert.equal(renditionHref(entity), 'https://example.test/original');
  });

  it('reads a rendition wrapped in items', () => {
    const entity = {
      renditions: {
        preview: { items: [{ href: 'https://example.test/preview' }] },
      },
    };
    assert.equal(renditionHref(entity), 'https://example.test/preview');
  });
});
