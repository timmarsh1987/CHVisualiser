/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import GovernancePanel from './GovernancePanel';

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[AIGovernancePanel] Starting up...', 'color: #0B5CAB; font-weight: bold');

  return {
    render(context: any) {
      console.log(
        '%c[AIGovernancePanel] context keys:',
        'color: #0B5CAB; font-weight: bold',
        Object.keys(context ?? {})
      );

      root.render(
        <ThemeProvider theme={context.theme}>
          <GovernancePanel
            client={context.client}
            entity={context.entity}
            options={context.options}
          />
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}
