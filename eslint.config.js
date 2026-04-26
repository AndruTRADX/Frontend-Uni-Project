// Importamos las librerías necesarias para configurar ESLint
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

// Configuración de ESLint para el proyecto
export default defineConfig([
  // Ignoramos la carpeta 'dist' (archivos compilados)
  globalIgnores(['dist']),
  {
    // Aplicamos las reglas a todos los archivos .js y .jsx
    files: ['**/*.{js,jsx}'],
    // Extendemos las configuraciones recomendadas
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])
