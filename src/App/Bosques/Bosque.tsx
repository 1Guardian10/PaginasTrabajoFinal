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
      {/* Hero Section */}
      <HeroSection
        badge="IMPORTANCIA DE LOS BOSQUES"
        title="LOS PULMONES"
        subtitle="DE NUESTRO PLANETA"
        description="Los bosques son ecosistemas vitales que regulan el clima, purifican el aire y el agua, y albergan el 80% de la biodiversidad terrestre. Aprende por qué son tan importantes y cómo puedes ayudar a protegerlos desde tu comunidad."
        primaryButtonText="Descubrir Más"
        secondaryButtonText="Ver Datos"
        backgroundGradient="from-green-50 to-emerald-50"
      >
        <div className="w-96 mx-auto relative overflow-hidden">
          <VideoPlayer
            src="/Video/bosques.mp4"
            poster="/placeholder.svg?height=400&width=600"
          />
        </div>

        {/* Floating icons */}
        <div className="relative mt-6 flex justify-center gap-8">
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Leaf className="w-6 h-6 text-green-500" />
          </div>
          <div className="bg-white rounded-full p-3 shadow-lg">
            <Heart className="w-6 h-6 text-red-500" />
          </div>
        </div>
      </HeroSection>

      {/* Why Forests Matter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Por Qué Son Importantes los Bosques?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Los bosques proporcionan servicios ecosistémicos esenciales para la vida en la Tierra
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Wind}
              title="Regulación Climática"
              description="Los bosques absorben CO2 de la atmósfera y liberan oxígeno, ayudando a regular el clima global y combatir el cambio climático."
              buttonText="Aprender Más"
              iconColor="text-blue-500"
              iconBgColor="bg-blue-100"
              buttonColor="border-blue-500 text-blue-600 hover:bg-blue-50"
            />

            <FeatureCard
              icon={Droplets}
              title="Ciclo del Agua"
              description="Los árboles regulan el ciclo hidrológico, previenen inundaciones, conservan el agua y mantienen la humedad del suelo."
              buttonText="Descubrir"
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
              buttonColor="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
            />

            <FeatureCard
              icon={Heart}
              title="Biodiversidad"
              description="Los bosques albergan el 80% de las especies terrestres, proporcionando hábitat y alimento para millones de plantas y animales."
              buttonText="Explorar"
              iconColor="text-red-600"
              iconBgColor="bg-red-100"
              buttonColor="border-red-500 text-red-600 hover:bg-red-50"
            />
          </div>
        </div>
      </section>

      {/* Global Forest Facts */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Datos Alarmantes sobre los Bosques</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              La situación actual de los bosques mundiales requiere atención urgente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={TreePine}
              title="10 Millones"
              description="Hectáreas de bosque perdidas anualmente"
              iconColor="text-red-600"
            />

            <StatsCard
              icon={Leaf}
              title="31%"
              description="De la superficie terrestre cubierta por bosques"
              iconColor="text-green-600"
            />

            <StatsCard
              icon={Wind}
              title="2.6 Gt"
              description="CO2 absorbido por bosques anualmente"
              iconColor="text-blue-600"
            />

            <StatsCard
              icon={Users}
              title="1.6 Mil Millones"
              description="Personas dependen de los bosques para vivir"
              iconColor="text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Types of Forests */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Tipos de Bosques en el Mundo</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Cada tipo de bosque tiene características únicas y cumple funciones específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bosques Tropicales</h3>
              <p className="text-gray-600">Selvas húmedas cerca del ecuador con la mayor biodiversidad del planeta</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bosques Templados</h3>
              <p className="text-gray-600">Bosques de clima moderado con árboles caducifolios y coníferas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bosques Boreales</h3>
              <p className="text-gray-600">Taiga del norte con coníferas adaptadas a climas fríos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manglares</h3>
              <p className="text-gray-600">Bosques costeros que protegen contra tsunamis y huracanes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Threats to Forests */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Amenazas a los Bosques</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Los bosques enfrentan múltiples amenazas que ponen en riesgo su supervivencia y los servicios que
                proporcionan.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Deforestación para agricultura y ganadería</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Incendios forestales cada vez más frecuentes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Tala ilegal y sobreexplotación</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Cambio climático y sequías prolongadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Expansión urbana descontrolada</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard
                icon={TreePine}
                title="Amazonas"
                description="Perdió 17% de su superficie original"
                iconColor="text-red-600"
              />

              <StatsCard
                icon={Leaf}
                title="Indonesia"
                description="Pierde 6 millones de hectáreas anuales"
                iconColor="text-orange-600"
              />

              <StatsCard
                icon={Wind}
                title="Congo"
                description="Deforestación aumentó 5% en 2022"
                iconColor="text-yellow-600"
              />

              <StatsCard
                icon={Shield}
                title="Global"
                description="Perdemos un bosque del tamaño de Grecia cada año"
                iconColor="text-red-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Cómo Puedes Ayudar a Proteger los Bosques</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Acciones que puedes tomar desde tu hogar para contribuir a la conservación forestal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Consume Responsablemente</h3>
              <p className="text-gray-600 mb-6">
                Elige productos con certificación forestal sostenible, reduce el uso de papel, recicla y reutiliza.
              </p>
              <div className="text-sm text-green-600 font-medium">Impacto: Alto</div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Educa y Comparte</h3>
              <p className="text-gray-600 mb-6">
                Informa a otros sobre la importancia de los bosques, comparte contenido educativo en redes sociales.
              </p>
              <div className="text-sm text-blue-600 font-medium">Impacto: Multiplicador</div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Apoya Organizaciones</h3>
              <p className="text-gray-600 mb-6">
                Dona a organizaciones de conservación, participa en programas de reforestación locales.
              </p>
              <div className="text-sm text-purple-600 font-medium">Impacto: Directo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡Los Bosques Nos Necesitan Ahora!"
        description="Cada árbol cuenta, cada acción importa. Aprende más sobre la importancia de los bosques, comparte esta información y toma medidas concretas para proteger estos ecosistemas vitales."
        primaryButtonText="Compartir Información"
        secondaryButtonText="Explorar Más Temas"
        backgroundColor="bg-green-600"
      />
      <AudioAmbiental src="/audio/bosque.mp3" loop autoPlay={false} />
    </div>
  )
}
