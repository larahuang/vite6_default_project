import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"
import { resolve } from "path"
import { VitePWA } from "vite-plugin-pwa"
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: resolve(__dirname, './env'),
  server: {
    hmr: {
      overlay: false
    }
  },
})
