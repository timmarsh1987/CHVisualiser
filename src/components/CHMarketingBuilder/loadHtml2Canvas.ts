type Html2CanvasFn = (
  element: HTMLElement,
  options?: Record<string, unknown>
) => Promise<HTMLCanvasElement>;

declare global {
  interface Window {
    html2canvas?: Html2CanvasFn;
  }
}

const DEFAULT_CDN_URL = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';

let loadPromise: Promise<Html2CanvasFn> | null = null;

function loadScript(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-html2canvas-loader="true"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load html2canvas')), { once: true });
      if (window.html2canvas) {
        resolve();
      }
      return;
    }

    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.dataset.html2canvasLoader = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load html2canvas'));
    document.head.appendChild(script);
  });
}

export function loadHtml2Canvas(cdnUrl = DEFAULT_CDN_URL): Promise<Html2CanvasFn> {
  if (window.html2canvas) {
    return Promise.resolve(window.html2canvas);
  }

  if (!loadPromise) {
    loadPromise = loadScript(cdnUrl).then(() => {
      if (!window.html2canvas) {
        throw new Error('html2canvas did not register on window');
      }
      return window.html2canvas;
    });
  }

  return loadPromise;
}
