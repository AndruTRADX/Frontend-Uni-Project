// Componente que muestra un producto individual en el carrito
function CartItem({ item, onRemove, onUpdateQuantity }) {
  return (
    // Fila que representa un producto en el carrito
    <div className="flex items-center justify-between p-2 bg-white rounded border border-gray-300">
      {/* Nombre del producto */}
      <span className="font-medium min-w-25">{item.name}</span>
      {/* Precio unitario */}
      <span className="text-primary font-semibold min-w-17.5">
        ${item.price.toFixed(2)}
      </span>
      {/* Botones para controlar la cantidad */}
      <div className="flex items-center gap-2">
        {/* Botón para disminuir la cantidad */}
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="bg-gray-300 border-none rounded px-2 py-1 cursor-pointer font-bold transition-colors duration-200 hover:bg-gray-600 hover:text-white"
        >
          −
        </button>
        {/* Cantidad actual del producto */}
        <span className="min-w-6 text-center font-medium">{item.quantity}</span>
        {/* Botón para aumentar la cantidad */}
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="bg-gray-300 border-none rounded px-2 py-1 cursor-pointer font-bold transition-colors duration-200 hover:bg-gray-600 hover:text-white"
        >
          +
        </button>
        {/* Botón para eliminar el producto del carrito */}
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 text-white border-none rounded px-2 py-1 cursor-pointer font-bold transition-colors duration-200 hover:bg-red-600 ml-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default CartItem;
