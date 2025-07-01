import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import {Droplets,Waves,FingerprintIcon as Faucet,CloudRain,Users,Heart,Shield} from "lucide-react"
import { VideoPlayer } from "../../Components/VideoPlayer"
import { AudioAmbiental } from "../../Components/AudioAmbiental"

export default function DesperdicioAguaPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* 1. Hero + Video al lado */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroSection
              badge="CRISIS HÍDRICA MUNDIAL"
              title="CADA GOTA"
              subtitle="ES VIDA"
              description="El agua es el recurso más valioso del planeta, pero la desperdiciamos a un ritmo alarmante. Mientras millones carecen de acceso al agua potable, otros la malgastan sin pensar en las consecuencias. Aprende cómo conservar este recurso vital."
            />
          </div>
          <div className="lg:w-1/2 w-full max-w-xl mx-auto">
            <VideoPlayer
              src="/Video/Agua.mp4"
              poster="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* 2. ¿Por qué conservar el agua? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Por Qué Debemos Conservar el Agua?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Menos del 1% del agua dulce del planeta está disponible para el consumo humano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Droplets}
              title="Recurso Limitado"
              description="Cada gota cuenta: solo el 0.3% del agua es accesible y potable."
              iconColor="text-blue-500"
              iconBgColor="bg-blue-100"
            />
            <FeatureCard
              icon={Users}
              title="Crisis Humanitaria"
              description="2 mil millones de personas no tienen acceso a agua segura."
              iconColor="text-red-600"
              iconBgColor="bg-red-100"
            />
            <FeatureCard
              icon={Waves}
              title="Ecosistemas Amenazados"
              description="La sobreexplotación afecta ríos, lagos y acuíferos."
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
            />
          </div>
        </div>
      </section>

      {/* 3. Datos alarmantes */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Alarmantes</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            El desperdicio de agua amenaza nuestra sostenibilidad global.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard icon={Droplets} title="30%" description="Del agua potable se desperdicia globalmente" iconColor="text-blue-600" />
            <StatsCard icon={Faucet} title="10%" description="Se pierde por fugas domésticas" iconColor="text-cyan-600" />
            <StatsCard icon={Waves} title="70%" description="Del agua dulce se usa en agricultura" iconColor="text-teal-600" />
            <StatsCard icon={CloudRain} title="1,400 L" description="Consumo diario por persona promedio" iconColor="text-indigo-600" />
          </div>
        </div>
      </section>

      {/* 4. Fuentes de desperdicio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Fuentes de Desperdicio</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Identifica los puntos críticos para actuar con conciencia.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Faucet, title: "Fugas Domésticas", desc: "Una fuga puede desperdiciar hasta 34,000 L al año.", bg: "bg-blue-100", color: "text-blue-700" },
              { icon: Waves, title: "Riego Ineficiente", desc: "Hasta 50% del agua de riego se pierde.", bg: "bg-cyan-100", color: "text-cyan-600" },
              { icon: Droplets, title: "Duchas Largas", desc: "10 min = 300 litros. Acorta tu ducha.", bg: "bg-teal-100", color: "text-teal-600" },
              { icon: Shield, title: "Industria", desc: "Procesos ineficientes desperdician millones de litros.", bg: "bg-indigo-100", color: "text-indigo-600" },
            ].map(({ icon: Icon, title, desc, bg, color }, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all">
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

      {/* 5. Consejos para ahorrar agua */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Consejos para Ahorrar Agua</h2>
              <p className="text-gray-600 text-lg mb-8">
                Pequeñas acciones pueden generar un gran cambio.
              </p>
              {[
                ["bg-blue-500", "Cierra el grifo mientras te cepillas"],
                ["bg-cyan-500", "Duchas de máximo 5 minutos"],
                ["bg-teal-500", "Repara fugas al instante"],
                ["bg-indigo-500", "Usa lavadora/lavavajillas llenos"],
                ["bg-purple-500", "Instala dispositivos ahorradores"],
              ].map(([color, label], i) => (
                <div key={i} className="flex items-center space-x-3 mb-3">
                  <div className={`w-3 h-3 ${color} rounded-full`}></div>
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard icon={Droplets} title="40 L" description="Ahorras cerrando el grifo" iconColor="text-blue-600" />
              <StatsCard icon={Waves} title="100 L" description="Menos con duchas cortas" iconColor="text-cyan-600" />
              <StatsCard icon={Faucet} title="15%" description="Menos consumo con reguladores" iconColor="text-teal-600" />
              <StatsCard icon={CloudRain} title="50%" description="Ahorro con riego por goteo" iconColor="text-indigo-600" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Acciones para conservar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Cómo Puedes Ayudar?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Cada acción cuenta para preservar el agua.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Droplets, color: "blue", title: "Cambia Tus Hábitos", desc: "Duchas cortas, cerrar grifos, reparar fugas.", impacto: "Inmediato" },
              { icon: Waves, color: "cyan", title: "Tecnología Eficiente", desc: "Instala riego por goteo y aireadores.", impacto: "Duradero" },
              { icon: Heart, color: "teal", title: "Educa y Comparte", desc: "Enseña y sensibiliza a otros.", impacto: "Multiplicador" },
            ].map(({ icon: Icon, color, title, desc, impacto }, i) => (
              <div key={i} className={`bg-${color}-50 p-8 rounded-xl shadow hover:scale-105 transition-transform`}>
                <div className={`w-16 h-16 bg-${color}-100 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 text-${color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <span className={`text-sm font-medium text-${color}-600`}>Impacto: {impacto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¡El Agua es Vida, No la Desperdicies!"
        description="Cada gota cuenta. Adopta hábitos sostenibles, instala tecnología eficiente y educa a tu comunidad."
        backgroundColor="bg-gradient-to-r from-blue-600 to-cyan-500"
      />
      <AudioAmbiental src="/audio/Agua.mp3" loop autoPlay={false} />
    </div>
  )
}
