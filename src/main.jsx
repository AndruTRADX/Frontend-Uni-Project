// Importaciones necesarias de React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Estilos globales
import './index.css'
// Componente principal de la aplicación
import App from './App.jsx'

// Creamos la raíz de React y renderizamos la aplicación
// StrictMode ayuda a encontrar problemas en la aplicación durante el desarrollo
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
