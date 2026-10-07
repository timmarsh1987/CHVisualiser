export type RegionStatus =
  | "ok"
  | "unbound"
  | "overflow"
  | "truncated"
  | "error"
  | "unsupported";

export interface RegionReport {
  regionId: string;
  status: RegionStatus;
  fontSizeUsed: number | null;
  truncated: boolean;
  overflow: boolean;
  missingGlyphs: string[];
  unboundFields: string[];
  message: string | null;
}

export interface LayoutReport {
  inputHash: string;
  regions: RegionReport[];
}

export function emptyRegionReport(
  regionId: string,
  status: RegionStatus,
  message: string | null = null,
): RegionReport {
  return {
    regionId,
    status,
    fontSizeUsed: null,
    truncated: false,
    overflow: false,
    missingGlyphs: [],
    unboundFields: [],
    message,
  };
}
