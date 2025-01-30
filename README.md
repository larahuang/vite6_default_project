# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


Vue6 Vue3
版本號:node v20.17.0 & npm v10.8.2
```
cd 專案
npm install
npm run dev
```

處理錯誤：修改vite.config.ts配置與安裝 @types/node
```
npm install --save-dev @types/node
```

### Vite Pwa漸進式網路應用程式 安裝與設定
```
npm i -D vite-plugin-pwa
```
vite.config.js增加
```
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate' })
  ],
  server: {
    hmr: {
      overlay: false
    }
  },
})
```
<b>產生 PWA 資產產生和圖像</b>
```
npm install --global vue-pwa-asset-generator

```
執行指令
剛剛製作的icon路徑產生到public/img/icons檔案夾內
```
npx vue-pwa-asset-generator -a ./public/logo.png -o ./public/img/icons


```

