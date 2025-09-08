import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Услуги Starlink для морских судов | Спутниковый интернет',
  description: 'Полный спектр услуг по подключению спутникового интернета Starlink для яхт, рыболовных и коммерческих судов в России.',
  keywords: 'услуги старлинк, подключение интернета для судов, установка спутниковой антенны, морская связь',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Для частных яхт',
      description: 'Высокоскоростной интернет для комфортного отдыха и работы на яхте',
      features: [
        'Скорость до 50 Мбит/с',
        'Поддержка до 10 устройств',
        'Простая установка антенны',
        'Мобильное приложение для управления',
        'Круглосуточная поддержка'
      ],
      image: '🏝️'
    },
    {
      title: 'Для рыболовных судов',
      description: 'Надежная связь для рыболовного флота и средних коммерческих судов',
      features: [
        'Скорость до 100 Мбит/с',
        'Поддержка до 25 устройств',
        'Устойчивость к морским условиям',
        'Резервный канал связи',
        'Интеграция с навигационными системами'
      ],
      image: '🚢'
    },
    {
      title: 'Для коммерческих судов',
      description: 'Профессиональные решения для крупных грузовых и пассажирских судов',
      features: [
        'Скорость до 200 Мбит/с',
        'Поддержка до 50 устройств',
        'Высокая надежность 99.9%',
        'Персональный менеджер',
        'Интеграция с судовыми системами'
      ],
      image: '⚓'
    }
  ]

  const installationSteps = [
    {
      step: '1',
      title: 'Консультация',
      description: 'Анализируем ваши потребности и подбираем оптимальное решение'
    },
    {
      step: '2',
      title: 'Проектирование',
      description: 'Разрабатываем план установки с учетом особенностей вашего судна'
    },
    {
      step: '3',
      title: 'Установка',
      description: 'Профессиональный монтаж антенны и настройка оборудования'
    },
    {
      step: '4',
      title: 'Тестирование',
      description: 'Проверяем работу системы и обучаем экипаж'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Услуги Starlink для морских судов
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Полный спектр услуг по подключению высокоскоростного спутникового интернета 
              для всех типов морских судов в России
            </p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Специализированные решения для разных типов морских судов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-6 text-center">{service.image}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-marine-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс установки */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Процесс установки
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональная установка и настройка за 4 простых шага
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-marine-500 to-ocean-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="section-padding bg-marine-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы подключить Starlink?
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Получите бесплатную консультацию и расчет стоимости для вашего судна
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Получить консультацию
            </a>
            <a href="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-marine-600">
              Посмотреть тарифы
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
