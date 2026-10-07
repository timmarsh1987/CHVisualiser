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
import type { FlowBlock, FlowRow, Template } from '../../../pdf-builder/packages/render-core/src/browser';
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

type ContentType = 'text' | 'image' | 'table' | 'list';

const COLUMN_PRESETS: Array<{ label: string; spans: number[] }> = [
  { label: '1 column', spans: [12] },
  { label: '2 columns', spans: [6, 6] },
  { label: '3 columns', spans: [4, 4, 4] },
  { label: '4 columns', spans: [3, 3, 3, 3] },
  { label: '8 + 4', spans: [8, 4] },
  { label: '4 + 8', spans: [4, 8] },
];

function isContentType(value: string): value is ContentType {
  return value === 'text' || value === 'image' || value === 'table' || value === 'list';
}

function spacer(span: number): FlowBlock {
  return { id: newId('slot'), label: 'Empty', type: 'spacer', span };
}

function contentBlock(type: ContentType, span: number): FlowBlock {
  const id = newId('block');
  if (type === 'table') {
    return {
      id,
      label: 'Table',
      type,
      span,
      columns: [{ header: 'ProductName', binding: { kind: 'property', path: 'ProductName' }, width: 1 }],
    };
  }
  if (type === 'list') {
    return { id, label: 'List', type, span, binding: { kind: 'repeating', path: 'Unbound' } };
  }
  return { id, label: type === 'image' ? 'Image' : 'Text', type, span, binding: { kind: 'property', path: 'Unbound' } };
}

function addColumnRow(template: Template, spans: number[]): Template {
  const next = structuredClone(template);
  next.layout?.rows.push({ id: newId('row'), blocks: spans.map((span) => spacer(span)) });
  return next;
}

function findLocation(template: Template, id: string): { rowIndex: number; blockIndex: number } | null {
  const rows = template.layout?.rows ?? [];
  for (const [rowIndex, row] of rows.entries()) {
    const blockIndex = row.blocks.findIndex((block) => block.id === id);
    if (blockIndex >= 0) return { rowIndex, blockIndex };
  }
  return null;
}

function rowSlots(row: FlowRow): Array<{ key: string; span: number; block: FlowBlock | null; index: number | 'end' }> {
  const slots: Array<{ key: string; span: number; block: FlowBlock | null; index: number | 'end' }> = row.blocks.map((block, index) => ({
    key: block.id,
    span: block.span,
    block: block.type === 'spacer' ? null : block,
    index,
  }));
  const used = row.blocks.reduce((sum, block) => sum + block.span, 0);
  if (used < 12) slots.push({ key: `${row.id}-open`, span: 12 - used, block: null, index: 'end' });
  return slots;
}

function placePayload(template: Template, rowIndex: number, index: number | 'end', payload: string): { template: Template; selectedId: string | null } {
  const next = structuredClone(template);
  const rows = next.layout?.rows ?? [];
  const row = rows[rowIndex];
  if (!row) return { template, selectedId: null };
  const used = row.blocks.reduce((sum, block) => sum + block.span, 0);

  if (payload.startsWith('move:')) {
    const from = findLocation(next, payload.slice(5));
    if (!from) return { template, selectedId: null };
    const moving = rows[from.rowIndex]?.blocks[from.blockIndex];
    if (!moving || moving.type === 'spacer') return { template, selectedId: null };
    if (from.rowIndex === rowIndex && (from.blockIndex === index || index === 'end')) {
      return { template, selectedId: moving.id };
    }
    const sourceSpan = moving.span;
    if (index === 'end') {
      if (used >= 12) return { template, selectedId: moving.id };
      rows[from.rowIndex].blocks[from.blockIndex] = spacer(sourceSpan);
      const placed = { ...moving, span: 12 - used };
      row.blocks.push(placed);
      return { template: next, selectedId: placed.id };
    }
    const target = row.blocks[index];
    if (!target) return { template, selectedId: moving.id };
    const targetSpan = target.span;
    row.blocks[index] = { ...moving, span: targetSpan };
    rows[from.rowIndex].blocks[from.blockIndex] =
      target.type === 'spacer' ? spacer(sourceSpan) : { ...target, span: sourceSpan };
    return { template: next, selectedId: moving.id };
  }

  if (!payload.startsWith('new:')) return { template, selectedId: null };
  const type = payload.slice(4);
  if (!isContentType(type)) return { template, selectedId: null };
  if (index === 'end') {
    if (used >= 12) return { template, selectedId: null };
    const placed = contentBlock(type, 12 - used);
    row.blocks.push(placed);
    return { template: next, selectedId: placed.id };
  }
  const target = row.blocks[index];
  if (!target || target.type !== 'spacer') return { template, selectedId: null };
  const placed = contentBlock(type, target.span);
  row.blocks[index] = placed;
  return { template: next, selectedId: placed.id };
}

