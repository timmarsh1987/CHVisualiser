type Html2CanvasFn = (
  element: HTMLElement,
  options?: Record<string, unknown>
) => Promise<HTMLCanvasElement>;

type JsPdfInstance = {
  addImage: (
    imageData: string,
    format: string,
    x: number,
    y: number,
    width: number,
    height: number
  ) => void;
  save: (filename: string) => void;
};

type JsPdfCtor = new (options: {
  orientation: 'portrait' | 'landscape';
  unit: 'mm';
  format: [number, number];
  compress?: boolean;
}) => JsPdfInstance;

declare global {
  interface Window {
    html2canvas?: Html2CanvasFn;
    jspdf?: { jsPDF: JsPdfCtor };
  }
}

const HTML2CANVAS_CDN = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
const JSPDF_CDN = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js';

function loadScript(url: string, datasetKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = window.document.querySelector(`script[data-${datasetKey}="true"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${url}`)), { once: true });
      return;
    }

    const script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.setAttribute(`data-${datasetKey}`, 'true');
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    window.document.head.appendChild(script);
  });
}

let html2canvasPromise: Promise<Html2CanvasFn> | null = null;
let jsPdfPromise: Promise<JsPdfCtor> | null = null;

export function loadHtml2Canvas(): Promise<Html2CanvasFn> {
  if (window.html2canvas) return Promise.resolve(window.html2canvas);
  if (!html2canvasPromise) {
    html2canvasPromise = loadScript(HTML2CANVAS_CDN, 'chd-html2canvas').then(() => {
      if (!window.html2canvas) throw new Error('html2canvas did not register on window');
      return window.html2canvas;
    });
  }
  return html2canvasPromise;
}

export function loadJsPdf(): Promise<JsPdfCtor> {
  if (window.jspdf?.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
  if (!jsPdfPromise) {
    jsPdfPromise = loadScript(JSPDF_CDN, 'chd-jspdf').then(() => {
      const ctor = window.jspdf?.jsPDF;
      if (!ctor) throw new Error('jsPDF did not register on window');
      return ctor;
    });
  }
  return jsPdfPromise;
}
