import { vitePreprocess } from '@astrojs/svelte';

export default {
  preprocess: vitePreprocess(),
  vitePlugin: {
    prebundleSvelteLibraries: false
  }
};