function reorderRow(template: Template, fromIndex: number, toIndex: number): Template {
  const next = structuredClone(template);
  const rows = next.layout?.rows ?? [];
  if (!rows[fromIndex] || fromIndex === toIndex) return template;
  const [row] = rows.splice(fromIndex, 1);
  if (!row) return template;
  const destination = fromIndex < toIndex ? toIndex - 1 : toIndex;
  rows.splice(destination, 0, row);
  return next;
}

function moveRow(template: Template, rowIndex: number, direction: -1 | 1): Template {
  const next = structuredClone(template);
  const rows = next.layout?.rows ?? [];
  const target = rowIndex + direction;
  const current = rows[rowIndex];
  const swap = rows[target];
  if (!current || !swap) return template;
  rows[rowIndex] = swap;
  rows[target] = current;
  return next;
}

function LayoutBoard({
  template,
  selectedId,
  dropTarget,
  onSelect,
  onDropTarget,
  onAddRow,
  onPlace,
  onMoveRow,
  onRemoveRow,
  onReorderRow,
}: {
  template: Template;
  selectedId: string | null;
  dropTarget: string | null;
  onSelect: (id: string) => void;
  onDropTarget: (id: string | null) => void;
  onAddRow: (spans: number[]) => void;
  onPlace: (rowIndex: number, index: number | 'end', payload: string) => void;
  onMoveRow: (rowIndex: number, direction: -1 | 1) => void;
  onRemoveRow: (rowIndex: number) => void;
  onReorderRow: (fromIndex: number, toIndex: number) => void;
}) {
  const rows = template.layout?.rows ?? [];
  const readPayload = (event: React.DragEvent): string => event.dataTransfer.getData('text/plain');
  return (
    <Stack spacing={1.5} sx={{ p: 2, bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
      <Typography variant="subtitle1">Page layout</Typography>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {COLUMN_PRESETS.map((preset) => (
          <Button key={preset.label} size="small" variant="outlined" onClick={() => onAddRow(preset.spans)}>
            {preset.label}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
        {(['text', 'image', 'table', 'list'] as const).map((type) => (
          <Box
            key={type}
            component="button"
            type="button"
            draggable
            onDragStart={(event) => {
              event.dataTransfer.setData('text/plain', `new:${type}`);
              event.dataTransfer.effectAllowed = 'copy';
            }}
            sx={{
              px: 1.5,
              py: 1,
              border: 1,
              borderColor: 'primary.main',
              borderRadius: 1,
              bgcolor: 'background.paper',
              color: 'primary.main',
              cursor: 'grab',
              textTransform: 'capitalize',
            }}
          >
            {type}
          </Box>
        ))}
      </Stack>
      {rows.length === 0 ? (
        <Typography variant="body2">Add a column layout, then drag text, image, table, or list into a column.</Typography>
      ) : null}
      {rows.map((row, rowIndex) => (
        <Box
          key={row.id}
          onDragOver={(event) => {
            event.preventDefault();
            onDropTarget(row.id);
          }}
          onDrop={(event) => {
            const payload = readPayload(event);
            if (!payload.startsWith('row:')) return;
            event.preventDefault();
            const fromIndex = Number(payload.slice(4));
            if (Number.isInteger(fromIndex) && fromIndex !== rowIndex) onReorderRow(fromIndex, rowIndex);
            onDropTarget(null);
          }}
          sx={{
            p: 1,
            border: 1,
            borderColor: dropTarget === row.id ? 'primary.main' : 'divider',
            borderRadius: 1,
          }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1 }}>
            <Box
              component="button"
              type="button"
              draggable
              aria-label={`Drag row ${rowIndex + 1}`}
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', `row:${rowIndex}`);
                event.dataTransfer.effectAllowed = 'move';
              }}
              sx={{ border: 0, bgcolor: 'transparent', cursor: 'grab', color: 'text.secondary', px: 0.5 }}
            >
              Row {rowIndex + 1}
            </Box>
            <Button size="small" disabled={rowIndex === 0} onClick={() => onMoveRow(rowIndex, -1)}>Up</Button>
            <Button size="small" disabled={rowIndex === rows.length - 1} onClick={() => onMoveRow(rowIndex, 1)}>Down</Button>
            <Button size="small" color="warning" onClick={() => onRemoveRow(rowIndex)}>Remove row</Button>
          </Stack>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: rowSlots(row).map((slot) => `${slot.span}fr`).join(' '),
              gap: 1,
            }}
          >
            {rowSlots(row).map((slot) => {
              const active = dropTarget === slot.key;
              return (
                <Box
                  key={slot.key}
                  onDragOver={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    onDropTarget(slot.key);
                  }}
                  onDragLeave={() => {
                    if (dropTarget === slot.key) onDropTarget(null);
                  }}
                  onDrop={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    const payload = readPayload(event);
                    if (payload.startsWith('row:')) {
                      const fromIndex = Number(payload.slice(4));
                      if (Number.isInteger(fromIndex) && fromIndex !== rowIndex) onReorderRow(fromIndex, rowIndex);
                      return;
                    }
                    onPlace(rowIndex, slot.index, payload);
                    onDropTarget(null);
                  }}
                  sx={{
                    minHeight: 84,
                    p: 1,
                    border: '1px dashed',
                    borderColor: active ? 'primary.main' : 'divider',
                    borderRadius: 1,
                    bgcolor: active ? 'action.hover' : 'background.default',
                  }}
                >
                  {slot.block ? (
                    <Box
                      component="button"
                      type="button"
                      draggable
                      onClick={() => onSelect(slot.block?.id ?? '')}
                      onDragStart={(event) => {
                        event.stopPropagation();
                        event.dataTransfer.setData('text/plain', `move:${slot.block?.id ?? ''}`);
                        event.dataTransfer.effectAllowed = 'move';
                      }}
                      sx={{
                        width: '100%',
                        minHeight: 68,
                        border: 0,
                        borderRadius: 1,
                        cursor: 'grab',
                        textAlign: 'left',
                        px: 1,
                        bgcolor: slot.block.id === selectedId ? 'primary.main' : 'action.selected',
                        color: slot.block.id === selectedId ? 'primary.contrastText' : 'text.primary',
                      }}
                    >
                      <strong>{slot.block.label}</strong>
                      <span style={{ display: 'block' }}>{slot.block.type}</span>
                    </Box>
                  ) : (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Drop here</Typography>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Stack>
  );
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
  const [dropTarget, setDropTarget] = useState<string | null>(null);

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
          setSelectedId(loaded.layout?.rows.flatMap((row) => row.blocks).find((block) => block.type !== 'spacer')?.id ?? null);
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
    setSelectedId(parsed.layout?.rows.flatMap((row) => row.blocks).find((block) => block.type !== 'spacer')?.id ?? null);
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
        <Typography variant="body2">Choose a column layout on the page, then drag a block into a column.</Typography>
        {selected && selected.block.type !== 'spacer' ? (
          <Stack spacing={1}>
            {selected.block.type === 'text' || selected.block.type === 'image' || selected.block.type === 'list' ? (
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
            <Button color="warning" onClick={() => {
              const next = structuredClone(template);
              const row = next.layout?.rows[selected.rowIndex];
              const block = row?.blocks.find((item) => item.id === selected.block.id);
              if (!row || !block) return;
              const index = row.blocks.indexOf(block);
              row.blocks[index] = spacer(block.span);
              setTemplate(next);
              setSelectedId(null);
            }}>
              Clear column
            </Button>
          </Stack>
        ) : (
          <Typography variant="body2">Select a block to choose its fields.</Typography>
        )}
      </Stack>
      <Stack spacing={2} sx={{ flex: 1, minWidth: 0 }}>
        <LayoutBoard
          template={template}
          selectedId={selectedId}
          dropTarget={dropTarget}
          onSelect={setSelectedId}
          onDropTarget={setDropTarget}
          onAddRow={(spans) => setTemplate(addColumnRow(template, spans))}
          onPlace={(rowIndex, index, payload) => {
            const placed = placePayload(template, rowIndex, index, payload);
            setTemplate(placed.template);
            if (placed.selectedId) setSelectedId(placed.selectedId);
          }}
          onMoveRow={(rowIndex, direction) => setTemplate(moveRow(template, rowIndex, direction))}
          onReorderRow={(fromIndex, toIndex) => setTemplate(reorderRow(template, fromIndex, toIndex))}
          onRemoveRow={(rowIndex) => {
            const next = structuredClone(template);
            const removed = next.layout?.rows.splice(rowIndex, 1) ?? [];
            if (removed.some((row) => row.blocks.some((block) => block.id === selectedId))) setSelectedId(null);
            setTemplate(next);
          }}
        />
        <Box sx={{ flex: 1, minHeight: 640, bgcolor: '#d5d5d5' }}>
          {previewUrl ? (
            <iframe title="PDF preview" src={previewUrl} style={{ width: '100%', height: '100%', minHeight: 640, border: 0 }} />
          ) : null}
        </Box>
      </Stack>
    </Stack>
  );
}
