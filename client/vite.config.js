import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puedes cambiar el puerto si es necesario
    open: true, // Abre el navegador automáticamente
  },
  resolve: {
    alias: {
      '@': '/src', // Configura un alias opcional para rutas más fáciles de leer
    },
  },
})
