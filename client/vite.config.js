import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Para activar DevTools y ver en el inspector en que archivo se encuentra ese estilo
  css: {
    devSourcemap: true // CLAVE
  }
})
