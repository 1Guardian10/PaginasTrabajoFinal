import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
  iconBgColor?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-gray-800",
  iconBgColor = "bg-gray-100",
}: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center border border-gray-100">
      <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${iconBgColor} shadow-inner`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
