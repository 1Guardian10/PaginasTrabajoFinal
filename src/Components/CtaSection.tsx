interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText?: string
  backgroundColor?: string
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  backgroundColor = "bg-green-600",
}: CTASectionProps) {
  return (
    <section className={`${backgroundColor} py-20 text-white`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-green-700 px-6 py-2 rounded hover:bg-gray-100 font-medium">
            {primaryButtonText}
          </button>
          {secondaryButtonText && (
            <button className="bg-transparent border border-white px-6 py-2 rounded hover:bg-white hover:text-green-700 font-medium">
              {secondaryButtonText}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
