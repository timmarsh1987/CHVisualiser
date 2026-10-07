export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function topLeftRectToPdf(rect: Rect, pageHeight: number): Rect {
  return {
    x: rect.x,
    y: pageHeight - rect.y - rect.height,
    width: rect.width,
    height: rect.height,
  };
}

export function firstBaseline(pdfTop: number, ascent: number): number {
  return pdfTop - ascent;
}
