import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://benstokoe.co.uk",
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
