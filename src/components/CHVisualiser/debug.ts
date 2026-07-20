export function isDebugEnabled(): boolean {
  try {
    return localStorage.getItem('ch-visualiser-debug') === '1';
  } catch {
    return false;
  }
}

export function debugLog(...args: unknown[]): void {
  if (isDebugEnabled()) {
    console.log('[CHVisualiser]', ...args);
  }
}
