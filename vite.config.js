import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set the base to the repo name so assets load correctly on GitHub Pages
  base: '/BK-Offset/',
  plugins: [react()],
})
