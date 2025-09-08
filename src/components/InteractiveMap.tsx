'use client'

import { useState, useEffect } from 'react'

interface Port {
  id: string
  name: string
  coordinates: [number, number]
  type: 'major' | 'commercial' | 'fishing' | 'yacht'
  starlinkStatus: 'available' | 'coming-soon' | 'planned'
  description: string
  services: string[]
}

export default function InteractiveMap() {
  const [selectedPort, setSelectedPort] = useState<Port | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const [isLoading, setIsLoading] = useState(true)

  const ports: Port[] = [
    {
      id: 'spb',
      name: 'Санкт-Петербург',
      coordinates: [59.9311, 30.3609],
      type: 'major',
      starlinkStatus: 'available',
      description: 'Крупнейший порт России, обслуживает все типы судов',
      services: ['Грузовые операции', 'Пассажирские перевозки', 'Яхтенный сервис']
    },
    {
      id: 'murmansk',
      name: 'Мурманск',
      coordinates: [68.9585, 33.0827],
      type: 'commercial',
      starlinkStatus: 'available',
      description: 'Крупнейший порт за Полярным кругом',
      services: ['Рыболовство', 'Грузовые перевозки', 'Ледокольная проводка']
    },
    {
      id: 'novorossiysk',
      name: 'Новороссийск',
      coordinates: [44.7235, 37.7686],
      type: 'major',
      starlinkStatus: 'available',
      description: 'Крупнейший порт Черного моря',
      services: ['Нефтепереработка', 'Грузовые операции', 'Контейнерные перевозки']
    },
    {
      id: 'vladivostok',
      name: 'Владивосток',
      coordinates: [43.1056, 131.8735],
      type: 'major',
      starlinkStatus: 'coming-soon',
      description: 'Главный порт Дальнего Востока',
      services: ['Рыболовство', 'Грузовые операции', 'Пассажирские перевозки']
    },
    {
      id: 'kaliningrad',
      name: 'Калининград',
      coordinates: [54.7065, 20.5110],
      type: 'commercial',
      starlinkStatus: 'available',
      description: 'Порт в Балтийском море',
      services: ['Грузовые операции', 'Яхтенный сервис', 'Рыболовство']
    },
    {
      id: 'sochi',
      name: 'Сочи',
      coordinates: [43.5855, 39.7231],
      type: 'yacht',
      starlinkStatus: 'available',
      description: 'Крупнейший яхтенный порт России',
      services: ['Яхтенный сервис', 'Пассажирские перевозки', 'Туризм']
    },
    {
      id: 'petropavlovsk',
      name: 'Петропавловск-Камчатский',
      coordinates: [53.0195, 158.6507],
      type: 'fishing',
      starlinkStatus: 'planned',
      description: 'Центр рыболовства на Дальнем Востоке',
      services: ['Рыболовство', 'Научные исследования', 'Туризм']
    },
    {
      id: 'arkhangelsk',
      name: 'Архангельск',
      coordinates: [64.5401, 40.5433],
      type: 'commercial',
      starlinkStatus: 'available',
      description: 'Исторический порт на Белом море',
      services: ['Грузовые операции', 'Лесопереработка', 'Научные экспедиции']
    }
  ]

  const filters = [
    { value: 'all', label: 'Все порты', icon: '🌍' },
    { value: 'major', label: 'Крупные порты', icon: '🏭' },
    { value: 'commercial', label: 'Коммерческие', icon: '🚢' },
    { value: 'fishing', label: 'Рыболовные', icon: '🐟' },
    { value: 'yacht', label: 'Яхтенные', icon: '⛵' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-500'
      case 'coming-soon': return 'bg-yellow-500'
      case 'planned': return 'bg-gray-400'
      default: return 'bg-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Доступно'
      case 'coming-soon': return 'Скоро'
      case 'planned': return 'В планах'
      default: return 'Неизвестно'
    }
  }

  const filteredPorts = filter === 'all' ? ports : ports.filter(port => port.type === filter)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }, [filter])

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Интерактивная карта портов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите ближайший порт с поддержкой Starlink и узнайте о доступных услугах
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Фильтры
              </h3>
              
              <div className="space-y-2">
                {filters.map((filterOption) => (
                  <button
                    key={filterOption.value}
                    onClick={() => setFilter(filterOption.value)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      filter === filterOption.value
                        ? 'bg-marine-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{filterOption.icon}</span>
                    <span className="font-medium">{filterOption.label}</span>
                  </button>
                ))}
              </div>

              {/* Статистика */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Статистика</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Всего портов:</span>
                    <span className="font-medium">{ports.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starlink доступен:</span>
                    <span className="font-medium text-green-600">
                      {ports.filter(p => p.starlinkStatus === 'available').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Скоро будет:</span>
                    <span className="font-medium text-yellow-600">
                      {ports.filter(p => p.starlinkStatus === 'coming-soon').length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">В планах:</span>
                    <span className="font-medium text-gray-600">
                      {ports.filter(p => p.starlinkStatus === 'planned').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Карта и список портов */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-marine-600 mb-4"></div>
                  <p className="text-gray-600">Загружаем карту...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Упрощенная карта */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Морские порты России
                    </h3>
                    <p className="text-gray-600">
                      Интерактивная карта с поддержкой Starlink
                    </p>
                  </div>

                  {/* Сетка портов */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {filteredPorts.map((port) => (
                      <button
                        key={port.id}
                        onClick={() => setSelectedPort(port)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedPort?.id === port.id
                            ? 'border-marine-500 bg-marine-50'
                            : 'border-gray-200 hover:border-marine-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(port.starlinkStatus)}`}></div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {port.name}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">
                          {port.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {port.type === 'major' ? '🏭' : 
                             port.type === 'commercial' ? '🚢' :
                             port.type === 'fishing' ? '🐟' : '⛵'}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            port.starlinkStatus === 'available' ? 'bg-green-100 text-green-800' :
                            port.starlinkStatus === 'coming-soon' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {getStatusText(port.starlinkStatus)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Детали выбранного порта */}
                {selectedPort ? (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedPort.name}
                        </h3>
                        <p className="text-gray-600">
                          {selectedPort.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full ${getStatusColor(selectedPort.starlinkStatus)}`}></div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          selectedPort.starlinkStatus === 'available' ? 'bg-green-100 text-green-800' :
                          selectedPort.starlinkStatus === 'coming-soon' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {getStatusText(selectedPort.starlinkStatus)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Доступные услуги
                        </h4>
                        <ul className="space-y-2">
                          {selectedPort.services.map((service, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Информация о Starlink
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Статус:</span>
                            <span className="font-medium">{getStatusText(selectedPort.starlinkStatus)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Тип порта:</span>
                            <span className="font-medium">
                              {selectedPort.type === 'major' ? 'Крупный' :
                               selectedPort.type === 'commercial' ? 'Коммерческий' :
                               selectedPort.type === 'fishing' ? 'Рыболовный' : 'Яхтенный'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Координаты:</span>
                            <span className="font-medium text-sm">
                              {selectedPort.coordinates[0].toFixed(4)}, {selectedPort.coordinates[1].toFixed(4)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a href="/contact" className="btn-primary">
                          Связаться с портом
                        </a>
                        <a href="/calculator" className="btn-secondary">
                          Рассчитать стоимость
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Выберите порт
                    </h3>
                    <p className="text-gray-600">
                      Кликните на любой порт на карте, чтобы узнать подробную информацию
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Нужна помощь с выбором порта?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут выбрать оптимальный порт для вашего судна и проконсультируют по вопросам подключения Starlink
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Получить консультацию
            </a>
            <a href="tel:+78001234567" className="btn-secondary">
              Позвонить: +7 (800) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
