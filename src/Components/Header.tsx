import { Leaf } from "lucide-react"
import {Link} from "react-router-dom"

export function Header() {
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
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">Conciencia Verde</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-green-600 font-medium hover:text-green-700">
                Inicio
              </Link>
              <Link to="/EnergiaSolar" className="text-gray-600 hover:text-green-600">
                Energía Solar
              </Link>
              <Link to="/EnergiaEolica" className="text-gray-600 hover:text-green-600">
                Energía Eólica
              </Link>
              <Link to="/FaunaLocal" className="text-gray-600 hover:text-green-600">
                Fauna Local
              </Link>
              <Link to="/Bosques" className="text-gray-600 hover:text-green-600">
                Bosques
              </Link>
              <Link to="/BasuraResiduos" className="text-gray-600 hover:text-green-600">
                Basura
              </Link>
              <Link to="/DesperdicioAgua" className="text-gray-600 hover:text-green-600">
                Agua
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
