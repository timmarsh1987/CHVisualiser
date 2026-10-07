/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import TemplateEditor from './TemplateEditor';
import type { HubClient } from './hub';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  return {
    render(context: any) {
      root.render(
        <ThemeProvider theme={context.theme}>
          <TemplateEditor client={context.client as HubClient} entity={context.entity} options={context.options} />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
