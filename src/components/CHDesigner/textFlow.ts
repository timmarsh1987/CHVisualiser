import { createLayerId } from './document';
import { appendBlankTemplatePage, syncActiveTemplatePage } from './templateSettings';
import type { DesignerDocument, DesignerTemplatePage, Layer } from './types';

const MAX_CONTINUATIONS = 12;

export function storySource(doc: DesignerDocument, layer: Layer): Layer {
  if (!layer.continuesFrom) return layer;
  const pages = doc.pages ?? [];
  for (const page of pages) {
    const found = page.layers.find((item) => item.id === layer.continuesFrom);
    if (found) return found;
  }
  return doc.layers.find((item) => item.id === layer.continuesFrom) ?? layer;
}

export function scaleFontWithBox(before: Layer, after: Layer, patch: Partial<Layer>): Layer {
  if (after.type !== 'text' || !after.dynamicSize || after.continuesFrom) return after;
  if (typeof patch.fontSize === 'number') return after;
  const widthChanged = Math.abs(after.width - before.width) > 0.5;
  const heightChanged = Math.abs(after.height - before.height) > 0.5;
  if (!widthChanged && !heightChanged) return after;
  const widthScale = before.width > 0 ? after.width / before.width : 1;
  const heightScale = before.height > 0 ? after.height / before.height : 1;
  const scale =
    widthChanged && heightChanged ? Math.sqrt(widthScale * heightScale) : heightChanged ? heightScale : widthScale;
  return {
    ...after,
    fontSize: Math.max(1, Math.round((before.fontSize || 16) * scale)),
  };
}

export function displayedText(layer: Layer): string {
  return layer.flowText !== undefined ? layer.flowText : layer.text || '';
}

export function reflowTextStory(doc: DesignerDocument, layerId: string): DesignerDocument {
  if (typeof document === 'undefined' || typeof document.createElement !== 'function') return doc;

  const synced = syncActiveTemplatePage(doc);
  const originalPageCount = synced.pages?.length ?? 0;
  const working = originalPageCount > 0 ? synced : ensureSinglePage(synced);
  const pages = working.pages!.map((page) => ({
    ...page,
    layers: page.layers.map((layer) => ({ ...layer })),
  }));
  const activePageId = working.activePageId || pages[0].id;

  const located = findLayer(pages, layerId);
  if (!located || located.layer.type !== 'text') return doc;
  const startId = located.layer.continuesFrom || located.layer.id;
  const startRef = findLayer(pages, startId);
  if (!startRef || startRef.layer.type !== 'text') return doc;
  const start = startRef.layer;

  if (!start.flowOverflow) {
    start.flowText = undefined;
    stripContinuations(pages, start.id);
    return commit(working, pages, activePageId, originalPageCount);
  }

  const probe = createProbe();
  try {
    let rest = start.text || '';
    const head = fitText(probe, rest, start);
    start.flowText = head.rest ? head.fit : undefined;
    rest = head.rest;

    const startPageIndex = pages.findIndex((page) => page.layers.some((layer) => layer.id === start.id));
    let pageIndex = startPageIndex;
    let guard = 0;
    while (rest && guard < MAX_CONTINUATIONS) {
      guard += 1;
      const nextIndex = pageIndex + 1;
      if (nextIndex >= pages.length) {
        const expanded = appendBlankTemplatePage(commit(working, pages, activePageId, pages.length));
        const added = expanded.pages?.[expanded.pages.length - 1];
        if (!added) break;
        pages.push({ ...added, layers: [] });
      }
      const page = pages[nextIndex];
      if (!page) break;
      const found = page.layers.find((layer) => layer.continuesFrom === start.id);
      const continuation = found ?? createContinuation(start, page);
      if (!found) page.layers = [...page.layers, continuation];
      continuation.fontSize = start.fontSize;
      continuation.color = start.color;
      continuation.direction = start.direction;
      let piece = fitText(probe, rest, continuation);
      if (!piece.fit && continuation.height < page.height - 48) {
        continuation.height = Math.max(continuation.height, page.height - continuation.y - 24);
        piece = fitText(probe, rest, continuation);
      }
      if (!piece.fit) {
        page.layers = page.layers.filter((layer) => layer.id !== continuation.id);
        break;
      }
      continuation.flowText = piece.fit;
      continuation.text = piece.fit;
      rest = piece.rest;
      pageIndex = nextIndex;
    }

    for (let index = 0; index < pages.length; index += 1) {
      if (index <= startPageIndex || index > pageIndex) {
        pages[index].layers = pages[index].layers.filter((layer) => layer.continuesFrom !== start.id);
      }
    }
  } finally {
    probe.remove();
  }

  while (
    pages.length > Math.max(originalPageCount, 1) &&
    pages[pages.length - 1].layers.length === 0
  ) {
    pages.pop();
  }

  return commit(working, pages, activePageId, originalPageCount);
}

