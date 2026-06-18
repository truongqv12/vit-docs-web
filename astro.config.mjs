// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: undefined // Prevent code-splitting bloat
        }
      }
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  redirects: {
    // Trang chủ chuyển hướng sang Guides — không còn landing marketing
    '/': '/guides',
    // Đã xóa redirect: /guides/resume→session-recovery và /guides/mobile-coding→remote-control
    // vì session-recovery và remote-control đã bị prune P4
  }
});
