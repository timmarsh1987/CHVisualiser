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

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  return {
    async render(context: any) {
      const cutoutAssetId = Number(context.options?.cutoutAssetId);
      const composedAssetId = context.options?.composedAssetId
        ? Number(context.options.composedAssetId)
        : null;

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
              <div>This asset is not a cutout. Run background removal first.</div>
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
