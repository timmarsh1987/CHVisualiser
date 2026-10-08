const PREVIEW_RENDITIONS = ['preview', 'thumbnail', 'bigthumbnail', 'downloadPreview', 'downloadOriginal', 'original'] as const;

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function hrefOf(value: unknown): string {
  if (typeof value === 'string') return value;
  const record = asRecord(value);
  return typeof record?.href === 'string' ? record.href : '';
}

export function relationIsExpanded(relation: unknown): boolean {
  const record = asRecord(relation);
  if (!record) return false;
  return 'parents' in record || 'children' in record || 'parent' in record || 'child' in record;
}

export function relationEndpoint(relation: unknown): string {
  const record = asRecord(relation);
  if (!record) return '';
  if (typeof record.href === 'string') return record.href;
  return hrefOf(record.self);
}

export function linkedHrefs(relation: unknown): string[] {
  const record = asRecord(relation);
  if (!record) return [];
  const links: unknown[] = [];
  if (Array.isArray(record.parents)) links.push(...record.parents);
  if (Array.isArray(record.children)) links.push(...record.children);
  if (record.parent) links.push(record.parent);
  if (record.child) links.push(record.child);
  const hrefs: string[] = [];
  for (const link of links) {
    const href = hrefOf(link);
    if (href && !hrefs.includes(href)) hrefs.push(href);
  }
  return hrefs;
}

function hrefFromRendition(entry: unknown): string {
  if (Array.isArray(entry)) {
    for (const item of entry) {
      const href = hrefFromRendition(item);
      if (href) return href;
    }
    return '';
  }
  const direct = hrefOf(entry);
  if (direct) return direct;
  const record = asRecord(entry);
  if (!record) return '';
  return hrefFromRendition(record.items);
}

export function renditionHref(entity: unknown): string {
  const renditions = asRecord(entity)?.renditions;
  if (Array.isArray(renditions)) {
    for (const name of PREVIEW_RENDITIONS) {
      const match = renditions.find((item) => asRecord(item)?.name === name);
      const href = hrefFromRendition(match);
      if (href) return href;
    }
    return '';
  }
  const record = asRecord(renditions);
  if (!record) return '';
  for (const name of PREVIEW_RENDITIONS) {
    const href = hrefFromRendition(record[name]);
    if (href) return href;
  }
  return '';
}
