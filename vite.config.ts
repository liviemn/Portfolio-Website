import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', 
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],              // splits three.js into its own chunk
          react: ['react', 'react-dom'], // splits React and ReactDOM
        },
      },
    },
  },
})
