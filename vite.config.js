import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bk-offset/',
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'unsafe-none',
      'Cross-Origin-Embedder-Policy': 'unsafe-none',
      'Access-Control-Allow-Origin': '*',
    },
    hmr: {
      overlay: false,
    },
  },
})
