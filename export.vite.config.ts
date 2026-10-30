import { resolve } from "node:path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [viteReact(), tailwindcss()],
  base: "./",
  resolve: {
    alias: { "@": resolve("src") },
  },
  build: {
    outDir: resolve("dist-sites"),
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      input: resolve("export/index.html"),
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "game.js",
        assetFileNames: "game[extname]",
      },
    },
  },
});
