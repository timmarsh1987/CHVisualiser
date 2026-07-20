import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export const COMPONENTS = [
  "CHEntityAncestry",
  "CHEntityMap",
  "CHFloorplan",
  "CHSalesforce",
  "CHArticheck",
  "CHVisualiser",
  "CHIntentIntelligence",
  "CHComponentLibrary",
  "CHMarketingBuilder",
  "CHBrandCompliance",
] as const;
export type ComponentName = (typeof COMPONENTS)[number];

const requested =
  process.env.COMPONENT ?? process.env.npm_config_component ?? "";
const component: ComponentName = COMPONENTS.includes(requested as ComponentName)
  ? (requested as ComponentName)
  : "CHEntityAncestry";

export default defineConfig({
  mode: "production",
  publicDir: false,
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": process.env,
  },
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    sourcemap: false,
    commonjsOptions: {
      sourceMap: false,
    },
    outDir: "./dist",
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, `src/components/${component}/index.tsx`),
      formats: ["es"],
      fileName: () => `${component}.js`,
    },
    rollupOptions: {
      output: {
        entryFileNames: `${component}.js`,
      },
    },
  },
});
