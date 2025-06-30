import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  iconColor?: string
  iconBgColor?: string
  buttonColor?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  buttonText,
  iconColor = "text-gray-800",
  iconBgColor = "bg-gray-100",
  buttonColor = "border-gray-300 text-gray-700 hover:bg-gray-100",
}: FeatureCardProps) {
  return (
    <div className="p-6 border rounded-lg text-center">
      <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${iconBgColor}`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className={`px-4 py-2 border rounded ${buttonColor}`} 
      >{buttonText}</button>
    </div>
  )
}
