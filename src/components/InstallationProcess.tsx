'use client'

import { useState } from 'react'

interface ProcessStep {
  id: number
  title: string
  description: string
  duration: string
  icon: string
  details: string[]
  image: string
}

export default function InstallationProcess() {
  const [activeStep, setActiveStep] = useState(1)

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: 'Консультация и планирование',
      description: 'Анализируем ваши потребности и подбираем оптимальное решение',
      duration: '1-2 дня',
      icon: '📞',
      details: [
        'Анализ типа судна и требований',
        'Выбор оптимального тарифного плана',
        'Планирование места установки антенны',
        'Расчет стоимости оборудования и услуг'
      ],
      image: '👨‍💼'
    },
    {
      id: 2,
      title: 'Проектирование и подготовка',
      description: 'Разрабатываем детальный план установки с учетом особенностей судна',
      duration: '2-3 дня',
      icon: '📋',
      details: [
        'Создание технического проекта',
        'Выбор места для антенны',
        'Планирование кабельной трассы',
        'Подготовка необходимых материалов'
      ],
      image: '📐'
    },
    {
      id: 3,
      title: 'Установка оборудования',
      description: 'Профессиональный монтаж антенны и настройка системы',
      duration: '4-8 часов',
      icon: '🔧',
      details: [
        'Монтаж антенны на судне',
        'Прокладка кабелей',
        'Установка модема и роутера',
        'Настройка сетевого оборудования'
      ],
      image: '⚙️'
    },
    {
      id: 4,
      title: 'Тестирование и обучение',
      description: 'Проверяем работу системы и обучаем экипаж',
      duration: '2-4 часа',
      icon: '✅',
      details: [
        'Тестирование скорости и стабильности',
        'Проверка всех функций системы',
        'Обучение экипажа работе с системой',
        'Передача документации и гарантий'
      ],
      image: '🎓'
    }
  ]

  const totalDuration = steps.reduce((total, step) => {
    const duration = parseInt(step.duration.match(/\d+/)?.[0] || '0')
    return total + duration
  }, 0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Процесс установки Starlink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От консультации до запуска - весь процесс займет всего несколько дней
          </p>
          <div className="mt-6 inline-block bg-marine-100 text-marine-800 px-6 py-3 rounded-full font-semibold">
            Общее время: {totalDuration} дней
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Steps navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeStep === step.id
                    ? 'bg-marine-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span className="text-2xl">{step.icon}</span>
                <div className="text-left">
                  <div className="font-semibold">Этап {step.id}</div>
                  <div className="text-sm opacity-75">{step.duration}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl">{steps[activeStep - 1].image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {steps[activeStep - 1].title}
                    </h3>
                    <div className="flex items-center space-x-2 text-marine-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{steps[activeStep - 1].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg">
                  {steps[activeStep - 1].description}
                </p>

                <h4 className="font-semibold text-gray-900 mb-4">Что включает этап:</h4>
                <ul className="space-y-3">
                  {steps[activeStep - 1].details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-marine-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right side - visual */}
              <div className="bg-gradient-to-br from-marine-50 to-ocean-50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
                    <span className="text-6xl">{steps[activeStep - 1].icon}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Этап {activeStep} из {steps.length}
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-marine-500 to-ocean-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(activeStep / steps.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600">
                    {Math.round((activeStep / steps.length) * 100)}% завершено
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
              className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Предыдущий</span>
            </button>

            <button
              onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
              disabled={activeStep === steps.length}
              className="flex items-center space-x-2 px-6 py-3 bg-marine-600 text-white rounded-lg hover:bg-marine-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Следующий</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Готовы начать установку?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения персональной консультации и расчета стоимости установки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Заказать установку
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
