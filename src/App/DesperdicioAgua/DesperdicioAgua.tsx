import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { Droplets, Waves, FingerprintIcon as Faucet, CloudRain, Users, Heart, Shield } from "lucide-react"
import { VideoPlayer } from "../../Components/VideoPlayer"
import { AudioAmbiental } from "../../Components/AudioAmbiental"

export default function DesperdicioAguaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badge="CRISIS HÍDRICA MUNDIAL"
        title="CADA GOTA"
        subtitle="ES VIDA"
        description="El agua es el recurso más valioso de nuestro planeta, pero la desperdiciamos a un ritmo alarmante. Mientras millones carecen de acceso al agua potable, otros la malgastan sin pensar en las consecuencias. Aprende cómo conservar este recurso vital."
        primaryButtonText="Conservar Agua"
        secondaryButtonText="Ver Crisis"
        backgroundGradient="from-blue-50 to-cyan-50"
      >
        <div className="w-96 mx-auto relative overflow-hidden">
          <VideoPlayer src="/Video/Agua.mp4" poster="/placeholder.svg?height=400&width=600" />
        </div>

        {/* Floating icons */}
        <div className="relative mt-6 flex justify-center gap-8">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Droplets className="w-6 h-6 text-blue-500" />
          </div>
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Waves className="w-6 h-6 text-cyan-500" />
          </div>
        </div>
      </HeroSection>

      {/* Why Water Conservation Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Por Qué Debemos Conservar el Agua?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              El agua dulce representa solo el 3% del agua del planeta, y gran parte está congelada o inaccesible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Droplets}
              title="Recurso Limitado"
              description="Solo el 0.3% del agua dulce del planeta está disponible para consumo humano. Cada gota desperdiciada reduce este recurso vital."
              buttonText="Aprender Más"
              iconColor="text-blue-500"
              iconBgColor="bg-blue-100"
              buttonColor="border-blue-500 text-blue-600 hover:bg-blue-50"
            />

            <FeatureCard
              icon={Users}
              title="Crisis Humanitaria"
              description="2 mil millones de personas carecen de acceso a agua potable segura, mientras otros la desperdician diariamente."
              buttonText="Descubrir"
              iconColor="text-red-600"
              iconBgColor="bg-red-100"
              buttonColor="border-red-500 text-red-600 hover:bg-red-50"
            />

            <FeatureCard
              icon={Waves}
              title="Ecosistemas en Peligro"
              description="La sobreexplotación del agua amenaza ríos, lagos y acuíferos, destruyendo hábitats naturales."
              buttonText="Explorar"
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
              buttonColor="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
            />
          </div>
        </div>
      </section>

      {/* Water Waste Statistics */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Alarmantes sobre el Desperdicio de Agua</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Las cifras del desperdicio de agua revelan la urgencia de cambiar nuestros hábitos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={Droplets}
              title="30%"
              description="Del agua potable se desperdicia globalmente"
              iconColor="text-blue-600"
            />

            <StatsCard
              icon={Faucet}
              title="10%"
              description="Se pierde por fugas domésticas"
              iconColor="text-cyan-600"
            />

            <StatsCard
              icon={Waves}
              title="70%"
              description="Del agua dulce se usa en agricultura"
              iconColor="text-teal-600"
            />

            <StatsCard
              icon={CloudRain}
              title="1,400 Litros"
              description="Promedio de consumo diario por persona"
              iconColor="text-indigo-600"
            />
          </div>
        </div>
      </section>

      {/* Sources of Water Waste */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Principales Fuentes de Desperdicio</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Identifica dónde se desperdicia más agua para tomar medidas efectivas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Faucet className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fugas Domésticas</h3>
              <p className="text-gray-600">Una fuga pequeña puede desperdiciar hasta 34,000 litros al año</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Riego Ineficiente</h3>
              <p className="text-gray-600">Sistemas de riego mal diseñados desperdician hasta 50% del agua</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Duchas Largas</h3>
              <p className="text-gray-600">Una ducha de 10 minutos consume entre 150-300 litros de agua</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Industria</h3>
              <p className="text-gray-600">Procesos industriales ineficientes desperdician millones de litros</p>
            </div>
          </div>
        </div>
      </section>

      {/* Water Conservation Tips */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Consejos para Ahorrar Agua en Casa</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Pequeños cambios en tus hábitos diarios pueden generar grandes ahorros de agua.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Cierra el grifo mientras te cepillas los dientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">Toma duchas más cortas (máximo 5 minutos)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">Repara fugas inmediatamente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                  <span className="text-gray-700">Usa la lavadora y lavavajillas con carga completa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Instala dispositivos ahorradores de agua</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard
                icon={Droplets}
                title="40 Litros"
                description="Ahorras cerrando el grifo al cepillarte"
                iconColor="text-blue-600"
              />

              <StatsCard
                icon={Waves}
                title="100 Litros"
                description="Ahorras con duchas de 5 minutos"
                iconColor="text-cyan-600"
              />

              <StatsCard
                icon={Faucet}
                title="15%"
                description="Menos consumo con dispositivos ahorradores"
                iconColor="text-teal-600"
              />

              <StatsCard
                icon={CloudRain}
                title="50%"
                description="Menos agua con riego por goteo"
                iconColor="text-indigo-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Acciones para Conservar el Agua</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cada acción cuenta para preservar este recurso vital para las futuras generaciones
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cambia Tus Hábitos</h3>
              <p className="text-gray-600 mb-6">
                Adopta prácticas de ahorro de agua en tu rutina diaria: duchas cortas, cerrar grifos, reparar fugas.
              </p>
              <div className="text-sm text-blue-600 font-medium">Impacto: Inmediato</div>
            </div>

            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tecnología Eficiente</h3>
              <p className="text-gray-600 mb-6">
                Instala dispositivos ahorradores, sistemas de riego eficientes y electrodomésticos de bajo consumo.
              </p>
              <div className="text-sm text-cyan-600 font-medium">Impacto: Duradero</div>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educa y Comparte</h3>
              <p className="text-gray-600 mb-6">
                Enseña a otros sobre la importancia del agua, comparte consejos de ahorro en tu comunidad.
              </p>
              <div className="text-sm text-teal-600 font-medium">Impacto: Multiplicador</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡El Agua es Vida, No la Desperdicies!"
        description="Cada gota cuenta en la lucha contra la escasez de agua. Adopta hábitos de conservación, invierte en tecnología eficiente y educa a otros sobre la importancia de este recurso vital."
        primaryButtonText="Comenzar a Ahorrar"
        secondaryButtonText="Compartir Consejos"
        backgroundColor="bg-blue-600"
      />
      <AudioAmbiental src="/audio/Agua.mp3" loop autoPlay={false} />
    </div>
  )
}
