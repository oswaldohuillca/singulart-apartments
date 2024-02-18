import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';
import robotsTxt from 'astro-robots-txt';



// https://astro.build/config
export default defineConfig({
  site: "https://singulart.pages.dev/",
  integrations: [
    svelte(),
    tailwind(),
    robotsTxt()
  ],
  renderers: [
    '@astrojs/renderer-svelte',
    // '@astrojs/renderer-vue',
    // '@astrojs/renderer-react',
  ],
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  }
});