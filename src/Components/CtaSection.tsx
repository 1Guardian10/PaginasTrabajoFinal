interface CTASectionProps {
  title: string
  description: string
  backgroundColor?: string
}

export function CTASection({
  title,
  description,
  backgroundColor = "bg-green-600",
}: CTASectionProps) {
  return (
    <section className={`${backgroundColor} py-20 text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">{title}</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6 leading-relaxed">{description}</p>
      </div>
    </section>

  )
}
