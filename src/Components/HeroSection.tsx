import type { ReactNode } from "react"

interface HeroSectionProps {
  badge: string
  title: string
  subtitle: string
  description: string
  backgroundGradient?: string
  children?: ReactNode
}

export function HeroSection({
  badge,
  title,
  subtitle,
  description,
  backgroundGradient = "from-white to-white",
  children,
}: HeroSectionProps) {
  return (
    <section className={`py-24 bg-gradient-to-b ${backgroundGradient}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm tracking-wide">
          {badge}
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">{title}</h1>
        <h2 className="text-3xl md:text-4xl text-emerald-600 font-semibold mb-6">{subtitle}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">{description}</p>
        {children}
      </div>
    </section>
  )
}
