import ProductCard from "./ProductCard.jsx";

// Componente que muestra la lista de productos disponibles
function Products({ products, onAddToCart }) {
  // Si no hay productos, mostramos un mensaje de carga
  if (products.length === 0) {
    return <p className="text-gray-600">Cargando productos...</p>;
  }

  // Renderiozamos los productos en una grilla responsive
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      {/* Mapeamos cada producto para crear una tarjeta */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;
