// index.tsx
//
// Entry point for the custom page. The createExternalRoot signature and the way options
// are passed in differ by Content Hub version, so treat this as a starting shape.

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { ImageComposer } from "./ImageComposer";
import { loadBackgrounds, loadComposition, saveComposition } from "./contentHubApi";
import { resolveCutout } from "./cutoutSource";

function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value) return null;
  if (typeof value === "string") {
    try {
      return asRecord(JSON.parse(value));
    } catch {
      return null;
    }
  }
  return typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
}

function pickId(record: Record<string, unknown> | null, key: string): number | null {
  if (!record) return null;
  const entry = Object.entries(record).find(([name]) => name.toLowerCase() === key.toLowerCase());
  const id = Number(entry?.[1]);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}

function queryId(key: string): number | null {
  try {
    return pickId({ [key]: new URLSearchParams(window.location.search).get(key) ?? "" }, key);
  } catch {
    return null;
  }
}

function entityId(entity: any): number | null {
  return pickId(
    { id: entity?.systemProperties?.id ?? entity?.id },
    "id"
  );
}

function resolveIds(context: any): { cutoutAssetId: number | null; composedAssetId: number | null } {
  const config = asRecord(context?.config);
  const options = asRecord(context?.options);
  const cutoutAssetId =
    pickId(config, "cutoutAssetId") ??
    pickId(options, "cutoutAssetId") ??
    queryId("cutoutAssetId") ??
    pickId(options, "entityId") ??
    pickId(asRecord(context), "entityId") ??
    entityId(context?.entity);
  const composedAssetId =
    pickId(config, "composedAssetId") ??
    pickId(options, "composedAssetId") ??
    queryId("composedAssetId");
  return { cutoutAssetId, composedAssetId };
}

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  return {
    async render(context: any) {
      const { cutoutAssetId, composedAssetId } = resolveIds(context);

      if (!cutoutAssetId) {
        root.render(
          <ThemeProvider theme={context.theme}>
            <div>No cutout asset was supplied.</div>
          </ThemeProvider>
        );
        return;
      }

      try {
        const [backgrounds, cutout, initial] = await Promise.all([
          loadBackgrounds(context.client),
          resolveCutout(context.client, cutoutAssetId),
          composedAssetId ? loadComposition(context.client, composedAssetId) : Promise.resolve(null),
        ]);

        if (cutout.variant !== "cutout") {
          root.render(
            <ThemeProvider theme={context.theme}>
              <div>
                Asset {cutout.assetId} is not a cutout (AssetVariant is {cutout.variant ?? "empty"}).
                Run background removal first.
              </div>
            </ThemeProvider>
          );
          return;
        }

        if (backgrounds.length === 0) {
          root.render(
            <ThemeProvider theme={context.theme}>
              <div>No active composer backgrounds are set up yet.</div>
            </ThemeProvider>
          );
          return;
        }

        root.render(
          <ThemeProvider theme={context.theme}>
            <ImageComposer
              cutoutUrl={cutout.url}
              cutoutAssetId={cutout.assetId}
              cutoutFingerprint={cutout.fingerprint}
              backgrounds={backgrounds}
              initial={initial ?? undefined}
              buildAssetUrl={(id) => `/en-us/asset/${id}`}
              onSave={(blob, layout, background) =>
                saveComposition(context.client, {
                  blob,
                  fileName: `composed-${cutoutAssetId}.jpg`,
                  cutoutAssetId,
                  background,
                  layout,
                })
              }
            />
          </ThemeProvider>
        );
      } catch (err) {
        root.render(
          <ThemeProvider theme={context.theme}>
            <div style={{ color: "#b00020" }}>
              Failed to load composer: {(err as Error).message}
            </div>
          </ThemeProvider>
        );
      }
    },
    unmount() {
      root.unmount();
    },
  };
}
