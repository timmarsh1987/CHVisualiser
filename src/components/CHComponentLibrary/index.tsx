/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import ComponentLibrary from './ComponentLibrary';

export default function createExternalRoot(
  container: HTMLElement,
  // clientBuilder is provided by Content Hub for constructing an authenticated
  // WebClient SDK instance. Kept here, unused, ready for the live-data phase.
  // See: doc.sitecore.com/ch/en/users/content-hub/configure-the-external-component.html
  clientBuilder?: unknown
) {
  let reactRoot: Root | null = null;

  return {
    render(context: any) {
      if (!reactRoot) {
        reactRoot = createRoot(container);
      }

      // ---------------------------------------------------------------
      // LIVE DATA SWAP-IN POINT (not wired up yet, dummy data by design):
      //
      //   import { QueryingClient } from "@sitecore/sc-contenthub-webclient-sdk";
      //   const queryClient = new QueryingClient(clientBuilder());
      //   const results = await queryClient.queryAsync({ ... });
      //
      // Pass the results down as a prop to <ComponentLibrary /> once this
      // is ready, replacing the CATALOG entries' dummy `fields`/data with
      // real entity data. Nothing else in the component tree needs to change.
      // ---------------------------------------------------------------
      reactRoot.render(
        <ThemeProvider theme={context?.theme}>
          <ComponentLibrary initialComponent={context?.config?.initialComponent} />
        </ThemeProvider>
      );
    },
    unmount() {
      reactRoot?.unmount();
      reactRoot = null;
    },
  };
}
