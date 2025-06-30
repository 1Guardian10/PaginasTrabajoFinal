import type { ReactNode } from "react"

interface HeroSectionProps {
  badge: string
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText?: string
  backgroundGradient?: string
  children?: ReactNode
}

export function HeroSection({
  badge,
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundGradient = "from-white to-white",
  children,
}: HeroSectionProps) {
  return (
    <section className={`py-20 bg-gradient-to-b ${backgroundGradient}`}>
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 text-sm font-bold uppercase text-green-600">{badge}</div>
        <h1 className="text-5xl font-bold text-gray-800 mb-2">{title}</h1>
        <h2 className="text-3xl text-emerald-600 mb-4">{subtitle}</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700">
            {primaryButtonText}
          </button>
          {secondaryButtonText && (
            <button className="bg-white border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-50">
              {secondaryButtonText}
            </button>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
