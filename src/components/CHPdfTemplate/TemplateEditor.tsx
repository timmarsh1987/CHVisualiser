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

type LeafBlock = Exclude<FlowBlock, { type: 'stack' }>;

function columnLeaves(block: FlowBlock | null): LeafBlock[] {
  if (!block || block.type === 'spacer') return [];
  if (block.type === 'stack') return block.items;
  return [block];
}

function writeColumn(row: FlowRow, columnIndex: number, items: LeafBlock[]): void {
  const span = row.blocks[columnIndex]?.span ?? 12;
  const kept = items.filter((item): item is Exclude<LeafBlock, { type: 'spacer' }> => item.type !== 'spacer');
  if (kept.length === 0) {
    row.blocks[columnIndex] = spacer(span);
    return;
  }
  if (kept.length === 1) {
    const [only] = kept;
    if (only) row.blocks[columnIndex] = { ...only, span };
    return;
  }
  const existing = row.blocks[columnIndex];
  row.blocks[columnIndex] = {
    id: existing?.type === 'stack' ? existing.id : newId('stack'),
    label: 'Stack',
    type: 'stack',
    span,
    items: kept.map((item) => ({ ...item, span })),
  };
}

function findBlock(template: Template, id: string | null): { rowIndex: number; block: FlowBlock } | null {
  const rows = template.layout?.rows ?? [];
  for (const [rowIndex, row] of rows.entries()) {
    for (const block of row.blocks) {
      if (block.type === 'stack') {
        const child = block.items.find((item) => item.id === id);
        if (child) return { rowIndex, block: child };
      } else if (block.id === id) {
        return { rowIndex, block };
      }
    }
  }
  return null;
}

function firstContentId(template: Template): string | null {
  for (const row of template.layout?.rows ?? []) {
    for (const block of row.blocks) {
      const leaf = columnLeaves(block)[0];
      if (leaf) return leaf.id;
    }
  }
  return null;
}

type ContentType = 'text' | 'image' | 'table' | 'list';

const COLUMN_PRESETS: Array<{ label: string; spans: number[] }> = [
  { label: '1 column', spans: [12] },
  { label: '2 columns', spans: [6, 6] },
  { label: '3 columns', spans: [4, 4, 4] },
  { label: '4 columns', spans: [3, 3, 3, 3] },
  { label: '2/3 + 1/3', spans: [8, 4] },
  { label: '1/3 + 2/3', spans: [4, 8] },
];

const PALETTE: Array<{ type: ContentType; label: string }> = [
  { type: 'text', label: 'Text' },
  { type: 'image', label: 'Image' },
  { type: 'table', label: 'Table' },
  { type: 'list', label: 'List' },
];

function EditorFieldset({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box
      component="fieldset"
      sx={{
        m: 0,
        px: 1.5,
        pt: 1,
        pb: 1.5,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
      }}
    >
      <Box component="legend" sx={{ px: 0.75, fontSize: 13, fontWeight: 600, color: 'text.secondary' }}>
        {title}
      </Box>
      {children}
    </Box>
  );
}

function ComponentMark({ type }: { type: ContentType }) {
  const shared = { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, 'aria-hidden': true };
  if (type === 'image') {
    return (
      <Box component="svg" {...shared}>
        <rect x="2.5" y="3.5" width="13" height="11" rx="1" />
        <path d="M2.5 11.5l3.2-3 2.3 2.2 2.4-2.6 5.1 4.4" />
      </Box>
    );
  }
  if (type === 'table') {
    return (
      <Box component="svg" {...shared}>
        <rect x="2.5" y="3.5" width="13" height="11" rx="1" />
        <path d="M2.5 7.5h13M2.5 11h13M7.5 3.5v11" />
      </Box>
    );
  }
  if (type === 'list') {
    return (
      <Box component="svg" {...shared}>
        <path d="M6 5h9.5M6 9h9.5M6 13h9.5" />
        <circle cx="3.5" cy="5" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="3.5" cy="9" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="3.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
      </Box>
    );
  }
  return (
    <Box component="svg" {...shared}>
      <path d="M3 4.5h12M3 9h12M3 13.5h8" />
    </Box>
  );
}

