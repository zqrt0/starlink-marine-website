'use client'

import { useState } from 'react'

interface CoverageArea {
  id: string
  name: string
  status: 'available' | 'coming-soon' | 'planned'
  description: string
  speed: string
  latency: string
}

export default function CoverageMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  const coverageAreas: CoverageArea[] = [
    {
      id: 'baltic',
      name: 'Балтийское море',
      status: 'available',
      description: 'Полное покрытие Starlink доступно',
      speed: '100-200 Мбит/с',
      latency: '20-30 мс'
    },
    {
      id: 'black',
      name: 'Черное море',
      status: 'available',
      description: 'Стабильное покрытие в прибрежных зонах',
      speed: '80-150 Мбит/с',
      latency: '25-35 мс'
    },
    {
      id: 'white',
      name: 'Белое море',
      status: 'available',
      description: 'Покрытие доступно в навигационный период',
      speed: '60-120 Мбит/с',
      latency: '30-40 мс'
    },
    {
      id: 'barents',
      name: 'Баренцево море',
      status: 'coming-soon',
      description: 'Покрытие планируется к концу 2024 года',
      speed: '50-100 Мбит/с',
      latency: '35-45 мс'
    },
    {
      id: 'okhotsk',
      name: 'Охотское море',
      status: 'planned',
      description: 'Покрытие в планах на 2025 год',
      speed: '40-80 Мбит/с',
      latency: '40-50 мс'
    },
    {
      id: 'japan',
      name: 'Японское море',
      status: 'planned',
      description: 'Покрытие в планах на 2025 год',
      speed: '40-80 Мбит/с',
      latency: '40-50 мс'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500'
      case 'coming-soon':
        return 'bg-yellow-500'
      case 'planned':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Доступно'
      case 'coming-soon':
        return 'Скоро'
      case 'planned':
        return 'В планах'
      default:
        return 'Неизвестно'
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Карта покрытия Starlink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, где доступен высокоскоростной интернет Starlink для морских судов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-marine-50 to-ocean-50 rounded-2xl p-8 h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Морские регионы России
                </h3>
                <p className="text-gray-600">
                  Интерактивная карта покрытия
                </p>
              </div>

              {/* Simplified map representation */}
              <div className="relative bg-white rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {coverageAreas.map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        selectedArea === area.id
                          ? 'border-marine-500 bg-marine-50'
                          : 'border-gray-200 hover:border-marine-300 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(area.status)}`}></div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {area.name}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600">
                        {getStatusText(area.status)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-600">Доступно</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-gray-600">Скоро</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                  <span className="text-sm text-gray-600">В планах</span>
                </div>
              </div>
            </div>
          </div>

          {/* Area details */}
          <div className="space-y-6">
            {selectedArea ? (
              <div className="bg-gradient-to-br from-marine-50 to-ocean-50 rounded-2xl p-8">
                {(() => {
                  const area = coverageAreas.find(a => a.id === selectedArea)
                  if (!area) return null
                  
                  return (
                    <>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-4 h-4 rounded-full ${getStatusColor(area.status)}`}></div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {area.name}
                        </h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {area.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Скорость</h4>
                          <p className="text-marine-600 font-medium">{area.speed}</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Задержка</h4>
                          <p className="text-marine-600 font-medium">{area.latency}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          area.status === 'available' 
                            ? 'bg-green-100 text-green-800'
                            : area.status === 'coming-soon'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {getStatusText(area.status)}
                        </span>
                      </div>
                    </>
                  )
                })()}
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Выберите регион
                </h3>
                <p className="text-gray-600">
                  Кликните на любой регион на карте, чтобы узнать подробности о покрытии
                </p>
              </div>
            )}

            {/* Global coverage info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Глобальное покрытие
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Всего спутников</span>
                  <span className="font-semibold text-gray-900">4,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Страны покрытия</span>
                  <span className="font-semibold text-gray-900">60+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Пользователей</span>
                  <span className="font-semibold text-gray-900">2M+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Проверьте покрытие для вашего маршрута
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения информации о покрытии на ваших маршрутах
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Проверить покрытие
            </a>
            <a href="/pricing" className="btn-secondary">
              Посмотреть тарифы
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
