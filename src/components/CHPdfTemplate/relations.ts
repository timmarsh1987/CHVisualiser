const PREVIEW_RENDITIONS = ['preview', 'thumbnail', 'bigthumbnail', 'downloadPreview'] as const;

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

export function renditionHref(entity: unknown): string {
  const renditions = asRecord(asRecord(entity)?.renditions);
  if (!renditions) return '';
  for (const name of PREVIEW_RENDITIONS) {
    const entry = renditions[name];
    const first = Array.isArray(entry) ? entry[0] : entry;
    const href = hrefOf(first);
    if (href) return href;
  }
  return '';
}
