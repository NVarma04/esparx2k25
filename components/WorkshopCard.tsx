import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react"

interface WorkshopCardProps {
  title: string
  description: string
  icon: string
}

const WorkshopCard: React.FC<WorkshopCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 bg-white/10 backdrop-blur-sm text-white group h-full">
      <CardHeader className="transition-colors duration-300 group-hover:bg-white/20">
        <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <CardTitle className="transition-colors duration-300 group-hover:text-blue-300">{title}</CardTitle>
        <CardDescription className="text-gray-300 transition-colors duration-300 group-hover:text-white">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default WorkshopCard

