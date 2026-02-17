import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./", // Use relative paths for assets
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        sluzby: resolve(__dirname, "sluzby.html"),
        kontakt: resolve(__dirname, "kontakt.html"),
        blog: resolve(__dirname, "blog.html"),
        cennik: resolve(__dirname, "cenník.html"),
        projectDetail: resolve(__dirname, "project-detail.html"),
      },
    },
  },
  server: {
    port: 8080,
    host: true, // Expose to network
  },
});
