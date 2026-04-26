import { useState } from "react";
import { toast } from "sonner";

// Componente del pie de página con formulario de contacto
function Footer() {
  // Estado para guardar los datos del formulario
  const [formData, setFormData] = useState({ name: "", email: "" });
  // Estado para guardar los errores de validación
  const [, setErrors] = useState([]);

  // Función que maneja los cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualizamos el estado con el nuevo valor
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Función para validar que el email sea válido
  const validateEmail = (email) => {
    // Expresión regular para validar el formato del email
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  };

  // Función que se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Array para guardar los errores encontrados
    const newErrors = [];

    // Validamos que el nombre tenga al menos 3 caracteres
    if (formData.name.trim().length < 3) {
      newErrors.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Validamos que el email sea correcto
    if (!validateEmail(formData.email.trim())) {
      newErrors.push("El correo debe ser una dirección válida.");
    }

    // Si hay errores, los mostramos y detenemos el envío
    if (newErrors.length > 0) {
      setErrors(newErrors);
      toast.error(newErrors.join("\n"));
      return;
    }

    // Si todo es correcto, guardamos los datos
    toast.success("Datos capturados correctamente.");
    console.log("Formulario capturado:", formData);
    // Limpiamos el formulario después de enviar
    setFormData({ name: "", email: "" });
    setErrors([]);
  };

  return (
    // Pie de página fijo en la parte inferior
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-300">
      <div className="flex justify-between items-center px-4 py-3 gap-4">
        {/* Título de contacto */}
        <div>
          <h2 className="text-xl font-semibold text-gray-600">Contacto</h2>
        </div>
        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 items-center flex-wrap sm:flex-nowrap"
        >
          {/* Input para el nombre */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre"
            className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary max-w-xs"
          />
          {/* Input para el correo electrónico */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Correo"
            className="px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary max-w-xs"
          />
          {/* Botón para enviar el formulario */}
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white font-semibold rounded text-sm transition-colors duration-200 hover:bg-primary-dark min-w-max"
          >
            Enviar
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
