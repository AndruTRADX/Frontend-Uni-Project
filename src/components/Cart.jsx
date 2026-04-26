import CartItem from "./CartItem.jsx";

// Componente que muestra el carrito de compras
function Cart({ items, total, onRemove, onUpdateQuantity }) {
  return (
    // Sección del carrito con estilo de tarjeta
    <section className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-300 mb-24">
      {/* Título del carrito con la cantidad de productos */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Carrito <span className="text-primary">({items.length})</span>
      </h3>
      {/* Lista de productos en el carrito */}
      <div className="flex flex-col gap-3">
        {/* Mostramos un mensaje si el carrito está vacío */}
        {items.length === 0 ? (
          <p className="text-gray-600">No hay productos en el carrito.</p>
        ) : (
          // Si hay productos, los mostramos
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))
        )}
      </div>
      {/* Sección del total a pagar */}
      <div className="flex justify-between items-center text-lg font-semibold pt-4 border-t-2 border-gray-300 mt-4">
        <span>Total:</span>
        <span className="text-primary">${total.toFixed(2)}</span>
      </div>
    </section>
  );
}

export default Cart;
