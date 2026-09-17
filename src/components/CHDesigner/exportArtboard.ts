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

async function captureArtboard(from: HTMLElement): Promise<HTMLCanvasElement> {
  const artboard = findArtboard(from);
  const html2canvas = await loadHtml2Canvas();
  artboard.classList.add('chd-artboard--capturing');
  try {
    const width = Math.max(1, Math.round(artboard.offsetWidth));
    const height = Math.max(1, Math.round(artboard.offsetHeight));
    return await html2canvas(artboard, {
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
    artboard.classList.remove('chd-artboard--capturing');
  }
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
  const JsPDF = await loadJsPdf();
  const widthMm = (pageWidthPx * 25.4) / CSS_PX_PER_INCH;
  const heightMm = (pageHeightPx * 25.4) / CSS_PX_PER_INCH;
  const pdf = new JsPDF({
    orientation: widthMm >= heightMm ? 'landscape' : 'portrait',
    unit: 'mm',
    format: [widthMm, heightMm],
    compress: true,
  });
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, widthMm, heightMm);
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