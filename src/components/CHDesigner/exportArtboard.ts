import { createElement } from 'react';
import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { loadHtml2Canvas, loadJsPdf } from './exportLibs';
import LayerNode from './LayerNode';
import { layerIsDrawn } from './policy';
import { syncActiveTemplatePage } from './templateSettings';
import type { DesignerDocument, DesignerSettings, DesignerTemplatePage, Layer } from './types';

export type GenerateFormat = 'pdf' | 'png';

const CSS_PX_PER_INCH = 96;

function layoutPixels(element: HTMLElement, axis: 'width' | 'height'): number {
  const styled = Number.parseFloat(element.style[axis]);
  if (Number.isFinite(styled) && styled > 0) return Math.round(styled);
  const measured = axis === 'width' ? element.offsetWidth : element.offsetHeight;
  return Math.max(1, Math.round(measured));
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = window.document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function captureElement(element: HTMLElement): Promise<HTMLCanvasElement> {
  const html2canvas = await loadHtml2Canvas();
  element.classList.add('chd-artboard--capturing');
  try {
    const width = layoutPixels(element, 'width');
    const height = layoutPixels(element, 'height');
    return await html2canvas(element, {
      useCORS: true,
      backgroundColor: element.style.backgroundColor || '#ffffff',
      width,
      height,
      scale: 2,
      logging: false,
    });
  } finally {
    element.classList.remove('chd-artboard--capturing');
  }
}

function pagesFromDocument(document: DesignerDocument): DesignerTemplatePage[] {
  const synced = syncActiveTemplatePage(document);
  if (synced.pages?.length) return synced.pages;
  return [
    {
      id: synced.activePageId || 'page',
      name: 'Page 1',
      width: synced.canvas.width,
      height: synced.canvas.height,
      layers: synced.layers,
    },
  ];
}

function waitForImages(root: HTMLElement): Promise<void> {
  const images = [...root.querySelectorAll('img')];
  return Promise.all(
    images.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
            return;
          }
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        })
    )
  ).then(() => undefined);
}

/** Draw a page at its real size, outside the zoomed canvas, then photograph it. */
async function capturePage(
  page: DesignerTemplatePage,
  settings: DesignerSettings | undefined,
  background: string
): Promise<HTMLCanvasElement> {
  const host = window.document.createElement('div');
  host.className = 'chd-batch-stage';
  host.setAttribute('aria-hidden', 'true');
  const board = window.document.createElement('div');
  board.className = 'chd-artboard';
  board.dataset.chdArtboard = 'true';
  board.style.width = `${page.width}px`;
  board.style.height = `${page.height}px`;
  board.style.backgroundColor = background;
  host.appendChild(board);
  window.document.body.appendChild(host);
  const root = createRoot(board);
  const drawn = page.layers.filter((layer) => layerIsDrawn(layer, settings));
  try {
    flushSync(() => {
      root.render(
        drawn.map((layer: Layer) =>
          createElement(LayerNode, {
            key: layer.id,
            layer,
            selected: false,
            preview: true,
            onSelect: () => undefined,
            onMoveStart: () => undefined,
          })
        )
      );
    });
    if (window.document.fonts?.ready) await window.document.fonts.ready;
    await waitForImages(board);
    await new Promise<void>((resolve) => {
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => resolve()));
    });
    return await captureElement(board);
  } finally {
    root.unmount();
    host.remove();
  }
}

function pageSizeMm(pageWidthPx: number, pageHeightPx: number) {
  return {
    widthMm: (pageWidthPx * 25.4) / CSS_PX_PER_INCH,
    heightMm: (pageHeightPx * 25.4) / CSS_PX_PER_INCH,
  };
}

export interface BatchPdf {
  addPageImage: (canvas: HTMLCanvasElement, pageWidthPx: number, pageHeightPx: number) => void;
  save: (filename: string) => void;
}

export async function createBatchPdf(): Promise<BatchPdf> {
  const JsPDF = await loadJsPdf();
  let pdf: InstanceType<typeof JsPDF> | null = null;
  return {
    addPageImage(canvas, pageWidthPx, pageHeightPx) {
      const { widthMm, heightMm } = pageSizeMm(pageWidthPx, pageHeightPx);
      const orientation = widthMm >= heightMm ? 'landscape' : 'portrait';
      if (!pdf) {
        pdf = new JsPDF({
          orientation,
          unit: 'mm',
          format: [widthMm, heightMm],
          compress: true,
        });
      } else {
        pdf.addPage([widthMm, heightMm], orientation);
      }
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, widthMm, heightMm);
    },
    save(filename: string) {
      if (!pdf) throw new Error('There are no pages to download.');
      pdf.save(filename);
    },
  };
}

async function exportPng(canvas: HTMLCanvasElement, filename: string) {
  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob((result) => {
      if (result) resolve(result);
      else reject(new Error('Could not create PNG.'));
    }, 'image/png');
  });
  downloadBlob(blob, filename);
}

export async function generateDesignerOutput(
  document: DesignerDocument,
  format: GenerateFormat
): Promise<void> {
  const synced = syncActiveTemplatePage(document);
  const pages = pagesFromDocument(synced);
  const background = synced.canvas.background || '#ffffff';
  if (pages.length === 0) {
    throw new Error('There are no pages to generate.');
  }

  if (format === 'png') {
    const page = pages.find((item) => item.id === synced.activePageId) ?? pages[0];
    const canvas = await capturePage(page, synced.settings, background);
    await exportPng(canvas, 'design.png');
    return;
  }

  const pdf = await createBatchPdf();
  for (const page of pages) {
    const canvas = await capturePage(page, synced.settings, background);
    pdf.addPageImage(canvas, page.width, page.height);
  }
  pdf.save('design.pdf');
}