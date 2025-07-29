import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['fs', 'path'] // ← Add any Node.js built-ins here if causing issues
    }
  }
})
