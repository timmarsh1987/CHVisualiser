import {
  PDF_TEMPLATE_DEFINITION,
  PDF_TEMPLATE_JSON,
  PDF_TEMPLATE_NAME,
  PDF_TEMPLATE_SCHEMA,
  PRODUCT_DEFINITION,
} from './definition';

export type HubClient = {
  raw?: {
    getAsync?: (url: string) => Promise<HubResponse>;
    postAsync?: (url: string, body: unknown) => Promise<HubResponse>;
    putAsync?: (url: string, body: unknown) => Promise<HubResponse>;
  };
  uploads?: {
    uploadAsync: (request: {
      source: { name: string; getReadableSourceAsync: () => Promise<ArrayBuffer> };
      configurationName: string;
      actionName: string;
      actionParameters: Record<string, unknown>;
    }) => Promise<HubResponse>;
  };
};

type HubResponse = {
  isSuccessStatusCode?: boolean;
  statusCode?: number;
  content?: unknown;
  responseHeaders?: Record<string, unknown>;
};

export type PdfTemplateSummary = {
  id: number;
  name: string;
  json: string;
};

export type CatalogField = {
  id: string;
  label: string;
  kind: 'text' | 'localized' | 'option' | 'relation' | 'image' | 'list' | 'table';
  path: string;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

function readText(value: unknown): string {
  if (typeof value === 'string') return value;
  const record = asRecord(value);
  if (!record) return '';
  for (const key of ['Invariant', 'invariant', 'en-US', 'en-us', 'value', 'Value']) {
    const nested = record[key];
    if (typeof nested === 'string') return nested;
  }
  return '';
}

export function entityIdFrom(value: unknown): number | null {
  if (typeof value === 'number' && Number.isSafeInteger(value) && value > 0) return value;
  if (typeof value === 'string') {
    const match = value.match(/\/api\/entities\/(\d+)/i);
    if (match) return entityIdFrom(Number(match[1]));
    const numeric = Number(value);
    return Number.isSafeInteger(numeric) && numeric > 0 ? numeric : null;
  }
  const record = asRecord(value);
  if (!record) return null;
  return (
    entityIdFrom(record.id) ??
    entityIdFrom(record.Id) ??
    entityIdFrom(asRecord(record.systemProperties)?.id) ??
    entityIdFrom(record.href) ??
    entityIdFrom(record.self)
  );
}

export function pageEntityId(entity: unknown, options: unknown): number | null {
  const optionRecord = asRecord(options);
  return (
    entityIdFrom(optionRecord?.entityId) ??
    entityIdFrom(optionRecord?.templateId) ??
    entityIdFrom(entity)
  );
}

function unwrapEntity(content: unknown): Record<string, unknown> {
  const record = asRecord(content) ?? {};
  const nested = asRecord(record.content);
  if (nested && (nested.properties || nested.id)) return nested;
  return record;
}

function itemsFrom(content: unknown): unknown[] {
  if (Array.isArray(content)) return content;
  const record = asRecord(content);
  if (!record) return [];
  if (Array.isArray(record.items)) return record.items;
  const nested = asRecord(record.content);
  if (nested && Array.isArray(nested.items)) return nested.items;
  return [];
}

async function getJson(client: HubClient, url: string): Promise<unknown> {
  if (!client.raw?.getAsync) throw new Error('Content Hub client is not available.');
  const response = await client.raw.getAsync(url);
  if (!response.isSuccessStatusCode) {
    throw new Error(`Content Hub request failed (${response.statusCode ?? 'unknown'}).`);
  }
  return response.content;
}

export async function ensurePdfTemplateDefinition(client: HubClient): Promise<void> {
  if (!client.raw?.getAsync) throw new Error('Content Hub client is not available.');
  const existing = await client.raw.getAsync(`/api/entitydefinitions/${PDF_TEMPLATE_DEFINITION}`);
  if (existing.isSuccessStatusCode) return;
  if (!client.raw.postAsync) throw new Error('Content Hub cannot create entity definitions from this page.');
  const created = await client.raw.postAsync('/api/entitydefinitions', PDF_TEMPLATE_SCHEMA);
  if (!created.isSuccessStatusCode) {
    throw new Error(
      `Could not create ${PDF_TEMPLATE_DEFINITION} (${created.statusCode ?? 'unknown'}). Add a definition with string properties ${PDF_TEMPLATE_NAME} and ${PDF_TEMPLATE_JSON}.`
    );
  }
}

export async function loadPdfTemplate(client: HubClient, id: number): Promise<PdfTemplateSummary> {
  const payload = unwrapEntity(await getJson(client, `/api/entities/${id}`));
  const properties = asRecord(payload.properties) ?? {};
  const name = readText(properties[PDF_TEMPLATE_NAME]) || `Template ${id}`;
  const json = readText(properties[PDF_TEMPLATE_JSON]);
  return { id, name, json };
}

export async function listPdfTemplates(client: HubClient): Promise<PdfTemplateSummary[]> {
  const query = encodeURIComponent(`Definition.Name=='${PDF_TEMPLATE_DEFINITION}'`);
  const content = await getJson(client, `/api/entities/query?query=${query}&take=50`);
  const ids = itemsFrom(content)
    .map((item) => entityIdFrom(item))
    .filter((id): id is number => id != null);
  const unique = [...new Set(ids)];
  const templates = await Promise.all(unique.map((id) => loadPdfTemplate(client, id)));
  return templates.sort((left, right) => left.name.localeCompare(right.name));
}

async function writeProperties(client: HubClient, id: number, name: string, json: string): Promise<void> {
  if (!client.raw?.putAsync || !client.raw.getAsync) {
    throw new Error('Content Hub client is not available for saving.');
  }
  const payload = unwrapEntity(await getJson(client, `/api/entities/${id}`));
  const href =
    (typeof asRecord(payload.entitydefinition)?.href === 'string' && asRecord(payload.entitydefinition)?.href) ||
    `/api/entitydefinitions/${PDF_TEMPLATE_DEFINITION}`;
  const attempts = [
    { [PDF_TEMPLATE_NAME]: { Invariant: name }, [PDF_TEMPLATE_JSON]: { Invariant: json } },
    { [PDF_TEMPLATE_NAME]: name, [PDF_TEMPLATE_JSON]: json },
  ];
  const errors: string[] = [];
  for (const properties of attempts) {
    const response = await client.raw.putAsync(`/api/entities/${id}`, {
      entitydefinition: { href },
      properties,
    });
    if (response.isSuccessStatusCode) return;
    errors.push(String(response.statusCode ?? 'unknown'));
  }
  throw new Error(`Could not save the PDF template (${errors.join(', ')}).`);
}

export async function savePdfTemplate(
  client: HubClient,
  id: number,
  name: string,
  json: string
): Promise<void> {
  await writeProperties(client, id, name, json);
}

export async function createPdfTemplate(client: HubClient, name: string, json: string): Promise<number> {
  if (!client.raw?.postAsync) throw new Error('Content Hub client is not available for creating a template.');
  const attempts = [
    {
      [PDF_TEMPLATE_NAME]: { Invariant: name },
      [PDF_TEMPLATE_JSON]: { Invariant: json },
    },
    { [PDF_TEMPLATE_NAME]: name, [PDF_TEMPLATE_JSON]: json },
  ];
  let lastStatus = 'unknown';
  for (const properties of attempts) {
    const response = await client.raw.postAsync('/api/entities', {
      entitydefinition: { href: `/api/entitydefinitions/${PDF_TEMPLATE_DEFINITION}` },
      properties,
    });
    if (response.isSuccessStatusCode) {
      const id = entityIdFrom(response.content) ?? entityIdFrom(headerValue(response.responseHeaders, 'location'));
      if (!id) throw new Error('Content Hub created the template but did not return its id.');
      return id;
    }
    lastStatus = String(response.statusCode ?? 'unknown');
  }
  throw new Error(`Could not create the PDF template (${lastStatus}).`);
}

export function dataFromEntity(entity: unknown): Record<string, unknown> {
  const record = asRecord(entity) ?? {};
  const properties = asRecord(record.properties) ?? {};
  const data: Record<string, unknown> = {};
  if (typeof record.identifier === 'string') data.identifier = record.identifier;
  if (typeof record.created_on === 'string') data.created_on = record.created_on;
  if (typeof record.modified_on === 'string') data.modified_on = record.modified_on;
  for (const [key, value] of Object.entries(properties)) {
    data[key] = unwrapInvariant(value);
  }
  return data;
}

export async function loadEntityData(client: HubClient, id: number): Promise<Record<string, unknown>> {
  return dataFromEntity(unwrapEntity(await getJson(client, `/api/entities/${id}`)));
}

export async function loadProductFields(client: HubClient): Promise<CatalogField[]> {
  if (!client.raw?.getAsync) return [];
  const response = await client.raw.getAsync(
    `/api/entitydefinitions/${PRODUCT_DEFINITION}?include=member_groups`
  );
  if (!response.isSuccessStatusCode) return [];
  return fieldsFromDefinition(response.content);
}

export async function saveGeneratedPdf(client: HubClient, fileName: string, bytes: Uint8Array): Promise<number> {
  if (!client.uploads?.uploadAsync) {
    throw new Error('Content Hub upload is not available on this page.');
  }
  const copy = new ArrayBuffer(bytes.byteLength);
  new Uint8Array(copy).set(bytes);
  const response = await client.uploads.uploadAsync({
    source: {
      name: fileName,
      getReadableSourceAsync: () => Promise.resolve(copy),
    },
    configurationName: 'AssetUploadConfiguration',
    actionName: 'NewAsset',
    actionParameters: {},
  });
  if (response.isSuccessStatusCode === false) {
    throw new Error(`Could not save the PDF (${response.statusCode ?? 'unknown'}).`);
  }
  const id = entityIdFrom(response.content) ?? entityIdFrom(headerValue(response.responseHeaders, 'location'));
  if (!id) throw new Error('Content Hub saved the PDF but did not return an asset id.');
  return id;
}

function fieldsFromDefinition(content: unknown): CatalogField[] {
  const record = definitionRecord(content);
  const groups = Array.isArray(record.member_groups) ? record.member_groups : [];
  const fields: CatalogField[] = [];
  for (const group of groups) {
    const members = asRecord(group)?.members;
    if (!Array.isArray(members)) continue;
    for (const member of members) {
      const entry = asRecord(member);
      const name = typeof entry?.name === 'string' ? entry.name.trim() : '';
      if (!name || entry?.type === 'Relation') {
        if (name && entry?.type === 'Relation') {
          fields.push({ id: name, label: name, kind: 'relation', path: name });
        }
        continue;
      }
      const type = typeof entry?.type === 'string' ? entry.type : '';
      const multilingual = Boolean(entry?.is_multilanguage || entry?.is_multilingual);
      const kind = type === 'OptionList' ? 'option' : multilingual ? 'localized' : 'text';
      fields.push({ id: name, label: name, kind, path: name });
    }
  }
  return fields;
}

function definitionRecord(content: unknown): Record<string, unknown> {
  const record = asRecord(content) ?? {};
  if (Array.isArray(record.member_groups)) return record;
  const nested = asRecord(record.content);
  if (nested && Array.isArray(nested.member_groups)) return nested;
  return record;
}

function unwrapInvariant(value: unknown): unknown {
  const record = asRecord(value);
  if (!record) return value;
  if ('Invariant' in record || 'invariant' in record) return record.Invariant ?? record.invariant;
  return value;
}

function headerValue(headers: Record<string, unknown> | undefined, name: string): string {
  if (!headers) return '';
  const entry = Object.entries(headers).find(([key]) => key.toLowerCase() === name);
  const raw = entry?.[1];
  if (Array.isArray(raw)) return raw[0] == null ? '' : String(raw[0]);
  return raw == null ? '' : String(raw);
}
