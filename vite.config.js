import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/loop-affiliate-marketplace-v5/',
  server: {
    port: 5173
  }
})
