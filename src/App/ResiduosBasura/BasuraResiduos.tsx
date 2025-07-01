import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { Trash2, Recycle, AlertTriangle, Factory, Heart, Leaf, Zap } from "lucide-react"
import { VideoPlayer } from "../../Components/VideoPlayer"

export default function BasuraResiduosPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroSection
              badge="CRISIS GLOBAL DE RESIDUOS"
              title="REDUCE"
              subtitle="REUTILIZA, RECICLA"
              description="Generamos más basura que nunca en la historia humana. Cada año producimos 2.01 mil millones de toneladas de residuos, contaminando océanos, suelos y aire. Es hora de cambiar nuestros hábitos de consumo y gestión de residuos."
            />
          </div>
          <div className="lg:w-1/2 w-full max-w-xl mx-auto">
            <VideoPlayer src="/Video/Basura.mp4" poster="/placeholder.svg?height=400&width=600" />
          </div>
        </div>
      </section>

      {/* Why Waste Management Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Por Qué Es Crítica la Gestión de Residuos?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            La mala gestión de residuos amenaza la salud del planeta y las futuras generaciones
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Trash2}
              title="Contaminación Masiva"
              description="Los residuos mal gestionados contaminan océanos, suelos y aire, afectando toda la cadena alimentaria y los ecosistemas."
              iconColor="text-red-500"
              iconBgColor="bg-red-100"
            />
            <FeatureCard
              icon={AlertTriangle}
              title="Cambio Climático"
              description="Los vertederos generan metano, un gas 25 veces más potente que el CO2 para el calentamiento global."
              iconColor="text-orange-600"
              iconBgColor="bg-orange-100"
            />
            <FeatureCard
              icon={Factory}
              title="Agotamiento de Recursos"
              description="La producción excesiva agota recursos naturales y genera más residuos de los que el planeta puede procesar."
              iconColor="text-purple-600"
              iconBgColor="bg-purple-100"
            />
          </div>
        </div>
      </section>

      {/* Global Waste Statistics */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Alarmantes sobre los Residuos</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Las cifras actuales revelan la magnitud del problema de residuos a nivel mundial
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={Trash2}
              title="2.01 Mil Millones"
              description="Toneladas de residuos generados anualmente"
              iconColor="text-red-600"
            />
            <StatsCard
              icon={Factory}
              title="8 Millones"
              description="Toneladas de plástico llegan al océano cada año"
              iconColor="text-purple-600"
            />
            <StatsCard
              icon={Recycle}
              title="9%"
              description="Del plástico mundial se recicla efectivamente"
              iconColor="text-green-600"
            />
            <StatsCard
              icon={AlertTriangle}
              title="3.4 Mil Millones"
              description="Toneladas de residuos se generarán en 2050"
              iconColor="text-orange-600"
            />
          </div>
        </div>
      </section>

      {/* Types of Waste */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Tipos de Residuos Más Problemáticos</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Conoce los diferentes tipos de residuos y su impacto específico en el medio ambiente
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Plásticos</h3>
              <p className="text-gray-600">Tardan hasta 1000 años en degradarse, forman islas de basura en océanos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electrónicos</h3>
              <p className="text-gray-600">Contienen metales pesados tóxicos que contaminan suelo y agua subterránea</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Orgánicos</h3>
              <p className="text-gray-600">Generan metano en vertederos, pero son compostables si se gestionan bien</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Químicos</h3>
              <p className="text-gray-600">
                Residuos tóxicos que requieren tratamiento especializado y disposición segura
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 R's Strategy */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">La Estrategia de las 3 R's</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Reduce, Reutiliza y Recicla: la fórmula más efectiva para minimizar nuestro impacto ambiental.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">REDUCE</h4>
                    <p className="text-gray-600">Consume menos, elige productos duraderos, evita el uso innecesario</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">REUTILIZA</h4>
                    <p className="text-gray-600">Dale una segunda vida a los objetos, repara en lugar de desechar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">RECICLA</h4>
                    <p className="text-gray-600">Separa correctamente, lleva a centros de reciclaje especializados</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard
                icon={Trash2}
                title="75%"
                description="De residuos son reciclables pero no se reciclan"
                iconColor="text-red-600"
              />
              <StatsCard
                icon={Recycle}
                title="1 Tonelada"
                description="De papel reciclado salva 17 árboles"
                iconColor="text-green-600"
              />
              <StatsCard
                icon={Factory}
                title="95%"
                description="Menos energía usa reciclar aluminio vs. producir nuevo"
                iconColor="text-blue-600"
              />
              <StatsCard
                icon={Leaf}
                title="30%"
                description="De residuos domésticos son compostables"
                iconColor="text-emerald-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Cómo Puedes Reducir tus Residuos</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Acciones concretas que puedes implementar hoy mismo para minimizar tu huella de residuos
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Consume Conscientemente</h3>
              <p className="text-gray-600 mb-6">
                Compra solo lo necesario, elige productos con menos empaque, opta por alternativas reutilizables.
              </p>
              <div className="text-sm text-red-600 font-medium">Impacto: Preventivo</div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Separa y Recicla</h3>
              <p className="text-gray-600 mb-6">
                Aprende a separar correctamente, lleva residuos especiales a centros especializados, compostea
                orgánicos.
              </p>
              <div className="text-sm text-green-600 font-medium">Impacto: Transformador</div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educa y Comparte</h3>
              <p className="text-gray-600 mb-6">
                Enseña a otros sobre gestión de residuos, organiza limpiezas comunitarias, comparte conocimiento.
              </p>
              <div className="text-sm text-purple-600 font-medium">Impacto: Multiplicador</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡Cada Residuo Cuenta, Cada Acción Importa!"
        description="El planeta no puede procesar la cantidad de residuos que generamos. Reduce tu consumo, reutiliza objetos, recicla correctamente y educa a otros. Juntos podemos crear un futuro más limpio y sostenible."
        backgroundColor="bg-gradient-to-br from-gray-300 to-gray-500"
      />
      
    </div>
  )
}
