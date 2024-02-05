import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@/*": "/src/*",
    },
  },
});
