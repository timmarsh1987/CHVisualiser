import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5174,
    fs: {
      allow: [resolve(__dirname, "../../..")],
    },
  },
});
