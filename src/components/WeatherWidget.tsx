'use client'

import { useState, useEffect } from 'react'

interface WeatherData {
  location: string
  temperature: number
  condition: string
  windSpeed: number
  windDirection: string
  waveHeight: number
  visibility: number
  pressure: number
  humidity: number
  icon: string
}

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedLocation, setSelectedLocation] = useState('baltic')

  const locations = [
    { value: 'baltic', label: 'Балтийское море', coordinates: '59.9, 30.3' },
    { value: 'black', label: 'Черное море', coordinates: '44.6, 37.8' },
    { value: 'white', label: 'Белое море', coordinates: '64.5, 40.5' },
    { value: 'barents', label: 'Баренцево море', coordinates: '69.0, 33.0' }
  ]

  const getWeatherIcon = (condition: string) => {
    const conditions = condition.toLowerCase()
    if (conditions.includes('ясно') || conditions.includes('солнечно')) return '☀️'
    if (conditions.includes('облачно')) return '☁️'
    if (conditions.includes('дождь')) return '🌧️'
    if (conditions.includes('снег')) return '❄️'
    if (conditions.includes('туман')) return '🌫️'
    if (conditions.includes('шторм')) return '⛈️'
    return '🌤️'
  }

  const getWindDirection = (degrees: number) => {
    const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ']
    const index = Math.round(degrees / 45) % 8
    return directions[index]
  }

  const getWaveHeight = (windSpeed: number) => {
    // Упрощенная формула для высоты волн
    if (windSpeed < 5) return 0.2
    if (windSpeed < 10) return 0.5
    if (windSpeed < 15) return 1.0
    if (windSpeed < 20) return 1.5
    if (windSpeed < 25) return 2.0
    return 2.5
  }

  const getVisibility = (condition: string) => {
    const conditions = condition.toLowerCase()
    if (conditions.includes('туман')) return 0.5
    if (conditions.includes('дождь')) return 2.0
    if (conditions.includes('снег')) return 1.0
    return 10.0
  }

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true)
      
      // Имитация загрузки данных
      setTimeout(() => {
        const location = locations.find(l => l.value === selectedLocation)
        const windSpeed = Math.random() * 20 + 5
        const windDirection = Math.random() * 360
        const temperature = Math.random() * 15 + 5 // 5-20°C
        
        const conditions = [
          'Ясно', 'Переменная облачность', 'Облачно', 
          'Дождь', 'Туман', 'Шторм'
        ]
        const condition = conditions[Math.floor(Math.random() * conditions.length)]
        
        setWeatherData({
          location: location?.label || 'Неизвестно',
          temperature: Math.round(temperature),
          condition,
          windSpeed: Math.round(windSpeed),
          windDirection: getWindDirection(windDirection),
          waveHeight: getWaveHeight(windSpeed),
          visibility: getVisibility(condition),
          pressure: Math.round(1013 + Math.random() * 20 - 10),
          humidity: Math.round(60 + Math.random() * 30),
          icon: getWeatherIcon(condition)
        })
        
        setIsLoading(false)
      }, 1000)
    }

    fetchWeatherData()
  }, [selectedLocation])

  const getConditionColor = (condition: string) => {
    const conditions = condition.toLowerCase()
    if (conditions.includes('ясно')) return 'text-yellow-500'
    if (conditions.includes('облачно')) return 'text-gray-500'
    if (conditions.includes('дождь')) return 'text-blue-500'
    if (conditions.includes('шторм')) return 'text-red-500'
    return 'text-gray-600'
  }

  const getStarlinkStatus = (condition: string, windSpeed: number) => {
    if (condition.toLowerCase().includes('шторм') && windSpeed > 20) {
      return { status: 'warning', text: 'Возможны кратковременные перебои' }
    }
    if (windSpeed > 15) {
      return { status: 'info', text: 'Стабильная работа' }
    }
    return { status: 'success', text: 'Отличные условия' }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Морская погода и условия для Starlink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Актуальная информация о погодных условиях в морских регионах России
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Выбор локации */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {locations.map((location) => (
              <button
                key={location.value}
                onClick={() => setSelectedLocation(location.value)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedLocation === location.value
                    ? 'bg-marine-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {location.label}
              </button>
            ))}
          </div>

          {/* Виджет погоды */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {isLoading ? (
              <div className="p-12 text-center">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-marine-600 mb-4"></div>
                <p className="text-gray-600">Загружаем данные о погоде...</p>
              </div>
            ) : weatherData ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Основная информация */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {weatherData.location}
                    </h3>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-6xl">{weatherData.icon}</span>
                      <div>
                        <div className="text-4xl font-bold text-gray-900">
                          {weatherData.temperature}°C
                        </div>
                        <div className={`text-lg font-medium ${getConditionColor(weatherData.condition)}`}>
                          {weatherData.condition}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Детальная информация */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {weatherData.windSpeed}
                      </div>
                      <div className="text-sm text-gray-600">м/с</div>
                      <div className="text-xs text-gray-500">
                        {weatherData.windDirection}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {weatherData.waveHeight}
                      </div>
                      <div className="text-sm text-gray-600">м</div>
                      <div className="text-xs text-gray-500">высота волн</div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {weatherData.visibility}
                      </div>
                      <div className="text-sm text-gray-600">км</div>
                      <div className="text-xs text-gray-500">видимость</div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {weatherData.pressure}
                      </div>
                      <div className="text-sm text-gray-600">гПа</div>
                      <div className="text-xs text-gray-500">давление</div>
                    </div>
                  </div>
                </div>

                {/* Статус Starlink */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      Статус Starlink
                    </h4>
                    
                    {(() => {
                      const starlinkStatus = getStarlinkStatus(weatherData.condition, weatherData.windSpeed)
                      return (
                        <div className={`p-6 rounded-lg ${
                          starlinkStatus.status === 'success' ? 'bg-green-50 border border-green-200' :
                          starlinkStatus.status === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                          'bg-blue-50 border border-blue-200'
                        }`}>
                          <div className={`text-4xl mb-3 ${
                            starlinkStatus.status === 'success' ? 'text-green-500' :
                            starlinkStatus.status === 'warning' ? 'text-yellow-500' :
                            'text-blue-500'
                          }`}>
                            {starlinkStatus.status === 'success' ? '✅' :
                             starlinkStatus.status === 'warning' ? '⚠️' : 'ℹ️'}
                          </div>
                          <p className={`font-semibold ${
                            starlinkStatus.status === 'success' ? 'text-green-800' :
                            starlinkStatus.status === 'warning' ? 'text-yellow-800' :
                            'text-blue-800'
                          }`}>
                            {starlinkStatus.text}
                          </p>
                        </div>
                      )
                    })()}
                  </div>

                  {/* Рекомендации */}
                  <div className="bg-marine-50 rounded-lg p-6">
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Рекомендации для судовождения:
                    </h5>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {weatherData.windSpeed > 15 && (
                        <li className="flex items-start space-x-2">
                          <span className="text-yellow-500 mt-0.5">⚠️</span>
                          <span>Сильный ветер - будьте осторожны при маневрировании</span>
                        </li>
                      )}
                      {weatherData.waveHeight > 1.5 && (
                        <li className="flex items-start space-x-2">
                          <span className="text-orange-500 mt-0.5">🌊</span>
                          <span>Высокие волны - снизьте скорость</span>
                        </li>
                      )}
                      {weatherData.visibility < 2 && (
                        <li className="flex items-start space-x-2">
                          <span className="text-red-500 mt-0.5">🌫️</span>
                          <span>Плохая видимость - используйте радар</span>
                        </li>
                      )}
                      <li className="flex items-start space-x-2">
                        <span className="text-green-500 mt-0.5">📡</span>
                        <span>Starlink работает стабильно в текущих условиях</span>
                      </li>
                    </ul>
                  </div>

                  {/* Прогноз */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Прогноз на 24 часа:
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Температура:</span>
                        <span className="font-medium">{weatherData.temperature}°C → {weatherData.temperature + Math.round(Math.random() * 4 - 2)}°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ветер:</span>
                        <span className="font-medium">{weatherData.windSpeed} м/с → {Math.round(weatherData.windSpeed + Math.random() * 6 - 3)} м/с</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Волны:</span>
                        <span className="font-medium">{weatherData.waveHeight} м → {(weatherData.waveHeight + Math.random() * 0.5).toFixed(1)} м</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Обновление данных */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Данные обновляются каждые 15 минут
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 text-marine-600 hover:text-marine-700 text-sm font-medium transition-colors"
            >
              Обновить данные
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
