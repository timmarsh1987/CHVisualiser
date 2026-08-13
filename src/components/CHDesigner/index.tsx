/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';
import DesignerShell from './DesignerShell';
import './index.css';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);

  return {
    render(context: any) {
      root.render(
        <ThemeProvider theme={context.theme}>
          <DesignerShell />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
