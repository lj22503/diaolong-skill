import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://diaolong.cn',
  base: '/',
  output: 'static',
  build: {
    assets: '_assets',
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
