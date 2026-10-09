import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three'],
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['lucide-react'],
        },
      },
    },
  },
})
