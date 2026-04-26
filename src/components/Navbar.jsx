// Componente de la barra de navegación
function Navbar() {
  return (
    // Barra fija en la parte superior con efecto blur
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center border-b border-gray-300 px-2 py-4 bg-white/60 backdrop-blur-[10px]">
      {/* Logo o nombre de la tienda */}
      <h1 className="text-2xl font-semibold text-gray-800">
        Supermercado La Economía
      </h1>
      {/* Enlaces de navegación */}
      <div className="flex gap-2">
        <a
          href="#"
          className="px-3 py-1 text-gray-800 font-medium rounded text-sm border border-transparent transition-all duration-300 hover:text-primary hover:scale-105 hover:bg-gray-50 hover:border-gray-300"
        >
          Inicio
        </a>
        <a
          href="#"
          className="px-3 py-1 text-gray-800 font-medium rounded text-sm border border-transparent transition-all duration-300 hover:text-primary hover:scale-105 hover:bg-gray-50 hover:border-gray-300"
        >
          Ofertas
        </a>
        <a
          href="#"
          className="px-3 py-1 text-gray-800 font-medium rounded text-sm border border-transparent transition-all duration-300 hover:text-primary hover:scale-105 hover:bg-gray-50 hover:border-gray-300"
        >
          Contacto
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
