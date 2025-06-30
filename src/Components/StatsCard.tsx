import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor?: string
}

export function StatsCard({ icon: Icon, title, description, iconColor = "text-gray-700" }: StatsCardProps) {
  return (
    <div className="p-4 bg-white border rounded-lg text-center shadow-sm">
      <div className="mb-2 flex justify-center">
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
