// Componente que muestra una tarjeta individual de producto
function ProductCard({ product, onAddToCart }) {
  return (
    // Tarjeta del producto con efecto hover
    <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-md transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      {/* Nombre del producto */}
      <p className="font-semibold text-primary mb-2">{product.name}</p>
      {/* Imagen del producto */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-44 object-cover rounded-lg mb-2"
      />
      {/* Precio del producto */}
      <p className="text-gray-600 text-sm mb-1">
        Precio: ${product.price.toFixed(2)}
      </p>
      {/* Cantidad disponible en inventario */}
      <p className="text-gray-600 text-sm mb-3">
        Disponibles: {product.inventory}
      </p>
      {/* Botón para agregar el producto al carrito */}
      <button
        onClick={() => onAddToCart(product.id)}
        className="w-full bg-primary text-white font-semibold py-2 px-3 rounded text-sm transition-colors duration-200 hover:bg-primary-dark"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
