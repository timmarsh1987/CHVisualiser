export type LogLevel = 'info' | 'resolved' | 'missing' | 'fallback' | 'error';

export interface LoadReportEntry {
  level: LogLevel;
  resource: string;
  detail: string;
  hint?: string;
}

const PREFIX = '[CHMarketingBuilder]';

const STYLES: Record<LogLevel, string> = {
  info: 'color:#1565c0;font-weight:bold',
  resolved: 'color:#2e7d32;font-weight:bold',
  missing: 'color:#e65100;font-weight:bold',
  fallback: 'color:#f57c00;font-weight:bold',
  error: 'color:#c62828;font-weight:bold',
};

const LABELS: Record<LogLevel, string> = {
  info: 'INFO',
  resolved: 'OK',
  missing: 'MISSING',
  fallback: 'FALLBACK',
  error: 'ERROR',
};

let loadReport: LoadReportEntry[] = [];

function formatDetail(reason: unknown): string {
  if (reason instanceof Error) return reason.message;
  if (reason == null) return '';
  return String(reason);
}

function print(level: LogLevel, resource: string, detail: string, hint?: string) {
  const label = LABELS[level];
  const style = STYLES[level];
  if (hint) {
    console.log(`%c${PREFIX} %c${label}%c ${resource}: ${detail}\n  → ${hint}`, 'font-weight:bold', style, 'color:inherit');
  } else {
    console.log(`%c${PREFIX} %c${label}%c ${resource}: ${detail}`, 'font-weight:bold', style, 'color:inherit');
  }
}

export function resetLoadReport() {
  loadReport = [];
}

export function recordLoad(level: LogLevel, resource: string, reason: unknown, hint?: string) {
  const detail = formatDetail(reason);
  loadReport.push({ level, resource, detail, hint });
  print(level, resource, detail, hint);
}

export function logInfo(resource: string, detail: string) {
  recordLoad('info', resource, detail);
}

export function logResolved(resource: string, detail: string) {
  recordLoad('resolved', resource, detail);
}

export function logMissing(resource: string, reason: unknown, hint?: string) {
  recordLoad('missing', resource, reason, hint);
}

export function logFallback(resource: string, reason: unknown, hint?: string) {
  recordLoad('fallback', resource, reason, hint);
}

export function logError(resource: string, reason: unknown, hint?: string) {
  recordLoad('error', resource, reason, hint);
}

export function printLoadSummary(context: {
  builderMode: string;
  templateId?: string;
  templateName?: string;
  marketingAssetId?: string;
  brandKitId?: string;
  channelType?: string;
  zoneCount?: number;
  zoneValueCount?: number;
  usedDummyTemplate?: boolean;
  usedDummyBrandKit?: boolean;
  usedDummyZones?: boolean;
}) {
  const issues = loadReport.filter((entry) => entry.level !== 'resolved' && entry.level !== 'info');
  console.groupCollapsed(
    `%c${PREFIX} Load summary — ${context.builderMode} builder (${issues.length} note${issues.length === 1 ? '' : 's'})`,
    'color:#1565c0;font-weight:bold'
  );
  console.table({
    'Builder mode': context.builderMode,
    'Template': context.templateName ? `${context.templateName} (${context.templateId})` : context.templateId,
    'Marketing asset': context.marketingAssetId,
    'Brand kit': context.brandKitId,
    'Channel': context.channelType,
    'Zones': context.zoneCount,
    'Zone values': context.zoneValueCount,
    'Dummy template': context.usedDummyTemplate ? 'yes' : 'no',
    'Dummy brand kit': context.usedDummyBrandKit ? 'yes' : 'no',
    'Dummy zones': context.usedDummyZones ? 'yes' : 'no',
  });
  if (loadReport.length > 0) {
    console.table(
      loadReport.map((entry) => ({
        Level: LABELS[entry.level],
        Resource: entry.resource,
        Detail: entry.detail,
        Hint: entry.hint ?? '',
      }))
    );
  }
  console.groupEnd();
}