function ensureSinglePage(doc: DesignerDocument): DesignerDocument {
  const id = doc.activePageId || 'page-current';
  return {
    ...doc,
    activePageId: id,
    pages: [
      {
        id,
        name: 'Page 1',
        width: doc.canvas.width,
        height: doc.canvas.height,
        layers: doc.layers.map((layer) => ({ ...layer })),
      },
    ],
  };
}

function commit(
  doc: DesignerDocument,
  pages: DesignerTemplatePage[],
  activePageId: string,
  originalPageCount: number
): DesignerDocument {
  const active = pages.find((page) => page.id === activePageId) ?? pages[0];
  const next: DesignerDocument = {
    ...doc,
    layers: active?.layers ?? doc.layers,
  };
  if (originalPageCount > 0 || pages.length > 1) {
    next.pages = pages;
    next.activePageId = active?.id ?? activePageId;
  } else {
    delete next.pages;
    delete next.activePageId;
  }
  return next;
}

function findLayer(
  pages: DesignerTemplatePage[],
  id: string
): { page: DesignerTemplatePage; layer: Layer } | null {
  for (const page of pages) {
    const layer = page.layers.find((item) => item.id === id);
    if (layer) return { page, layer };
  }
  return null;
}

function stripContinuations(pages: DesignerTemplatePage[], startId: string) {
  for (const page of pages) {
    page.layers = page.layers.filter((layer) => layer.continuesFrom !== startId);
  }
}

function createContinuation(start: Layer, page: DesignerTemplatePage): Layer {
  const y = 24;
  const height = Math.max(48, page.height - y - 24);
  return {
    id: createLayerId(),
    type: 'text',
    name: `${start.name} continued`,
    x: start.x,
    y,
    width: start.width,
    height,
    visible: true,
    locked: false,
    allowTransform: Boolean(start.allowTransform),
    editableContent: true,
    text: '',
    flowText: '',
    fontSize: start.fontSize,
    color: start.color,
    direction: start.direction,
    continuesFrom: start.id,
    role: start.role === 'text' ? 'text' : undefined,
  };
}

function createProbe(): HTMLDivElement {
  const probe = document.createElement('div');
  probe.setAttribute('aria-hidden', 'true');
  probe.style.position = 'absolute';
  probe.style.left = '-10000px';
  probe.style.top = '0';
  probe.style.visibility = 'hidden';
  probe.style.boxSizing = 'border-box';
  probe.style.height = 'auto';
  probe.style.padding = '4px 6px';
  probe.style.whiteSpace = 'pre-wrap';
  probe.style.wordBreak = 'break-word';
  probe.style.lineHeight = '1.25';
  probe.style.fontFamily = "Georgia, 'Times New Roman', serif";
  document.body.appendChild(probe);
  return probe;
}

function fitText(
  probe: HTMLDivElement,
  text: string,
  frame: Pick<Layer, 'width' | 'height' | 'fontSize' | 'direction'>
): { fit: string; rest: string } {
  probe.style.width = `${Math.max(1, frame.width)}px`;
  probe.style.fontSize = `${frame.fontSize || 16}px`;
  probe.style.direction = frame.direction === 'rtl' ? 'rtl' : 'ltr';
  if (!text) return { fit: '', rest: '' };

  let low = 0;
  let high = text.length;
  let best = 0;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    probe.textContent = text.slice(0, mid);
    if (probe.scrollHeight <= frame.height + 1) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (best > 0 && best < text.length) {
    const chunk = text.slice(0, best);
    const boundary = Math.max(chunk.lastIndexOf('\n'), chunk.lastIndexOf(' '));
    if (boundary > 0 && boundary >= best - 48) best = boundary + 1;
  }

  return {
    fit: text.slice(0, best),
    rest: text.slice(best).replace(/^[ \t]+/, ''),
  };
}
