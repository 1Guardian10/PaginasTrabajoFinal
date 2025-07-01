import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { TreePine, Leaf, Shield, Droplets, Wind, Users, Heart, Sprout } from "lucide-react"
import { AudioAmbiental } from "../../Components/AudioAmbiental"
import { VideoPlayer } from "../../Components/VideoPlayer"

export default function BosquesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero + Video al lado */}
      <section className="bg-gradient-to-br from-green-100 to-emerald-200 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroSection
              badge="IMPORTANCIA DE LOS BOSQUES"
              title="LOS PULMONES"
              subtitle="DE NUESTRO PLANETA"
              description="Los bosques regulan el clima, purifican el aire y albergan el 80% de la biodiversidad terrestre. Aprende por qué son vitales y cómo puedes protegerlos."
            />
          </div>
          <div className="lg:w-1/2 w-full max-w-xl mx-auto">
            <VideoPlayer
              src="/Video/bosques.mp4"
              poster="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* 2. ¿Por qué son importantes? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Por Qué Son Importantes los Bosques?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Son nuestros principales aliados contra el cambio climático.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wind}
              title="Regulación Climática"
              description="Absorben CO2 y generan oxígeno, mitigando el calentamiento global."
              iconColor="text-blue-500"
              iconBgColor="bg-blue-100"
            />
            <FeatureCard
              icon={Droplets}
              title="Ciclo del Agua"
              description="Mantienen la humedad del suelo y previenen desastres naturales."
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
            />
            <FeatureCard
              icon={Heart}
              title="Biodiversidad"
              description="Albergan millones de especies animales y vegetales únicas."
              iconColor="text-red-600"
              iconBgColor="bg-red-100"
            />
          </div>
        </div>
      </section>

      {/* 3. Datos duros en formato estadístico */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Alarmantes</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            La realidad que enfrentan los bosques en cifras impactantes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard icon={TreePine} title="10M" description="Hectáreas perdidas al año" iconColor="text-red-600" />
            <StatsCard icon={Leaf} title="31%" description="Del planeta cubierto por bosques" iconColor="text-green-600" />
            <StatsCard icon={Wind} title="2.6 Gt" description="CO₂ absorbido anualmente" iconColor="text-blue-600" />
            <StatsCard icon={Users} title="1.6 B" description="Personas que dependen de ellos" iconColor="text-purple-600" />
          </div>
        </div>
      </section>

      {/* 4. Tipos de bosques (interactiva visual) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Tipos de Bosques</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">Cada tipo de bosque cumple un rol único.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TreePine, title: "Tropicales", desc: "Cerca del ecuador, con biodiversidad increíble.", color: "text-green-700", bg: "bg-green-100" },
              { icon: Leaf, title: "Templados", desc: "Bosques de clima moderado y árboles caducifolios.", color: "text-emerald-600", bg: "bg-emerald-100" },
              { icon: Sprout, title: "Boreales", desc: "Taigas frías del norte con coníferas resistentes.", color: "text-lime-600", bg: "bg-lime-100" },
              { icon: Shield, title: "Manglares", desc: "Protegen costas de tormentas y erosion.", color: "text-teal-600", bg: "bg-teal-100" },
            ].map(({ icon: Icon, title, desc, color, bg }, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${bg}`}>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Amenazas a los bosques */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Amenazas que Enfrentan</h2>
              <p className="text-gray-600 text-lg mb-8">
                Desde incendios hasta la urbanización, los bosques están en peligro.
              </p>
              {[
                ["bg-red-500", "Deforestación para agricultura"],
                ["bg-orange-500", "Incendios forestales"],
                ["bg-yellow-500", "Tala ilegal"],
                ["bg-blue-500", "Cambio climático"],
                ["bg-purple-500", "Urbanización descontrolada"],
              ].map(([color, label], i) => (
                <div key={i} className="flex items-center space-x-3 mb-3">
                  <div className={`w-3 h-3 ${color} rounded-full`}></div>
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <StatsCard icon={TreePine} title="Amazonas" description="Perdió 17% de su superficie" iconColor="text-red-600" />
              <StatsCard icon={Leaf} title="Indonesia" description="6M ha. perdidas por año" iconColor="text-orange-600" />
              <StatsCard icon={Wind} title="Congo" description="Deforestación creció 5%" iconColor="text-yellow-600" />
              <StatsCard icon={Shield} title="Global" description="Equivalente a Grecia por año" iconColor="text-red-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. ¿Cómo ayudar? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Cómo Puedes Ayudar?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Desde casa puedes hacer mucho por los bosques.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TreePine, color: "green", title: "Consume Responsable", desc: "Usa productos con certificación y recicla.", impact: "Alto" },
              { icon: Users, color: "blue", title: "Educa y Difunde", desc: "Comparte esta información y crea conciencia.", impact: "Multiplicador" },
              { icon: Heart, color: "purple", title: "Apoya ONG's", desc: "Dona o participa en programas de reforestación.", impact: "Directo" },
            ].map(({ icon: Icon, color, title, desc, impact }, i) => (
              <div key={i} className={`bg-${color}-50 p-8 rounded-xl shadow hover:scale-105 transition-transform`}>
                <div className={`w-16 h-16 bg-${color}-100 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 text-${color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <span className={`text-sm font-medium text-${color}-600`}>Impacto: {impact}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Llamado final + audio */}
      <CTASection
        title="¡Los Bosques Nos Necesitan Ahora!"
        description="Cada árbol cuenta, cada acción importa. Comparte, actúa y protege nuestros pulmones verdes."
        backgroundColor="bg-gradient-to-r from-green-600 to-emerald-500"
      />
      <AudioAmbiental src="/audio/bosque.mp3" loop autoPlay={false} />
    </div>
  )
}
