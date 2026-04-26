import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import { Toaster, toast } from 'sonner';

// Componente principal de la aplicación
function App() {
  // Estado para guardar los productos que se agregan al carrito
  const [cart, setCart] = useState([]);
  // Estado para guardar la lista de productos disponibles
  const [products, setProducts] = useState([]);

  // Efecto que se ejecuta cuando carga el componente para traer los productos del archivo JSON
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        // Guardamos los productos en el estado
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };

    loadProducts();
  }, []);

  // Función para agregar un producto al carrito
  const addToCart = (productId) => {
    // Buscamos el producto por su ID
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Verificamos si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId);
    const currentQty = existingItem ? existingItem.quantity : 0;

    // Validamos que no excedamos el inventario disponible
    if (currentQty >= product.inventory) {
      toast.error(`No hay suficiente inventario. Solo quedan ${product.inventory} unidades.`);
      return;
    }

    // Si ya está en el carrito, aumentamos la cantidad
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Si no está, lo agregamos por primera vez
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Función para quitar un producto del carrito
  const removeFromCart = (productId) => {
    // Filtramos el carrito para eliminar el producto
    setCart(cart.filter(item => item.id !== productId));
  };

  // Función para cambiar la cantidad de un producto en el carrito
  const updateQuantity = (productId, quantity) => {
    const product = products.find(p => p.id === productId);
    // Verificamos que no supere el inventario disponible
    if (quantity > product.inventory) {
      toast.error(`No hay suficiente inventario. Solo quedan ${product.inventory} unidades.`);
      return;
    }

    // Si la cantidad es 0 o menor, lo quitamos del carrito
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      // Si no, actualizamos la cantidad
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  // Calculamos el total del carrito multiplicando precio por cantidad de cada producto
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Renderizamos la estructura principal de la aplicación
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Toaster para poder ver alertas en nuestro sistema */}
      <Toaster position="top-right" richColors  />
      {/* Barra de navegación */}
      <Navbar />
      {/* Sección principal con productos y carrito */}
      <main className="grow pt-20 px-4 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos</h2>
        {/* Componente que muestra la lista de productos */}
        <Products products={products} onAddToCart={addToCart} />
        {/* Componente que muestra el carrito de compras */}
        <Cart
          items={cart}
          total={cartTotal}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </main>
      {/* Pie de página con formulario de contacto */}
      <Footer />
    </div>
  );
}

export default App;
