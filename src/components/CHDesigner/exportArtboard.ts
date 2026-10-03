import { loadHtml2Canvas, loadJsPdf } from './exportLibs';

export type GenerateFormat = 'pdf' | 'png';

const CSS_PX_PER_INCH = 96;

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = window.document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function findArtboard(from: HTMLElement): HTMLElement {
  const root = from.closest('.chd-root');
  const artboard = root?.querySelector<HTMLElement>('[data-chd-artboard]');
  if (!artboard) {
    throw new Error('Could not find the designer page to export.');
  }
  return artboard;
}

export async function captureElement(element: HTMLElement): Promise<HTMLCanvasElement> {
  const html2canvas = await loadHtml2Canvas();
  element.classList.add('chd-artboard--capturing');
  try {
    const width = Math.max(1, Math.round(element.offsetWidth));
    const height = Math.max(1, Math.round(element.offsetHeight));
    return await html2canvas(element, {
      useCORS: true,
      backgroundColor: null,
      width,
      height,
      windowWidth: width,
      windowHeight: height,
      scale: 2,
      logging: false,
    });
  } finally {
    element.classList.remove('chd-artboard--capturing');
  }
}

async function captureArtboard(from: HTMLElement): Promise<HTMLCanvasElement> {
  return captureElement(findArtboard(from));
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

async function exportPdf(
  canvas: HTMLCanvasElement,
  filename: string,
  pageWidthPx: number,
  pageHeightPx: number
) {
  const pdf = await createBatchPdf();
  pdf.addPageImage(canvas, pageWidthPx, pageHeightPx);
  pdf.save(filename);
}

export async function generateDesignerOutput(
  from: HTMLElement,
  format: GenerateFormat,
  page: { width: number; height: number }
): Promise<void> {
  const canvas = await captureArtboard(from);
  if (format === 'png') {
    await exportPng(canvas, 'design.png');
    return;
  }
  await exportPdf(canvas, 'design.pdf', page.width, page.height);
}