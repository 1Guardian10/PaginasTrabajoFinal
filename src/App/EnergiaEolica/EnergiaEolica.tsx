import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { Wind, Zap, Building, MapPin, TrendingUp, Leaf, Shield, Users } from "lucide-react"
import { AudioAmbiental } from "../../Components/AudioAmbiental"
import { VideoPlayer } from "../../Components/VideoPlayer"

export default function EnergiaEolicaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badge="ENERGÍA EÓLICA"
        title="APROVECHA LA FUERZA"
        subtitle="DEL VIENTO"
        description="La energía eólica transforma la fuerza del viento en electricidad limpia y renovable. Nuestras soluciones eólicas ofrecen una alternativa sostenible y eficiente para generar energía a gran escala, contribuyendo significativamente a la reducción de emisiones de carbono."
        primaryButtonText="Explorar Proyectos"
        secondaryButtonText="Consultar Viabilidad"
        backgroundGradient="from-blue-50 to-cyan-50"
      >
        <div className="w-96 mx-auto relative overflow-hidden">
          <VideoPlayer
            src="/Video/viento.mp4"
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

      {/* Wind Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Soluciones Eólicas</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Proyectos eólicos adaptados a diferentes escalas y necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wind}
              title="Parques Eólicos"
              description="Desarrollo de parques eólicos de gran escala para generación masiva de energía limpia. Proyectos que pueden abastecer ciudades enteras."
              buttonText="Ver Proyectos"
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
              buttonColor="border-blue-500 text-blue-600 hover:bg-blue-50"
            />

            <FeatureCard
              icon={Building}
              title="Eólica Urbana"
              description="Turbinas eólicas de menor escala para entornos urbanos y comerciales. Soluciones integradas para edificios y complejos industriales."
              buttonText="Consultar"
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
              buttonColor="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
            />

            <FeatureCard
              icon={MapPin}
              title="Eólica Marina"
              description="Proyectos eólicos offshore que aprovechan los vientos marinos constantes para generar energía de forma más eficiente."
              buttonText="Explorar"
              iconColor="text-teal-600"
              iconBgColor="bg-teal-100"
              buttonColor="border-teal-500 text-teal-600 hover:bg-teal-50"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ventajas de la Energía Eólica</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={Leaf}
              title="Energía Limpia"
              description="Cero emisiones de CO2 durante operación"
              iconColor="text-green-600"
            />

            <StatsCard
              icon={TrendingUp}
              title="Alta Eficiencia"
              description="Factor de capacidad del 35-45%"
              iconColor="text-blue-600"
            />

            <StatsCard
              icon={Users}
              title="Generación de Empleo"
              description="Miles de empleos en construcción y operación"
              iconColor="text-purple-600"
            />

            <StatsCard
              icon={Shield}
              title="Vida Útil Extendida"
              description="Operación confiable por 20-25 años"
              iconColor="text-orange-600"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Tecnología de Vanguardia</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Utilizamos las turbinas eólicas más avanzadas del mercado, con sistemas de control inteligente que
                optimizan la captura de energía del viento en todas las condiciones climáticas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Turbinas de última generación con mayor eficiencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Sistemas de monitoreo y control remoto 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wind className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Adaptación automática a condiciones de viento</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard icon={Wind} title="Potencia" description="Hasta 15 MW por turbina" iconColor="text-blue-600" />

              <StatsCard
                icon={TrendingUp}
                title="Eficiencia"
                description="95% de disponibilidad operativa"
                iconColor="text-green-600"
              />

              <StatsCard icon={MapPin} title="Alcance" description="Vientos desde 3 m/s" iconColor="text-cyan-600" />

              <StatsCard
                icon={Shield}
                title="Durabilidad"
                description="Resistencia a vientos extremos"
                iconColor="text-purple-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡Impulsa el Futuro con Energía Eólica!"
        description="Forma parte de la revolución energética. Desarrollamos proyectos eólicos que generan energía limpia y beneficios económicos a largo plazo."
        primaryButtonText="Evaluar Proyecto Eólico"
        secondaryButtonText="Contactar Especialista"
        backgroundColor="bg-blue-600"
      />
      <AudioAmbiental src="/audio/viento.mp3" loop autoPlay={false} />
    </div>
  )
}
