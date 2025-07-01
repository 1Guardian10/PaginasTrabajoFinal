import { HeroSection } from "../../Components/HeroSection"
import { FeatureCard } from "../../Components/FeatureCard"
import { StatsCard } from "../../Components/StatsCard"
import { CTASection } from "../../Components/CtaSection"
import { TreePine, Bird, Fish, Heart, Shield, Users, Camera } from "lucide-react"
import { VideoPlayer } from "../../Components/VideoPlayer"
import { AudioAmbiental } from "../../Components/AudioAmbiental"

export default function FaunaLocalPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <HeroSection
              badge="PROTECCIÓN DE FAUNA"
              title="CONSERVEMOS NUESTRA"
              subtitle="BIODIVERSIDAD LOCAL"
              description="La fauna local es el corazón de nuestros ecosistemas. Trabajamos incansablemente para proteger, conservar y restaurar los hábitats naturales, asegurando que las especies nativas prosperen para las futuras generaciones."
            />
          </div>
          <div className="lg:w-1/2 w-full max-w-xl mx-auto">
            <VideoPlayer
              src="/Video/Fauna.mp4"
              poster="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* Conservation Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Programas de Conservación</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Iniciativas integrales para la protección y restauración de la fauna local.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bird}
              title="Protección de Aves"
              description="Programas especializados para la conservación de aves migratorias y residentes. Creamos refugios seguros y corredores de vuelo."
              iconColor="text-blue-600"
              iconBgColor="bg-blue-100"
            />
            <FeatureCard
              icon={Fish}
              title="Ecosistemas Acuáticos"
              description="Restauración de ríos, lagos y humedales para proteger la vida acuática. Programas de limpieza y monitoreo de calidad del agua."
              iconColor="text-cyan-600"
              iconBgColor="bg-cyan-100"
            />
            <FeatureCard
              icon={TreePine}
              title="Reforestación"
              description="Plantación de especies nativas para restaurar hábitats naturales. Creamos bosques que sirven como hogar para la fauna local."
              iconColor="text-green-600"
              iconBgColor="bg-green-100"
            />
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestro Impacto</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Resultados tangibles en la conservación de la biodiversidad local.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              icon={Bird}
              title="150+ Especies"
              description="Aves protegidas y monitoreadas"
              iconColor="text-blue-600"
            />
            <StatsCard
              icon={TreePine}
              title="500 Hectáreas"
              description="Reforestadas anualmente"
              iconColor="text-green-600"
            />
            <StatsCard
              icon={Fish}
              title="25 Ecosistemas"
              description="Acuáticos restaurados"
              iconColor="text-cyan-600"
            />
            <StatsCard
              icon={Users}
              title="1000+ Voluntarios"
              description="Participando activamente"
              iconColor="text-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Rescue Center */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Centro de Rescate y Rehabilitación</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nuestro centro especializado brinda atención médica veterinaria y rehabilitación a animales heridos o huérfanos. Trabajamos para devolverlos a su hábitat natural cuando están listos.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span className="text-gray-700">Atención veterinaria especializada 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Instalaciones seguras y naturales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Equipo de biólogos y veterinarios expertos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Camera className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700">Monitoreo post-liberación</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatsCard
                icon={Heart}
                title="Rescates"
                description="200+ animales rescatados este año"
                iconColor="text-red-500"
              />
              <StatsCard
                icon={Shield}
                title="Rehabilitación"
                description="85% tasa de éxito en liberación"
                iconColor="text-green-600"
              />
              <StatsCard
                icon={Users}
                title="Voluntarios"
                description="50+ cuidadores especializados"
                iconColor="text-blue-600"
              />
              <StatsCard
                icon={Camera}
                title="Seguimiento"
                description="Monitoreo por 12 meses"
                iconColor="text-purple-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Cómo Puedes Ayudar</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Existen muchas formas de contribuir a la conservación de nuestra fauna local.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Voluntariado</h3>
              <p className="text-gray-600">
                Únete a nuestros programas de voluntariado y participa directamente en la conservación.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Donaciones</h3>
              <p className="text-gray-600">Apoya económicamente nuestros programas de rescate y conservación.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Adopta un Árbol</h3>
              <p className="text-gray-600">Contribuye a la reforestación adoptando árboles nativos.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ciencia Ciudadana</h3>
              <p className="text-gray-600">Participa en el monitoreo de especies reportando avistamientos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection
        title="¡Protejamos Juntos Nuestra Fauna Local!"
        description="Cada especie cuenta, cada hábitat importa. Únete a nuestra misión de conservar la biodiversidad para las futuras generaciones."
        backgroundColor="bg-green-600"
      />

      {/* Ambient Audio */}
      <AudioAmbiental src="/audio/fauna.mp3" loop autoPlay={false} />
      
    </div>
  )
}
