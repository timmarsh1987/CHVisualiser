import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
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
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    sourcemap: false,
    commonjsOptions: {
      sourceMap: false,
    },
    outDir: `./dist`,
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: `CHVisualiser.js`,
          preserveModules: false
        },
      ],
    },
    lib: {
      entry: "./src/components/CHVisualiser/index.tsx",
      name: "CHVisualiser",
      fileName: "CHVisualiser",
    },
    emptyOutDir: true,
  },
});
