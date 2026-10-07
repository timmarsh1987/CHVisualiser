/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import SheetPanel from './SheetPanel';
import type { HubClient } from '../CHPdfTemplate/hub';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  return {
    render(context: any) {
      root.render(
        <ThemeProvider theme={context.theme}>
          <SheetPanel client={context.client as HubClient} entity={context.entity} options={context.options} />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
