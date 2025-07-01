import { useState } from "react";
import { Trees, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", label: "Inicio" },
    { to: "/EnergiaSolar", label: "Energía Solar" },
    { to: "/EnergiaEolica", label: "Energía Eólica" },
    { to: "/FaunaLocal", label: "Fauna Local" },
    { to: "/Bosques", label: "Bosques" },
    { to: "/BasuraResiduos", label: "Basura" },
    { to: "/DesperdicioAgua", label: "Agua" },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="bg-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 hover:text-green-700 transition-colors">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Trees className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Conciencia Verde</span>
            </Link>

            {/* Botón hamburguesa (solo en móvil) */}
            <button
              className="md:hidden text-gray-800"
              onClick={toggleMenu}
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Navegación grande (escritorio) */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-600 hover:text-green-600 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navegación móvil */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-2 pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsOpen(false)} // Cierra al hacer clic
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
