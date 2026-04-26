// Importamos las herramientas necesarias para configurar Vite
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuración de Vite con React y Tailwind CSS como plugins
// https://vite.dev/config/
export default defineConfig({
  // Agregamos los plugins necesarios para que funcione React y Tailwind
  plugins: [react(), tailwindcss()],
})
