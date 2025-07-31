/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import GraphViewer from './GraphViewer';
import { ThemeProvider } from '@mui/material';
import { createRoot } from 'react-dom/client';

const OptionsContext = React.createContext<any>(null);

export default function createExternalRoot(container: HTMLElement) {
  const root = createRoot(container);
  console.log('%c[Visualizer] Starting up...', 'color: green; font-weight: bold');
  console.log('%c[Visualizer] Container:', 'color: green; font-weight: bold', container);
  console.log('%c[Visualizer] Root:', 'color: green; font-weight: bold', root);
  console.log('%c[Visualizer] React:', 'color: green; font-weight: bold', React);

  return {
    render(context: any) {
      console.log('%c[Visualizer] Context:', 'color: green; font-weight: bold', context);
      console.log('%c[Visualizer] Context.client:', 'color: green; font-weight: bold', context.client);
      console.log('%c[Visualizer] Context.options:', 'color: green; font-weight: bold', context.options);
      console.log('%c[Visualizer] Context.entity:', 'color: green; font-weight: bold', context.entity);
      console.log('%c[Visualizer] Context.theme:', 'color: green; font-weight: bold', context.theme);

      root.render(
        <ThemeProvider theme={context.theme}>
          <OptionsContext.Provider value={context.options}>
            <OptionsContext.Consumer>
              {(options) => {
                console.log("context.options", context);
                console.log("showGraphViewer option:", context.options.showGraphViewer);
                console.log("entityId:", context.options.entityId);
                console.log("entity:", context.entity);

                // Always show the GraphViewer component (remove the conditional check)
                // The component will handle the case where no entity is available
                return (
                  <GraphViewer
                    client={context.client}
                    options={context.options}
                    entity={context.entity}
                  />
                );
              }}
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