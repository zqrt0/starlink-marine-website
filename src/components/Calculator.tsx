'use client'

import { useState } from 'react'
import { useToast } from './NotificationProvider'

interface CalculationData {
  vesselType: string
  vesselSize: string
  usageType: string
  monthlyData: number
  location: string
}

export default function Calculator() {
  const [formData, setFormData] = useState<CalculationData>({
    vesselType: '',
    vesselSize: '',
    usageType: '',
    monthlyData: 100,
    location: ''
  })
  const [result, setResult] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const toast = useToast()

  const vesselTypes = [
    { value: 'yacht', label: 'Яхта', icon: '⛵' },
    { value: 'fishing', label: 'Рыболовное судно', icon: '🐟' },
    { value: 'cargo', label: 'Грузовое судно', icon: '🚢' },
    { value: 'passenger', label: 'Пассажирское судно', icon: '🛳️' },
    { value: 'research', label: 'Исследовательское судно', icon: '🔬' }
  ]

  const vesselSizes = [
    { value: 'small', label: 'До 20 метров', multiplier: 1.0 },
    { value: 'medium', label: '20-50 метров', multiplier: 1.2 },
    { value: 'large', label: '50-100 метров', multiplier: 1.5 },
    { value: 'xl', label: 'Свыше 100 метров', multiplier: 2.0 }
  ]

  const usageTypes = [
    { value: 'basic', label: 'Базовое использование', multiplier: 1.0 },
    { value: 'business', label: 'Бизнес', multiplier: 1.3 },
    { value: 'heavy', label: 'Интенсивное использование', multiplier: 1.8 }
  ]

  const locations = [
    { value: 'baltic', label: 'Балтийское море', multiplier: 1.0 },
    { value: 'black', label: 'Черное море', multiplier: 1.1 },
    { value: 'white', label: 'Белое море', multiplier: 1.2 },
    { value: 'barents', label: 'Баренцево море', multiplier: 1.3 },
    { value: 'okhotsk', label: 'Охотское море', multiplier: 1.4 }
  ]

  const handleInputChange = (field: keyof CalculationData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calculateCost = () => {
    if (!formData.vesselType || !formData.vesselSize || !formData.usageType || !formData.location) {
      toast.error('Пожалуйста, заполните все поля')
      return
    }

    setIsCalculating(true)

    // Имитация расчета
    setTimeout(() => {
      const vesselSize = vesselSizes.find(s => s.value === formData.vesselSize)
      const usageType = usageTypes.find(u => u.value === formData.usageType)
      const location = locations.find(l => l.value === formData.location)

      const baseCost = 25000 // Базовая стоимость
      const dataCost = formData.monthlyData * 50 // Стоимость за ГБ
      const equipmentCost = 150000 // Стоимость оборудования

      const totalMultiplier = (vesselSize?.multiplier || 1) * (usageType?.multiplier || 1) * (location?.multiplier || 1)
      
      const monthlyCost = Math.round((baseCost + dataCost) * totalMultiplier)
      const installationCost = Math.round(equipmentCost * (vesselSize?.multiplier || 1))
      const totalFirstYear = monthlyCost * 12 + installationCost

      setResult({
        monthlyCost,
        installationCost,
        totalFirstYear,
        vesselType: vesselTypes.find(v => v.value === formData.vesselType)?.label,
        vesselSize: vesselSize?.label,
        usageType: usageType?.label,
        location: location?.label,
        monthlyData: formData.monthlyData
      })

      setIsCalculating(false)
    }, 1500)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Калькулятор стоимости
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Рассчитайте стоимость подключения Starlink для вашего судна
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма калькулятора */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Параметры судна
            </h3>

            <div className="space-y-6">
              {/* Тип судна */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Тип судна *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {vesselTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => handleInputChange('vesselType', type.value)}
                      className={`p-4 rounded-lg border-2 transition-colors text-left ${
                        formData.vesselType === type.value
                          ? 'border-marine-500 bg-marine-50'
                          : 'border-gray-200 hover:border-marine-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{type.icon}</span>
                        <span className="font-medium">{type.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Размер судна */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Размер судна *
                </label>
                <div className="space-y-2">
                  {vesselSizes.map((size) => (
                    <button
                      key={size.value}
                      type="button"
                      onClick={() => handleInputChange('vesselSize', size.value)}
                      className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                        formData.vesselSize === size.value
                          ? 'border-marine-500 bg-marine-50'
                          : 'border-gray-200 hover:border-marine-300'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Тип использования */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Тип использования *
                </label>
                <div className="space-y-2">
                  {usageTypes.map((usage) => (
                    <button
                      key={usage.value}
                      type="button"
                      onClick={() => handleInputChange('usageType', usage.value)}
                      className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                        formData.usageType === usage.value
                          ? 'border-marine-500 bg-marine-50'
                          : 'border-gray-200 hover:border-marine-300'
                      }`}
                    >
                      {usage.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Местоположение */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Основной район плавания *
                </label>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <button
                      key={location.value}
                      type="button"
                      onClick={() => handleInputChange('location', location.value)}
                      className={`w-full p-3 rounded-lg border-2 transition-colors text-left ${
                        formData.location === location.value
                          ? 'border-marine-500 bg-marine-50'
                          : 'border-gray-200 hover:border-marine-300'
                      }`}
                    >
                      {location.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Объем данных */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Планируемый объем данных в месяц: {formData.monthlyData} ГБ
                </label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="50"
                  value={formData.monthlyData}
                  onChange={(e) => handleInputChange('monthlyData', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>50 ГБ</span>
                  <span>1000 ГБ</span>
                </div>
              </div>

              <button
                onClick={calculateCost}
                disabled={isCalculating}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? 'Рассчитываем...' : 'Рассчитать стоимость'}
              </button>
            </div>
          </div>

          {/* Результаты расчета */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Результаты расчета
            </h3>

            {result ? (
              <div className="space-y-6">
                {/* Сводка */}
                <div className="bg-gradient-to-r from-marine-50 to-ocean-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Сводка по судну
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Тип судна:</span>
                      <span className="font-medium">{result.vesselType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Размер:</span>
                      <span className="font-medium">{result.vesselSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Использование:</span>
                      <span className="font-medium">{result.usageType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Район:</span>
                      <span className="font-medium">{result.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Данные:</span>
                      <span className="font-medium">{result.monthlyData} ГБ/мес</span>
                    </div>
                  </div>
                </div>

                {/* Стоимость */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Ежемесячная абонентская плата:</span>
                    <span className="text-2xl font-bold text-marine-600">
                      {result.monthlyCost.toLocaleString()} ₽
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Стоимость установки:</span>
                    <span className="text-2xl font-bold text-marine-600">
                      {result.installationCost.toLocaleString()} ₽
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-marine-600 to-ocean-600 text-white rounded-lg">
                    <span className="font-semibold">Общая стоимость за первый год:</span>
                    <span className="text-2xl font-bold">
                      {result.totalFirstYear.toLocaleString()} ₽
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <a href="/contact" className="w-full btn-primary text-center block">
                    Заказать подключение
                  </a>
                  <a href="/pricing" className="w-full btn-secondary text-center block">
                    Посмотреть тарифы
                  </a>
                </div>

                {/* Примечание */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="text-sm font-medium text-blue-900 mb-1">
                        Примечание
                      </h4>
                      <p className="text-sm text-blue-700">
                        Расчет является приблизительным. Окончательная стоимость может отличаться в зависимости от конкретных условий установки и выбранного тарифного плана.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🧮</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Заполните параметры
                </h4>
                <p className="text-gray-600">
                  Укажите характеристики вашего судна для расчета стоимости подключения Starlink
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
