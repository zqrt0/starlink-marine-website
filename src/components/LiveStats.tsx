'use client'

import { useState, useEffect } from 'react'

interface LiveStat {
  id: string
  label: string
  value: number
  unit: string
  icon: string
  color: string
}

export default function LiveStats() {
  const [stats, setStats] = useState<LiveStat[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const initialStats: LiveStat[] = [
    {
      id: 'active-users',
      label: 'Активных пользователей',
      value: 1247,
      unit: '',
      icon: '👥',
      color: 'text-blue-600'
    },
    {
      id: 'data-transferred',
      label: 'Передано данных сегодня',
      value: 156,
      unit: 'ТБ',
      icon: '📊',
      color: 'text-green-600'
    },
    {
      id: 'average-speed',
      label: 'Средняя скорость',
      value: 142,
      unit: 'Мбит/с',
      icon: '⚡',
      color: 'text-yellow-600'
    },
    {
      id: 'uptime',
      label: 'Время работы',
      value: 99.9,
      unit: '%',
      icon: '🛡️',
      color: 'text-purple-600'
    }
  ]

  useEffect(() => {
    // Имитация загрузки данных
    const loadStats = () => {
      setIsLoading(true)
      
      setTimeout(() => {
        const updatedStats = initialStats.map(stat => ({
          ...stat,
          value: stat.id === 'active-users' 
            ? stat.value + Math.floor(Math.random() * 10 - 5)
            : stat.id === 'data-transferred'
            ? stat.value + Math.random() * 2
            : stat.id === 'average-speed'
            ? stat.value + Math.floor(Math.random() * 20 - 10)
            : stat.value + (Math.random() * 0.1 - 0.05)
        }))
        
        setStats(updatedStats)
        setIsLoading(false)
      }, 1000)
    }

    loadStats()
    
    // Обновляем данные каждые 30 секунд
    const interval = setInterval(loadStats, 30000)
    
    return () => clearInterval(interval)
  }, [])

  const formatValue = (value: number, unit: string) => {
    if (unit === '%') {
      return `${value.toFixed(1)}${unit}`
    }
    if (unit === 'ТБ') {
      return `${value.toFixed(1)} ${unit}`
    }
    if (unit === 'Мбит/с') {
      return `${Math.round(value)} ${unit}`
    }
    return value.toLocaleString()
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Статистика в реальном времени
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мониторинг работы сети Starlink в морских регионах России
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">Данные обновляются каждые 30 секунд</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            // Skeleton loading
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 animate-pulse">
                <div className="w-12 h-12 bg-gray-700 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="h-8 bg-gray-700 rounded"></div>
              </div>
            ))
          ) : (
            stats.map((stat) => (
              <div key={stat.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{stat.icon}</div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="mb-2">
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {formatValue(stat.value, stat.unit)}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>

                {/* Мини-график */}
                <div className="mt-4 h-8 flex items-end space-x-1">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="bg-marine-500 rounded-t"
                      style={{
                        height: `${Math.random() * 100}%`,
                        width: '4px',
                        opacity: 0.7
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-marine-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Стабильная работа
            </h3>
            <p className="text-gray-300 text-sm">
              Система мониторинга отслеживает состояние сети 24/7
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-marine-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Высокая скорость
            </h3>
            <p className="text-gray-300 text-sm">
              Средняя скорость превышает 140 Мбит/с в большинстве регионов
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-marine-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Быстрый отклик
            </h3>
            <p className="text-gray-300 text-sm">
              Задержка менее 30 мс для большинства соединений
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Присоединяйтесь к тысячам довольных клиентов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Подключить Starlink
            </a>
            <a href="/calculator" className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900">
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
