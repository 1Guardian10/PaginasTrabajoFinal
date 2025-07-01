import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import {Wind,Zap,Building,MapPin,TrendingUp,Leaf,Shield,Users} from "lucide-react"
import { AudioAmbiental } from "../../Components/AudioAmbiental"
import { VideoPlayer } from "../../Components/VideoPlayer"

export default function EnergiaEolicaPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero + Video al costado */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroSection
              badge="ENERGÍA EÓLICA"
              title="APROVECHA LA FUERZA"
              subtitle="DEL VIENTO"
              description="La energía eólica transforma la fuerza del viento en electricidad limpia y renovable. Es una alternativa sostenible que reduce las emisiones y promueve la independencia energética."
            />
          </div>
          <div className="lg:w-1/2 w-full max-w-xl mx-auto">
            <VideoPlayer
              src="/Video/viento.mp4"
              poster="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* Soluciones Eólicas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Soluciones Eólicas</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Proyectos personalizados para diferentes entornos y escalas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wind}
              title="Parques Eólicos"
              description="Infraestructura de gran escala para abastecer ciudades enteras con energía limpia."
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
            />
            <FeatureCard
              icon={Building}
              title="Eólica Urbana"
              description="Turbinas para edificios y centros urbanos, integradas arquitectónicamente."
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
            />
            <FeatureCard
              icon={MapPin}
              title="Eólica Marina"
              description="Turbinas offshore que capturan vientos marinos constantes con máxima eficiencia."
              iconColor="text-teal-600"
              iconBgColor="bg-teal-100"
            />
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Ventajas de la Energía Eólica</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <StatsCard icon={Leaf} title="Energía Limpia" description="Cero emisiones durante operación" iconColor="text-green-600" />
            <StatsCard icon={TrendingUp} title="Alta Eficiencia" description="Capacidad operativa del 35-45%" iconColor="text-blue-600" />
            <StatsCard icon={Users} title="Genera Empleo" description="Miles de puestos de trabajo técnicos" iconColor="text-purple-600" />
            <StatsCard icon={Shield} title="Larga Duración" description="Vida útil de hasta 25 años" iconColor="text-orange-600" />
          </div>
        </div>
      </section>

      {/* Tecnología de Vanguardia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Tecnología de Vanguardia</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Utilizamos turbinas inteligentes con sistemas de control adaptativo para maximizar la eficiencia y asegurar la estabilidad energética en todo tipo de clima.
              </p>

              {[
                { icon: Zap, text: "Turbinas de última generación con mayor eficiencia", color: "text-blue-600" },
                { icon: Shield, text: "Monitoreo y control remoto 24/7", color: "text-green-600" },
                { icon: Wind, text: "Adaptación automática a condiciones cambiantes", color: "text-cyan-600" },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center space-x-3 mb-4">
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard icon={Wind} title="Potencia" description="Hasta 15 MW por turbina" iconColor="text-blue-600" />
              <StatsCard icon={TrendingUp} title="Eficiencia" description="95% de disponibilidad operativa" iconColor="text-green-600" />
              <StatsCard icon={MapPin} title="Alcance" description="Funciona con vientos desde 3 m/s" iconColor="text-cyan-600" />
              <StatsCard icon={Shield} title="Resistencia" description="Diseño para vientos extremos" iconColor="text-purple-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡Impulsa el Futuro con Energía Eólica!"
        description="Únete a la transición energética. Nuestros proyectos eólicos generan beneficios sostenibles para las personas y el planeta."
        backgroundColor="bg-gradient-to-r from-blue-600 to-cyan-500"
      />
      <AudioAmbiental src="/audio/viento.mp3" loop autoPlay={false} />
    </div>
  )
}
