# Supermercado La Economía

Una aplicación web moderna de e-commerce desarrollada con **React** y **Vite**, con estilos dinámicos usando **Tailwind CSS**. Esta tienda en línea permite a los usuarios explorar productos, agregarlos al carrito y contactar al supermercado.

## Características

- ✅ **Listado de Productos**: Visualiza todos los productos disponibles en una grilla responsive
- ✅ **Carrito de Compras**: Agrega, elimina y modifica cantidades de productos
- ✅ **Validación de Inventario**: Controla que no se supere el stock disponible
- ✅ **Cálculo de Total**: Ve el precio total de tu compra en tiempo real
- ✅ **Formulario de Contacto**: Contacta al supermercado con validación de datos
- ✅ **Diseño Responsive**: Funciona perfectamente en celulares, tablets y computadoras
- ✅ **Interfaz Moderna**: Estilos con Tailwind CSS y efectos visuales atractivos

## Tecnologías Utilizadas

- **React 18+**: Librería JavaScript para construir interfaces de usuario
- **Vite**: Herramienta de construcción rápida y moderna
- **Tailwind CSS**: Framework de utilidades CSS para estilos
- **JavaScript ES6+**: Lenguaje de programación con características modernas
- **ESLint**: Herramienta para mantener la calidad del código

## Instalación

### Requisitos Previos
- Node.js versión 14 o superior
- npm o yarn como gestor de paquetes

### Pasos para Instalar

1. **Clona el repositorio** (si está en git):
```bash
git clone <url-del-repositorio>
cd front_react
```

2. **Instala las dependencias**:
```bash
npm install
```

3. **Ejecuta el servidor de desarrollo**:
```bash
npm run dev
```

4. **Abre tu navegador** en:
```
http://localhost:5173
```

## 🔧 Cómo Usar la Aplicación

### Agregar Productos al Carrito
1. Explora la lista de productos en la página principal
2. Haz clic en "Agregar al carrito" en la tarjeta del producto
3. El producto aparecerá en la sección del carrito

### Modificar Cantidades
- Usa los botones **+** y **−** en el carrito para ajustar la cantidad
- El sistema verifica automáticamente el inventario disponible
- Si intentas exceder el stock, recibirás una alerta

### Eliminar Productos
- Haz clic en el botón **✕** (rojo) al lado del producto en el carrito

### Contactar al Supermercado
1. Desplázate hasta el pie de página
2. Completa tu nombre y correo electrónico
3. Haz clic en "Enviar"
4. El formulario valida que los datos sean correctos

## 📋 Componentes Principales

### App.jsx
Componente raíz que maneja:
- Estado global del carrito
- Carga de productos desde `data/products.json`
- Funciones para agregar, eliminar y actualizar cantidades

### Navbar.jsx
Barra de navegación fija con:
- Logo del supermercado
- Enlaces de navegación (Inicio, Ofertas, Contacto)

### Products.jsx
Muestra todos los productos en una grilla responsive que se ajusta al tamaño de la pantalla

### ProductCard.jsx
Tarjeta individual que presenta:
- Nombre del producto
- Imagen
- Precio
- Inventario disponible
- Botón para agregar al carrito

### Cart.jsx
Sección del carrito que muestra:
- Lista de productos agregados
- Cantidad de items
- Total a pagar

### CartItem.jsx
Cada producto en el carrito con:
- Nombre y precio
- Botones para cambiar cantidad
- Botón para eliminar

### Footer.jsx
Pie de página con:
- Formulario de contacto
- Validación de nombre (mínimo 3 caracteres)
- Validación de email (formato válido)

## 📝 Datos de Productos

Los productos se cargan desde `data/products.json`. Cada producto debe tener:

```json
{
  "id": 1,
  "name": "Nombre del Producto",
  "price": 19.99,
  "image": "url-de-imagen",
  "inventory": 10
}
```

## Estilos y Colores

El proyecto utiliza **Tailwind CSS** con un color primario personalizado:
- **Color Primario**: `#7c3aed` (morado)
- **Color Primario Oscuro**: `#6d28d9`
- **Fondo**: Gris claro
- **Bordes**: Gris suave

## Responsividad

El diseño se adapta a diferentes tamaños de pantalla:
- **Móvil**: 1 columna de productos
- **Tablet**: 2 columnas
- **Laptop**: 3 columnas
- **Pantalla Grande**: 4 columnas

## Validaciones

### Carrito
- No permite agregar más del inventario disponible
- Valida que la cantidad sea mayor a 0
- Actualiza el total automáticamente

### Formulario de Contacto
- Nombre debe tener al menos 3 caracteres
- Email debe tener formato válido
- Muestra errores si hay validaciones incorrectas

## Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm run dev

# Compila el proyecto para producción
npm run build

# Preview de la build de producción
npm run preview

# Ejecuta ESLint para verificar la calidad del código
npm run lint
```

## 👨Autor

Desarrollado como un proyecto universitario de e-commerce con React por Andrés Rodríguez del Politécnico
Grancolombiano para la materia de Frontend.

## Licencia

Este proyecto está disponible bajo la licencia MIT.
