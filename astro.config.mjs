import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://kirupakaran.in',
  vite: {
    plugins: [tailwindcss()],
  },
});
