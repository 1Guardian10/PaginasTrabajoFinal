import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { Sun, Zap, Home, Factory, TrendingUp, DollarSign, Shield, Leaf } from "lucide-react"
import { VideoPlayer } from "../../Components/VideoPlayer"

export default function EnergiaSolarPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badge="ENERGÍA SOLAR"
        title="EL PODER DEL SOL"
        subtitle="ENERGÍA LIMPIA"
        description="La energía solar es una de las fuentes de energía renovable más prometedoras para combatir el cambio climático. Aprende cómo funciona, sus beneficios ambientales y económicos, y cómo puedes aprovecharla en tu hogar o comunidad."
        primaryButtonText="Aprender Más"
        secondaryButtonText="Ver Datos"
        backgroundGradient="from-yellow-50 to-orange-50"
      >
        <div className="w-96 mx-auto relative overflow-hidden">
          <VideoPlayer
            src="/Video/Solar.mp4"
            poster="/placeholder.svg?height=400&width=600"
          />
        </div>
        {/* Floating icons */}
        <div className="relative mt-6 flex justify-center gap-8">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Leaf className="w-6 h-6 text-green-500" />
          </div>
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Zap className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </HeroSection>

      {/* How Solar Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Cómo Funciona la Energía Solar?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Entiende el proceso de conversión de luz solar en electricidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Sun}
              title="Captación Solar"
              description="Los paneles solares capturan la luz del sol mediante células fotovoltaicas que convierten los fotones en electricidad de corriente continua."
              buttonText="Más Detalles"
              iconColor="text-yellow-600"
              iconBgColor="bg-yellow-100"
              buttonColor="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            />

            <FeatureCard
              icon={Zap}
              title="Conversión de Energía"
              description="Un inversor convierte la corriente continua en corriente alterna, que es la que utilizamos en nuestros hogares y dispositivos eléctricos."
              buttonText="Aprender"
              iconColor="text-orange-600"
              iconBgColor="bg-orange-100"
              buttonColor="border-orange-500 text-orange-600 hover:bg-orange-50"
            />

            <FeatureCard
              icon={Home}
              title="Uso Doméstico"
              description="La electricidad generada puede usarse inmediatamente en el hogar o almacenarse en baterías para uso posterior, incluso durante la noche."
              buttonText="Explorar"
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
              buttonColor="border-blue-500 text-blue-600 hover:bg-blue-50"
            />
          </div>
        </div>
      </section>

      {/* Global Solar Facts */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Globales de Energía Solar</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cifras que demuestran el crecimiento y potencial de la energía solar mundial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={Sun}
              title="1,177 GW"
              description="Capacidad solar instalada globalmente en 2022"
              iconColor="text-yellow-600"
            />

            <StatsCard
              icon={TrendingUp}
              title="22%"
              description="Crecimiento anual de instalaciones solares"
              iconColor="text-green-600"
            />

            <StatsCard
              icon={Leaf}
              title="1.2 Gt"
              description="CO2 evitado anualmente por energía solar"
              iconColor="text-green-600"
            />

            <StatsCard
              icon={DollarSign}
              title="85%"
              description="Reducción de costos solares desde 2010"
              iconColor="text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Beneficios de la Energía Solar</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                La energía solar ofrece múltiples ventajas tanto para el medio ambiente como para la economía personal y
                global.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Cero emisiones de gases de efecto invernadero</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Reduce significativamente las facturas eléctricas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Fuente de energía inagotable y confiable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Aumenta el valor de las propiedades</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard
                icon={Sun}
                title="Abundante"
                description="El sol proporciona 10,000 veces más energía de la que usa la humanidad"
                iconColor="text-yellow-600"
              />

              <StatsCard
                icon={Leaf}
                title="Limpia"
                description="No produce contaminación durante su operación"
                iconColor="text-green-600"
              />

              <StatsCard
                icon={DollarSign}
                title="Económica"
                description="Costos de instalación cada vez más accesibles"
                iconColor="text-blue-600"
              />

              <StatsCard
                icon={Shield}
                title="Duradera"
                description="Paneles solares duran 25-30 años con mínimo mantenimiento"
                iconColor="text-purple-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Cómo Puedes Aprovechar la Energía Solar</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Opciones para incorporar energía solar en tu vida diaria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">En Tu Hogar</h3>
              <p className="text-gray-600 mb-6">
                Considera instalar paneles solares en tu techo, usar calentadores solares de agua, o dispositivos
                solares pequeños.
              </p>
              <div className="text-sm text-gray-500">Ahorro: 50-90% en electricidad</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">En Tu Comunidad</h3>
              <p className="text-gray-600 mb-6">
                Promueve proyectos solares comunitarios, apoya políticas de energía renovable en tu localidad.
              </p>
              <div className="text-sm text-gray-500">Impacto: Beneficia a toda la comunidad</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cambios Simples</h3>
              <p className="text-gray-600 mb-6">
                Usa cargadores solares, luces solares para jardín, y apoya empresas que usan energía renovable.
              </p>
              <div className="text-sm text-gray-500">Costo: Desde $20 USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡Ilumina Tu Futuro con Energía Solar!"
        description="La energía solar es clave para un futuro sostenible. Aprende más, comparte esta información y considera cómo puedes incorporar esta tecnología limpia en tu vida."
        primaryButtonText="Compartir Información"
        secondaryButtonText="Explorar Más Temas"
        backgroundColor="bg-yellow-600"
      />
    </div>
  )
}
