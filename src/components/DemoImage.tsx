import React from 'react'

interface DemoImageProps {
  title: string
  description: string
  category: string
  className?: string
}

export default function DemoImage({ title, description, category, className = '' }: DemoImageProps) {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'antennas': return 'from-blue-500 to-blue-700'
      case 'maritime': return 'from-teal-500 to-teal-700'
      case 'equipment': return 'from-gray-500 to-gray-700'
      case 'installation': return 'from-green-500 to-green-700'
      default: return 'from-purple-500 to-purple-700'
    }
  }

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'antennas': return '📡'
      case 'maritime': return '🚢'
      case 'equipment': return '⚙️'
      case 'installation': return '🔧'
      default: return '📸'
    }
  }

  return (
    <div className={`relative w-full h-64 bg-gradient-to-br ${getCategoryColor(category)} rounded-lg overflow-hidden ${className}`}>
      {/* Фоновый паттерн */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
        <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-6 h-6 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-white rounded-full"></div>
      </div>
      
      {/* Иконка категории */}
      <div className="absolute top-4 right-4 text-4xl opacity-80">
        {getCategoryIcon(category)}
      </div>
      
      {/* Заголовок */}
      <div className="absolute bottom-16 left-4 right-4">
        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
        <p className="text-white text-sm opacity-90">{description}</p>
      </div>
      
      {/* Водяной знак */}
      <div className="absolute bottom-4 left-4 text-white text-xs opacity-60">
        Starlink Demo
      </div>
    </div>
  )
}
