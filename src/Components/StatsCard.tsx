import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
}

export function StatsCard({ icon: Icon, title, description, iconColor = "text-gray-700" }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform border text-center">
      <div className="mb-4 flex justify-center items-center">
        <Icon className={`w-10 h-10 ${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  )
}
