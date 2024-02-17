import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from '@astrojs/svelte';


// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind()
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