import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
import basicSsl from "@vitejs/plugin-basic-ssl";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// Provide a fallback if npm_config_component is not defined
const component = process.env.npm_config_component || 'defaultComponent';

export default defineConfig({
  mode: "production",
  publicDir: false,
  define: {
    // @mui/material won't compile unless you mark it like this
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": process.env,
  },
  plugins: [react(), basicSsl(), cssInjectedByJsPlugin()],
  build: {
    sourcemap: false,
    commonjsOptions: {
      sourceMap: false,
    },
    // Define the output directory, unchanged
    outDir: `./../../configuration/userinterface/components`,
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: `${component}.js`, // Use the fallback or passed component name
          preserveModules: false
        },
      ],
    },
    lib: {
      fileName: component, // Use the fallback or passed component name
      entry: `./src/components/${component}/index.tsx`, // Fallback path if env var is not set
    },
    emptyOutDir: false,
  },
});
