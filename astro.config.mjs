// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Cập nhật sang domain chính thức sau khi mua domain + build/deploy lại
  // (hiện đang tạm dùng workers.dev)
  site: 'https://rainyband.rainyband2014.workers.dev',
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), sitemap()]
});