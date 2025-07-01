import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { Sun, Zap, Home, Factory, TrendingUp, DollarSign, Shield, Leaf } from "lucide-react"
import { VideoPlayer } from "../../Components/VideoPlayer"

export default function EnergiaSolarPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section con video al costado */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroSection
              badge="ENERGÍA SOLAR"
              title="EL PODER DEL SOL"
              subtitle="ENERGÍA LIMPIA"
              description="La energía solar es una de las fuentes renovables más prometedoras. Aprende cómo funciona, sus beneficios y cómo aprovecharla en tu vida."
            />
          </div>
          <div className="lg:w-1/2 w-full max-w-xl mx-auto">
            <VideoPlayer
              src="/Video/Solar.mp4"
              poster="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* ¿Cómo funciona la energía solar? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Cómo Funciona la Energía Solar?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Convertimos la luz solar en electricidad mediante un sistema limpio y tecnológico.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Sun}
              title="Captación Solar"
              description="Los paneles capturan fotones y generan corriente continua."
              iconColor="text-yellow-600"
              iconBgColor="bg-yellow-100"
            />
            <FeatureCard
              icon={Zap}
              title="Conversión de Energía"
              description="Un inversor transforma esa energía en corriente alterna."
              iconColor="text-orange-600"
              iconBgColor="bg-orange-100"
            />
            <FeatureCard
              icon={Home}
              title="Uso Doméstico"
              description="La energía se usa en el hogar o se almacena para la noche."
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
            />
          </div>
        </div>
      </section>

      {/* Datos Globales */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Globales de Energía Solar</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Cifras que demuestran el crecimiento y potencial solar en el mundo.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard icon={Sun} title="1,177 GW" description="Capacidad instalada global en 2022" iconColor="text-yellow-600" />
            <StatsCard icon={TrendingUp} title="22%" description="Crecimiento anual de instalaciones" iconColor="text-green-600" />
            <StatsCard icon={Leaf} title="1.2 Gt" description="CO₂ evitado anualmente" iconColor="text-green-600" />
            <StatsCard icon={DollarSign} title="85%" description="Reducción de costos desde 2010" iconColor="text-blue-600" />
          </div>
        </div>
      </section>

      {/* Beneficios de la energía solar */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texto con íconos */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Beneficios de la Energía Solar</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Energía limpia, confiable y accesible para hogares y empresas.
              </p>

              {[
                { icon: Leaf, text: "Cero emisiones de gases contaminantes", color: "text-green-600" },
                { icon: DollarSign, text: "Reducción significativa de costos energéticos", color: "text-green-600" },
                { icon: Shield, text: "Fuente confiable e inagotable", color: "text-blue-600" },
                { icon: TrendingUp, text: "Aumenta el valor de tu propiedad", color: "text-purple-600" },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={i} className="flex items-center space-x-3 mb-3">
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            {/* Stats compactos */}
            <div className="grid grid-cols-2 gap-6">
              <StatsCard icon={Sun} title="Abundante" description="El sol brinda 10,000x más energía de la que usamos" iconColor="text-yellow-600" />
              <StatsCard icon={Leaf} title="Limpia" description="Sin contaminación durante operación" iconColor="text-green-600" />
              <StatsCard icon={DollarSign} title="Económica" description="Costos cada vez más bajos" iconColor="text-blue-600" />
              <StatsCard icon={Shield} title="Duradera" description="Paneles con 25-30 años de vida útil" iconColor="text-purple-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Cómo puedes aprovechar la energía solar */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Cómo Aprovechar la Energía Solar?</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Opciones accesibles para hogares, comunidades y empresas.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "En tu Hogar",
                desc: "Instala paneles en el techo, calentadores solares o luces LED solares.",
                bg: "bg-yellow-100",
                color: "text-yellow-600",
                footer: "Ahorro: 50–90% en la factura"
              },
              {
                icon: Factory,
                title: "En la Comunidad",
                desc: "Apoya o lidera proyectos comunitarios solares y políticas públicas.",
                bg: "bg-blue-100",
                color: "text-blue-600",
                footer: "Impacto: Masivo"
              },
              {
                icon: Leaf,
                title: "Cambios Simples",
                desc: "Usa cargadores solares, lámparas solares o productos ecoenergéticos.",
                bg: "bg-green-100",
                color: "text-green-600",
                footer: "Costo: Desde $20 USD"
              }
            ].map(({ icon: Icon, title, desc, bg, color, footer }, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${bg}`}>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <span className="text-sm text-gray-500">{footer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¡Ilumina Tu Futuro con Energía Solar!"
        description="La energía solar es clave para un futuro sostenible. Aprende, comparte e intégrala en tu vida diaria."
        backgroundColor="bg-gradient-to-r from-yellow-500 to-orange-500"
      />
    </div>
  )
}
