import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import packageJson from './package.json'
import vue from '@vitejs/plugin-vue'

// Custom HTML replace plugin
const indexReplace = () => ({
  name: 'index-replace',
  transformIndexHtml: (html: string) => {
    let newHtml = html
    newHtml = newHtml.replace(/VITE_BUILD_DATE/g, new Date().toISOString())
    newHtml = newHtml.replace(/VITE_BUILD_VERSION/g, packageJson.version)
    return newHtml
  },
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), indexReplace()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
