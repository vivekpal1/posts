import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import react from '@astrojs/react'
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs'

export default defineConfig({
  site: 'https://vivekpal.xyz',
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      wrap: false,
    },
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    unocss({ injectReset: true }),
    react()
  ],
  server: {
    port: 8000,
    host: true,
  },
})