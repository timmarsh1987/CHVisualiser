/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Floorplan from './Floorplan';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

const OptionsContext = React.createContext<any>(null);

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[Floorplan] Starting up...', 'color: #1D9E75; font-weight: bold');

  return {
    render(context: any) {
      console.log('%c[Floorplan] Context:', 'color: #1D9E75; font-weight: bold', context);
      console.log('%c[Floorplan] entity:', 'color: #1D9E75; font-weight: bold', context.entity);
      console.log('%c[Floorplan] options:', 'color: #1D9E75; font-weight: bold', context.options);

      root.render(
        <ThemeProvider theme={context.theme}>
          <OptionsContext.Provider value={context.options}>
            <OptionsContext.Consumer>
              {(options) => (
                <Floorplan
                  client={context.client}
                  options={options}
                  entity={context.entity}
                />
              )}
            </OptionsContext.Consumer>
          </OptionsContext.Provider>
        </ThemeProvider>
      );
    },
    unmount() {
      root.unmount();
    },
  };
}