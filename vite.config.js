import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base ensures asset URLs work on GitHub Pages project sites.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
