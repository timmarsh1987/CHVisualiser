import React, { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { FlowBlock, Template } from '../../../pdf-builder/packages/render-core/src/browser';
import sampleProduct from '../../../pdf-builder/fixtures/examples/entity.json';
import fallbackCatalog from '../../../pdf-builder/fixtures/examples/fields.json';
import {
  createPdfTemplate,
  ensurePdfTemplateDefinition,
  listPdfTemplates,
  loadPdfTemplate,
  loadProductFields,
  pageEntityId,
  savePdfTemplate,
  type CatalogField,
  type HubClient,
} from './hub';
import { blankTemplate, readTemplate, renderTemplate } from './renderClient';

type EditorProps = {
  client: HubClient;
  entity?: unknown;
  options?: unknown;
};

const fallbackFields = (fallbackCatalog as { fields: CatalogField[] }).fields;

function newId(prefix: string): string {
  return `${prefix}-${crypto.randomUUID()}`;
}

function findBlock(template: Template, id: string | null): { rowIndex: number; block: FlowBlock } | null {
  const rows = template.layout?.rows ?? [];
  for (const [rowIndex, row] of rows.entries()) {
    const block = row.blocks.find((item) => item.id === id);
    if (block) return { rowIndex, block };
  }
  return null;
}

function addBlock(template: Template, type: FlowBlock['type']): Template {
  const next = structuredClone(template);
  const id = newId('block');
  const block: FlowBlock =
    type === 'table'
      ? {
          id,
          label: 'Table',
          type,
          span: 12,
          columns: [{ header: 'ProductName', binding: { kind: 'property', path: 'ProductName' }, width: 1 }],
        }
      : type === 'list'
        ? { id, label: 'List', type, span: 12, binding: { kind: 'repeating', path: 'Unbound' } }
        : { id, label: type === 'image' ? 'Image' : 'Text', type, span: 12, binding: { kind: 'property', path: 'Unbound' } };
  next.layout?.rows.push({ id: newId('row'), blocks: [block] });
  return next;
}

export default function TemplateEditor({ client, entity, options }: EditorProps) {
  const [templates, setTemplates] = useState<Array<{ id: number; name: string }>>([]);
  const [templateId, setTemplateId] = useState<number | null>(null);
  const [name, setName] = useState('New PDF template');
  const [template, setTemplate] = useState<Template>(() => blankTemplate('New PDF template'));
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [fields, setFields] = useState<CatalogField[]>(fallbackFields);
  const [status, setStatus] = useState('Loading templates...');
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const selected = findBlock(template, selectedId);
  const textFields = useMemo(
    () => fields.filter((field) => field.kind === 'text' || field.kind === 'localized' || field.kind === 'option' || field.kind === 'relation'),
    [fields]
  );
  const columnFields = useMemo(
    () => fields.filter((field) => field.kind === 'text' || field.kind === 'localized' || field.kind === 'option'),
    [fields]
  );

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        await ensurePdfTemplateDefinition(client);
        const [listed, productFields] = await Promise.all([
          listPdfTemplates(client),
          loadProductFields(client),
        ]);
        if (cancelled) return;
        if (productFields.length > 0) setFields(productFields);
        setTemplates(listed.map((item) => ({ id: item.id, name: item.name })));
        const currentId = pageEntityId(entity, options);
        const match = listed.find((item) => item.id === currentId) ?? listed[0];
        if (match) {
          const loaded = readTemplate(match.json, match.name);
          setTemplateId(match.id);
          setName(match.name);
          setTemplate(loaded);
          setSelectedId(loaded.layout?.rows[0]?.blocks[0]?.id ?? null);
        }
        setStatus(listed.length > 0 ? `${listed.length} templates.` : 'No templates yet.');
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError instanceof Error ? loadError.message : 'Could not load PDF templates.');
          setStatus('');
        }
      }
    };
    void load();
    return () => {
      cancelled = true;
    };
  }, [client, entity, options]);

  useEffect(() => {
    let cancelled = false;
    const timer = window.setTimeout(() => {
      void renderTemplate(template, sampleProduct as Record<string, unknown>).then((bytes) => {
        if (cancelled) return;
        const copy = new ArrayBuffer(bytes.byteLength);
        new Uint8Array(copy).set(bytes);
        const url = URL.createObjectURL(new Blob([copy], { type: 'application/pdf' }));
        setPreviewUrl((current) => {
          if (current) URL.revokeObjectURL(current);
          return url;
        });
      }).catch((renderError: unknown) => {
        if (!cancelled) setError(renderError instanceof Error ? renderError.message : 'Could not render the template.');
      });
    }, 300);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [template]);

  const openTemplate = async (id: number) => {
    const loaded = await loadPdfTemplate(client, id);
    const parsed = readTemplate(loaded.json, loaded.name);
    setTemplateId(loaded.id);
    setName(loaded.name);
    setTemplate(parsed);
    setSelectedId(parsed.layout?.rows[0]?.blocks[0]?.id ?? null);
    setError('');
  };

  const storeNew = async (nextName: string, nextTemplate: Template, clearSelection: boolean) => {
    const named = structuredClone(nextTemplate);
    named.name = nextName;
    const id = await createPdfTemplate(client, nextName, JSON.stringify(named));
    setTemplates((current) => [...current, { id, name: nextName }]);
    setTemplateId(id);
    setName(nextName);
    setTemplate(named);
    if (clearSelection) setSelectedId(null);
    setStatus('Template created.');
    setError('');
  };

  const createNew = async () => {
    const createdName = 'New PDF template';
    await storeNew(createdName, blankTemplate(createdName), true);
  };

  const save = async () => {
    const nextName = name.trim() || 'PDF template';
    const next = structuredClone(template);
    next.name = nextName;
    if (templateId == null) {
      await storeNew(nextName, next, false);
      return;
    }
    await savePdfTemplate(client, templateId, next.name, JSON.stringify(next));
    setTemplate(next);
    setTemplates((current) => current.map((item) => (item.id === templateId ? { ...item, name: next.name } : item)));
    setStatus('Template saved.');
    setError('');
  };

  const updateSelected = (mutate: (block: FlowBlock) => void) => {
    if (!selected) return;
    const next = structuredClone(template);
    const block = next.layout?.rows[selected.rowIndex]?.blocks.find((item) => item.id === selected.block.id);
    if (!block) return;
    mutate(block);
    setTemplate(next);
  };

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ p: 2, alignItems: 'stretch' }}>
      <Stack spacing={2} sx={{ width: { md: 420 }, flexShrink: 0 }}>
        <Typography variant="h6">PDF template</Typography>
        <Typography variant="body2">
          Create a template and store its name and layout on {`EPAM.PDFTemplate`}.
        </Typography>
        {error ? <Alert severity="error">{error}</Alert> : null}
        {status ? <Typography variant="body2">{status}</Typography> : null}
        <TextField
          select
          label="Template"
          value={templateId ?? ''}
          onChange={(event) => {
            void openTemplate(Number(event.target.value)).catch((openError: unknown) => {
              setError(openError instanceof Error ? openError.message : 'Could not open that template.');
            });
          }}
        >
          {templates.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </TextField>
        <TextField label="Name" value={name} onChange={(event) => setName(event.target.value)} />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" onClick={() => { void save().catch((saveError: unknown) => setError(saveError instanceof Error ? saveError.message : 'Could not save.')); }}>
            Save
          </Button>
          <Button onClick={() => { void createNew().catch((createError: unknown) => setError(createError instanceof Error ? createError.message : 'Could not create a template.')); }}>
            New template
          </Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          {(['text', 'image', 'table', 'list'] as const).map((type) => (
            <Button key={type} variant="outlined" onClick={() => {
              const next = addBlock(template, type);
              setTemplate(next);
              setSelectedId(next.layout?.rows.at(-1)?.blocks[0]?.id ?? null);
            }}>
              {type}
            </Button>
          ))}
        </Stack>
        <Stack spacing={1}>
          {template.layout?.rows.map((row) => (
            <Stack key={row.id} direction="row" spacing={1}>
              {row.blocks.map((block) => (
                <Button
                  key={block.id}
                  variant={block.id === selectedId ? 'contained' : 'text'}
                  onClick={() => setSelectedId(block.id)}
                  sx={{ justifyContent: 'flex-start', textTransform: 'none' }}
                >
                  {block.label} · span {block.span}
                </Button>
              ))}
            </Stack>
          ))}
        </Stack>
        {selected ? (
          <Stack spacing={1}>
            {selected.block.type !== 'table' ? (
              <TextField
                select
                label="Field"
                value={selected.block.binding.path === 'Unbound' ? '' : selected.block.binding.path}
                onChange={(event) => {
                  const field = fields.find((item) => item.path === event.target.value);
                  if (!field) return;
                  updateSelected((block) => {
                    block.label = field.label;
                    if (block.type === 'text' && field.kind === 'relation') {
                      block.binding = { kind: 'relation', path: field.path, property: 'Unbound' };
                    } else if (block.type === 'text' || block.type === 'image') {
                      block.binding = { kind: 'property', path: field.path };
                    } else if (block.type === 'list') {
                      block.binding = { kind: 'repeating', path: field.path };
                    }
                  });
                }}
              >
                <MenuItem value="">Choose a field</MenuItem>
                {(selected.block.type === 'text' ? textFields : fields.filter((field) => field.kind === selected.block.type)).map((field) => (
                  <MenuItem key={field.id} value={field.path}>
                    {field.kind === 'text' ? field.label : `${field.label} (${field.kind})`}
                  </MenuItem>
                ))}
              </TextField>
            ) : null}
            {selected.block.type === 'text' && selected.block.binding.kind === 'relation' ? (
              <TextField
                label="Related property"
                value={selected.block.binding.property === 'Unbound' ? '' : selected.block.binding.property}
                onChange={(event) => {
                  const property = event.target.value.trim();
                  updateSelected((block) => {
                    if (block.type === 'text' && block.binding.kind === 'relation') {
                      block.binding = { ...block.binding, property: property || 'Unbound' };
                    }
                  });
                }}
              />
            ) : null}
            {selected.block.type === 'table' ? (
              <Stack spacing={1}>
                <Typography variant="body2">Columns are product fields. Each chosen field is one cell.</Typography>
                {selected.block.columns.map((column, index) => (
                  <Stack key={`${column.binding.path}-${index}`} direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ flex: 1 }}>{column.header}</Typography>
                    <Button
                      disabled={selected.block.type === 'table' && selected.block.columns.length < 2}
                      onClick={() => updateSelected((block) => {
                        if (block.type === 'table' && block.columns.length > 1) block.columns.splice(index, 1);
                      })}
                    >
                      Remove
                    </Button>
                  </Stack>
                ))}
                <TextField
                  select
                  label="Add column"
                  value=""
                  onChange={(event) => {
                    const field = columnFields.find((item) => item.path === event.target.value);
                    if (!field) return;
                    updateSelected((block) => {
                      if (block.type !== 'table') return;
                      block.columns.push({
                        header: field.label,
                        binding: { kind: 'property', path: field.path },
                        width: 1,
                      });
                    });
                  }}
                >
                  <MenuItem value="">Add a field</MenuItem>
                  {columnFields.map((field) => (
                    <MenuItem key={field.id} value={field.path}>{field.label}</MenuItem>
                  ))}
                </TextField>
              </Stack>
            ) : null}
            <TextField
              label="Span"
              type="number"
              value={selected.block.span}
              onChange={(event) => {
                const span = Math.min(12, Math.max(1, Number(event.target.value) || 1));
                updateSelected((block) => {
                  block.span = span;
                });
              }}
            />
            <Button color="warning" onClick={() => {
              const next = structuredClone(template);
              const row = next.layout?.rows[selected.rowIndex];
              if (!row) return;
              row.blocks = row.blocks.filter((block) => block.id !== selected.block.id);
              if (row.blocks.length === 0) next.layout?.rows.splice(selected.rowIndex, 1);
              setTemplate(next);
              setSelectedId(null);
            }}>
              Delete block
            </Button>
          </Stack>
        ) : (
          <Typography variant="body2">Select a block to choose its fields.</Typography>
        )}
      </Stack>
      <Box sx={{ flex: 1, minHeight: 640, bgcolor: '#d5d5d5' }}>
        {previewUrl ? (
          <iframe title="PDF preview" src={previewUrl} style={{ width: '100%', height: '100%', minHeight: 640, border: 0 }} />
        ) : null}
      </Box>
    </Stack>
  );
}
