'use client'

import { useState } from 'react'

interface ComparisonFeature {
  feature: string
  starlink: string | boolean
  traditional: string | boolean
  description: string
}

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = useState<'speed' | 'reliability' | 'coverage'>('speed')

  const features: ComparisonFeature[] = [
    {
      feature: 'Скорость интернета',
      starlink: '50-200 Мбит/с',
      traditional: '1-10 Мбит/с',
      description: 'Starlink обеспечивает в 10-20 раз более высокую скорость'
    },
    {
      feature: 'Задержка (ping)',
      starlink: '20-40 мс',
      traditional: '200-500 мс',
      description: 'Низкая задержка для видеозвонков и онлайн-игр'
    },
    {
      feature: 'Покрытие',
      starlink: 'Глобальное',
      traditional: 'Прибрежные зоны',
      description: 'Работает в любой точке мирового океана'
    },
    {
      feature: 'Стабильность',
      starlink: '99.9%',
      traditional: '70-85%',
      description: 'Высокая надежность даже в шторм'
    },
    {
      feature: 'Установка',
      starlink: '4-8 часов',
      traditional: '1-2 дня',
      description: 'Быстрая и простая установка'
    },
    {
      feature: 'Стоимость',
      starlink: '15-45 тыс. руб/мес',
      traditional: '5-15 тыс. руб/мес',
      description: 'Высокая стоимость оправдана качеством'
    }
  ]

  const tabs = [
    { id: 'speed', label: 'Скорость', icon: '⚡' },
    { id: 'reliability', label: 'Надежность', icon: '🛡️' },
    { id: 'coverage', label: 'Покрытие', icon: '🌍' }
  ]

  const getTabContent = () => {
    switch (activeTab) {
      case 'speed':
        return {
          title: 'Скорость и производительность',
          description: 'Starlink обеспечивает в 10-20 раз более высокую скорость интернета по сравнению с традиционными спутниковыми системами.',
          highlight: 'До 200 Мбит/с'
        }
      case 'reliability':
        return {
          title: 'Надежность и стабильность',
          description: 'Высокая надежность соединения даже в экстремальных погодных условиях.',
          highlight: '99.9% времени работы'
        }
      case 'coverage':
        return {
          title: 'Глобальное покрытие',
          description: 'Работает в любой точке мирового океана, где не доступны традиционные системы связи.',
          highlight: 'Везде в океане'
        }
      default:
        return { title: '', description: '', highlight: '' }
    }
  }

  const content = getTabContent()

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Starlink vs Традиционные системы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сравните возможности Starlink с традиционными спутниковыми системами
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-marine-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-gradient-to-r from-marine-50 to-ocean-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {content.description}
            </p>
            <div className="inline-block bg-marine-600 text-white px-6 py-3 rounded-full font-semibold">
              {content.highlight}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Характеристика
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-marine-600">
                    Starlink
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                    Традиционные системы
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Описание
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {feature.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-marine-100 text-marine-800 px-3 py-1 rounded-full text-sm font-medium">
                        {typeof feature.starlink === 'boolean' 
                          ? (feature.starlink ? '✅' : '❌')
                          : feature.starlink
                        }
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {typeof feature.traditional === 'boolean' 
                          ? (feature.traditional ? '✅' : '❌')
                          : feature.traditional
                        }
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {feature.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Готовы перейти на Starlink?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Получить консультацию
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
