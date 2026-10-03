/** Readable manifest stored on the asset by the provenance service. */
export const C2PA_SUMMARY_PROPERTY = 'SC.Asset.C2PA.Summary';

export interface C2PAManifestSummary {
  hasManifest: boolean;
  verified: boolean;
  claimGenerator?: string;
  title?: string;
  ingredients?: unknown[];
  assertions?: unknown[];
  checkedAt?: string;
  raw?: unknown;
}

export interface C2PASummaryRead {
  /** A stored check exists, including a confirmed absence of credentials. */
  ready: boolean;
  manifest: C2PAManifestSummary | null;
}

interface PropertySource {
  getPropertyValue?<T = unknown>(propertyName: string): T;
  properties?: Record<string, unknown>;
}

function unwrap(value: unknown): unknown {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value;
  const record = value as Record<string, unknown>;
  for (const key of ['Invariant', 'invariant', '_value', 'value', 'en-US', 'en-us']) {
    if (key in record) return unwrap(record[key]);
  }
  return value;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  const unwrapped = unwrap(value);
  if (typeof unwrapped === 'string') {
    try {
      return asRecord(JSON.parse(unwrapped));
    } catch {
      return null;
    }
  }
  return unwrapped && typeof unwrapped === 'object' && !Array.isArray(unwrapped)
    ? (unwrapped as Record<string, unknown>)
    : null;
}

function asText(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined;
}

function claimGenerator(
  manifest: Record<string, unknown> | null,
  entry: Record<string, unknown>
): string | undefined {
  const direct = asText(manifest?.claimGenerator) ?? asText(manifest?.claim_generator);
  if (direct) return direct;

  const info = manifest?.claimGeneratorInfo ?? manifest?.claim_generator_info;
  if (Array.isArray(info)) {
    for (const item of info) {
      if (!item || typeof item !== 'object') continue;
      const name = asText((item as Record<string, unknown>).name);
      if (name) return name;
    }
  }

  return asText(entry.sourceTool);
}

export function mapStoredC2PASummary(value: unknown): C2PASummaryRead {
  const summary = asRecord(value);
  const latest = asRecord(summary?.latest);
  if (!latest) return { ready: false, manifest: null };

  const manifest = asRecord(latest.manifest);
  const hasManifest = latest.provenanceFound === true;
  const ingredients = manifest?.ingredients;
  const assertions = manifest?.assertions;

  return {
    ready: true,
    manifest: {
      hasManifest,
      verified: latest.provenanceVerified === true,
      claimGenerator: claimGenerator(manifest, latest),
      title: asText(manifest?.title),
      ingredients: Array.isArray(ingredients) ? ingredients : [],
      assertions: Array.isArray(assertions) ? assertions : [],
      checkedAt: asText(latest.checkedAt),
      raw: manifest ?? latest,
    },
  };
}

export function readSummaryProperty(entity: PropertySource | null | undefined): unknown {
  if (!entity) return undefined;

  try {
    const value = entity.getPropertyValue?.(C2PA_SUMMARY_PROPERTY);
    if (value !== undefined && value !== null) return value;
  } catch {
    // The page entity may not expose this member through the SDK helper.
  }

  const properties = entity.properties;
  if (!properties) return undefined;
  if (C2PA_SUMMARY_PROPERTY in properties) return properties[C2PA_SUMMARY_PROPERTY];

  const match = Object.keys(properties).find(
    (key) => key.toLowerCase() === C2PA_SUMMARY_PROPERTY.toLowerCase()
  );
  return match ? properties[match] : undefined;
}