function isContentType(value: string): value is ContentType {
  return value === 'text' || value === 'image' || value === 'table' || value === 'list';
}

function spacer(span: number): FlowBlock {
  return { id: newId('slot'), label: 'Empty', type: 'spacer', span };
}

function contentBlock(type: ContentType, span: number): LeafBlock {
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

function findLocation(template: Template, id: string): { rowIndex: number; blockIndex: number; itemIndex: number | null } | null {
  const rows = template.layout?.rows ?? [];
  for (const [rowIndex, row] of rows.entries()) {
    for (const [blockIndex, block] of row.blocks.entries()) {
      if (block.type === 'stack') {
        const itemIndex = block.items.findIndex((item) => item.id === id);
        if (itemIndex >= 0) return { rowIndex, blockIndex, itemIndex };
      } else if (block.id === id) {
        return { rowIndex, blockIndex, itemIndex: null };
      }
    }
  }
  return null;
}

function takeLeaf(row: FlowRow, blockIndex: number, itemIndex: number | null): LeafBlock | null {
  const column = row.blocks[blockIndex];
  if (!column || column.type === 'spacer') return null;
  if (column.type === 'stack') {
    const index = itemIndex ?? 0;
    const item = column.items[index];
    if (!item) return null;
    writeColumn(row, blockIndex, column.items.filter((_, item) => item !== index));
    return item;
  }
  row.blocks[blockIndex] = spacer(column.span);
  return column;
}

function addToColumn(row: FlowRow, columnIndex: number, block: LeafBlock): void {
  if (block.type === 'spacer') return;
  const column = row.blocks[columnIndex];
  if (!column) return;
  const items: LeafBlock[] = column.type === 'spacer' ? [] : column.type === 'stack' ? [...column.items] : [column];
  items.push(block);
  writeColumn(row, columnIndex, items);
}

function removeItem(template: Template, id: string): Template {
  const next = structuredClone(template);
  const located = findLocation(next, id);
  if (!located || !next.layout) return template;
  const row = next.layout.rows[located.rowIndex];
  const column = row?.blocks[located.blockIndex];
  if (!row || !column) return template;
  if (column.type === 'stack') {
    writeColumn(row, located.blockIndex, column.items.filter((item) => item.id !== id));
  } else {
    row.blocks[located.blockIndex] = spacer(column.span);
  }
  return next;
}

function structureText(block: LeafBlock): string {
  if (block.type === 'table') {
    const names = block.columns.map((column) => column.header).filter((header) => header.length > 0);
    return names.length > 0 ? names.join(', ') : 'Table';
  }
  if (block.type === 'spacer') return 'Empty';
  if (block.binding.path !== 'Unbound') {
    if (block.type === 'text' && block.binding.kind === 'relation' && block.binding.property !== 'Unbound') {
      return `${block.label} (${block.binding.property})`;
    }
    return block.label;
  }
  if (block.type === 'image') return 'Image';
  if (block.type === 'list') return 'List';
  return 'Text';
}

function choicesFor(block: LeafBlock, fields: CatalogField[]): CatalogField[] {
  if (block.type === 'text') {
    return fields.filter((field) => field.kind === 'text' || field.kind === 'localized' || field.kind === 'option' || field.kind === 'relation');
  }
  if (block.type === 'image' || block.type === 'list') return fields.filter((field) => field.kind === block.type);
  return [];
}

function applyCatalogField(block: FlowBlock, field: CatalogField): void {
  if (block.type !== 'text' && block.type !== 'image' && block.type !== 'list') return;
  block.label = field.label;
  if (block.type === 'text' && field.kind === 'relation') {
    const property = block.binding.kind === 'relation' ? block.binding.property : 'Unbound';
    block.binding = { kind: 'relation', path: field.path, property };
  } else if (block.type === 'text' || block.type === 'image') {
    block.binding = { kind: 'property', path: field.path };
  } else {
    block.binding = { kind: 'repeating', path: field.path };
  }
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

function columnIndexFor(row: FlowRow, index: number | 'end'): number {
  if (index !== 'end') return index;
  const open = row.blocks.findIndex((block) => block.type === 'spacer');
  if (open >= 0) return open;
  const filled = row.blocks.findIndex((block) => block.type !== 'spacer');
  return filled >= 0 ? filled : 0;
}

function placePayload(template: Template, rowIndex: number, index: number | 'end', payload: string): { template: Template; selectedId: string | null } {
  const next = structuredClone(template);
  const rows = next.layout?.rows ?? [];
  const row = rows[rowIndex];
  if (!row) return { template, selectedId: null };

  if (payload.startsWith('move:')) {
    const from = findLocation(next, payload.slice(5));
    if (!from) return { template, selectedId: null };
    const columnIndex = columnIndexFor(row, index);
    if (from.rowIndex === rowIndex && from.blockIndex === columnIndex) {
      const staying = rows[from.rowIndex]?.blocks[from.blockIndex];
      const leafId = from.itemIndex != null && staying?.type === 'stack' ? staying.items[from.itemIndex]?.id : staying?.id;
      return { template, selectedId: leafId ?? null };
    }
    const sourceRow = rows[from.rowIndex];
    if (!sourceRow) return { template, selectedId: null };
    const moving = takeLeaf(sourceRow, from.blockIndex, from.itemIndex);
    if (!moving || moving.type === 'spacer') return { template, selectedId: null };
    addToColumn(row, columnIndex, moving);
    return { template: next, selectedId: moving.id };
  }

  if (!payload.startsWith('new:')) return { template, selectedId: null };
  const type = payload.slice(4);
  if (!isContentType(type)) return { template, selectedId: null };
  const columnIndex = columnIndexFor(row, index);
  const placed = contentBlock(type, row.blocks[columnIndex]?.span ?? 12);
  addToColumn(row, columnIndex, placed);
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
  onClear,
  fields,
  onAssignField,
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
  onClear: (blockId: string) => void;
  fields: CatalogField[];
  onAssignField: (blockId: string, path: string) => void;
}) {
  const rows = template.layout?.rows ?? [];
  const readPayload = (event: React.DragEvent): string => event.dataTransfer.getData('text/plain');
  return (
    <Stack spacing={1.5} sx={{ p: 2, bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
      <Typography variant="subtitle1">Page layout</Typography>
      <EditorFieldset title="Add new row">
        <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
          {COLUMN_PRESETS.map((preset) => (
            <Button key={preset.label} size="small" variant="outlined" onClick={() => onAddRow(preset.spans)}>
              {preset.label}
            </Button>
          ))}
        </Stack>
      </EditorFieldset>
      <EditorFieldset title="Available components">
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
          {PALETTE.map((item) => (
            <Box
              key={item.type}
              component="button"
              type="button"
              draggable
              aria-label={item.label}
              onDragStart={(event) => {
                event.dataTransfer.setData('text/plain', `new:${item.type}`);
                event.dataTransfer.effectAllowed = 'copy';
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '100%',
                px: 1,
                py: 0.75,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                bgcolor: 'grey.50',
                color: 'text.primary',
                textAlign: 'left',
                cursor: 'grab',
                '&:hover': { borderColor: 'primary.main', bgcolor: 'action.hover' },
                '&:active': { cursor: 'grabbing' },
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                  borderRadius: 0.75,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  color: 'primary.main',
                }}
              >
                <ComponentMark type={item.type} />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.2 }}>{item.label}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', lineHeight: 1.2 }}>Drag onto a column</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </EditorFieldset>
      <Typography variant="body2">Drop a block onto an item to add another one underneath it.</Typography>
      {rows.map((row, rowIndex) => (
        <Box
          key={row.id}
          onDragOver={(event) => {
            event.preventDefault();
            onDropTarget(row.id);
          }}
          onDrop={(event) => {
            const payload = readPayload(event);
            event.preventDefault();
            if (payload.startsWith('row:')) {
              const fromIndex = Number(payload.slice(4));
              if (Number.isInteger(fromIndex) && fromIndex !== rowIndex) onReorderRow(fromIndex, rowIndex);
            } else if (payload.startsWith('new:') || payload.startsWith('move:')) {
              onPlace(rowIndex, 'end', payload);
            }
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
                    position: 'relative',
                    minHeight: 84,
                    p: 1,
                    border: '1px dashed',
                    borderColor: active ? 'primary.main' : 'divider',
                    borderRadius: 1,
                    bgcolor: active ? 'action.hover' : 'background.default',
                  }}
                >
                  {columnLeaves(slot.block).length > 0 ? (
                    <Stack spacing={1}>
                      {columnLeaves(slot.block).map((item) => (
                        <Box
                          key={item.id}
                          sx={{
                            position: 'relative',
                            p: 1,
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: item.id === selectedId ? 'primary.main' : 'divider',
                          }}
                        >
                          <Box
                            component="button"
                            type="button"
                            draggable
                            onClick={() => onSelect(item.id)}
                            onDragStart={(event) => {
                              event.stopPropagation();
                              event.dataTransfer.setData('text/plain', `move:${item.id}`);
                              event.dataTransfer.effectAllowed = 'move';
                            }}
                            sx={{
                              width: '100%',
                              border: 0,
                              bgcolor: 'transparent',
                              cursor: 'grab',
                              textAlign: 'left',
                              pr: 3,
                              color: 'text.primary',
                            }}
                          >
                            <Typography variant="caption" sx={{ display: 'block', textTransform: 'capitalize', color: 'text.secondary' }}>
                              {item.type}
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 700 }}>{structureText(item)}</Typography>
                          </Box>
                          {item.type === 'text' || item.type === 'image' || item.type === 'list' ? (
                            <TextField
                              select
                              size="small"
                              fullWidth
                              label="Field"
                              value={item.binding.path === 'Unbound' ? '' : item.binding.path}
                              onMouseDown={(event) => event.stopPropagation()}
                              onClick={(event) => {
                                event.stopPropagation();
                                onSelect(item.id);
                              }}
                              onChange={(event) => onAssignField(item.id, event.target.value)}
                              sx={{ mt: 1 }}
                            >
                              <MenuItem value="">Choose a field</MenuItem>
                              {choicesFor(item, fields).map((field) => (
                                <MenuItem key={field.id} value={field.path}>
                                  {field.kind === 'text' ? field.label : `${field.label} (${field.kind})`}
                                </MenuItem>
                              ))}
                            </TextField>
                          ) : null}
                          <Box
                            component="button"
                            type="button"
                            aria-label={`Remove ${item.label}`}
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                              onClear(item.id);
                            }}
                            sx={{
                              position: 'absolute',
                              top: 4,
                              right: 4,
                              width: 22,
                              height: 22,
                              p: 0,
                              border: 0,
                              borderRadius: 0.5,
                              cursor: 'pointer',
                              lineHeight: '22px',
                              bgcolor: 'transparent',
                              color: 'text.primary',
                            }}
                          >
                            ×
                          </Box>
                        </Box>
                      ))}
                    </Stack>
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

function PageStructure({ template }: { template: Template }) {
  const rows = template.layout?.rows ?? [];
  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', border: 1, borderColor: 'divider' }}>
    <EditorFieldset title="Page structure">
      {rows.length === 0 ? (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>Add a row to see the page as text.</Typography>
      ) : (
        <Stack spacing={1}>
          {rows.map((row) => (
            <Box
              key={row.id}
              sx={{
                display: 'grid',
                gridTemplateColumns: rowSlots(row).map((slot) => `${slot.span}fr`).join(' '),
                gap: 1,
              }}
            >
              {rowSlots(row).map((slot) => {
                const items = columnLeaves(slot.block);
                return (
                  <Box key={slot.key} sx={{ minHeight: 40, px: 1, py: 0.75, bgcolor: 'grey.50', borderRadius: 1 }}>
                    {items.length === 0 ? (
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>Empty</Typography>
                    ) : items.map((item) => (
                      <Typography key={item.id} variant="body2">{structureText(item)}</Typography>
                    ))}
                  </Box>
                );
              })}
            </Box>
          ))}
        </Stack>
      )}
    </EditorFieldset>
    </Box>
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
  const [baseline, setBaseline] = useState<{ name: string; template: Template; templateId: number | null } | null>(null);

  const remember = (nextName: string, nextTemplate: Template, nextId: number | null) => {
    setBaseline({ name: nextName, template: structuredClone(nextTemplate), templateId: nextId });
  };

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
          setBaseline({ name: match.name, template: structuredClone(loaded), templateId: match.id });
          setSelectedId(firstContentId(loaded));
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
    remember(loaded.name, parsed, loaded.id);
    setSelectedId(firstContentId(parsed));
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
    remember(nextName, named, id);
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
    setName(nextName);
    remember(nextName, next, templateId);
    setTemplates((current) => current.map((item) => (item.id === templateId ? { ...item, name: next.name } : item)));
    setStatus('Template saved.');
    setError('');
  };

  const cancel = () => {
    if (!baseline) {
      const blank = blankTemplate('New PDF template');
      setName(blank.name);
      setTemplate(blank);
      setTemplateId(null);
      setSelectedId(null);
    } else {
      setName(baseline.name);
      setTemplate(structuredClone(baseline.template));
      setTemplateId(baseline.templateId);
      setSelectedId(firstContentId(baseline.template));
    }
    setError('');
    setStatus('Changes discarded.');
  };

  const assignField = (blockId: string, path: string) => {
    const field = fields.find((item) => item.path === path);
    if (!field) return;
    const next = structuredClone(template);
    const located = findLocation(next, blockId);
    const column = located && next.layout ? next.layout.rows[located.rowIndex]?.blocks[located.blockIndex] : null;
    if (!located || !column) return;
    const target = located.itemIndex != null && column.type === 'stack' ? column.items[located.itemIndex] : column;
    if (!target) return;
    applyCatalogField(target, field);
    setTemplate(next);
    setSelectedId(blockId);
  };

  const updateSelected = (mutate: (block: FlowBlock) => void) => {
    if (!selected) return;
    const next = structuredClone(template);
    const located = findLocation(next, selected.block.id);
    const column = located && next.layout ? next.layout.rows[located.rowIndex]?.blocks[located.blockIndex] : null;
    if (!located || !column) return;
    if (located.itemIndex != null && column.type === 'stack') {
      const item = column.items[located.itemIndex];
      if (!item) return;
      mutate(item);
    } else {
      mutate(column);
    }
    setTemplate(next);
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gridTemplateRows: 'auto minmax(640px, 1fr)',
        gap: 2,
        p: 2,
        alignItems: 'stretch',
        minHeight: '100%',
      }}
    >
      <Stack spacing={2}>
        <Button onClick={() => { void createNew().catch((createError: unknown) => setError(createError instanceof Error ? createError.message : 'Could not create a template.')); }}>
          Create template
        </Button>
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
      </Stack>
      <Stack direction="row" spacing={1} sx={{ justifyContent: 'flex-end', alignItems: 'flex-start' }}>
        <Button variant="contained" onClick={() => { void save().catch((saveError: unknown) => setError(saveError instanceof Error ? saveError.message : 'Could not save.')); }}>
          Save
        </Button>
        <Button onClick={cancel}>Cancel</Button>
      </Stack>
      <Stack spacing={2} sx={{ minWidth: 0 }}>
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
            if (removed.some((row) => row.blocks.some((block) => block.id === selectedId || (block.type === 'stack' && block.items.some((item) => item.id === selectedId))))) {
              setSelectedId(null);
            }
            setTemplate(next);
          }}
          onClear={(blockId) => {
            setTemplate(removeItem(template, blockId));
            if (selectedId === blockId) setSelectedId(null);
          }}
          fields={fields}
          onAssignField={assignField}
        />
        {selected && selected.block.type !== 'spacer' ? (
          <Stack spacing={1}>
            {selected.block.type === 'text' || selected.block.type === 'image' || selected.block.type === 'list' ? (
              <TextField
                select
                label="Field"
                value={selected.block.binding.path === 'Unbound' ? '' : selected.block.binding.path}
                onChange={(event) => assignField(selected.block.id, event.target.value)}
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
              setTemplate(removeItem(template, selected.block.id));
              setSelectedId(null);
            }}>
              Clear column
            </Button>
          </Stack>
        ) : (
          <Typography variant="body2">Select a block to choose its fields.</Typography>
        )}
        <PageStructure template={template} />
      </Stack>
      <Box sx={{ minHeight: 640, height: '100%', bgcolor: '#d5d5d5' }}>
        {previewUrl ? (
          <iframe title="PDF preview" src={previewUrl} style={{ width: '100%', height: '100%', minHeight: 640, border: 0 }} />
        ) : null}
      </Box>
    </Box>
  );
}
