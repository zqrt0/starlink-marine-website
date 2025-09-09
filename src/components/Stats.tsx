'use client'

import { useState, useEffect } from 'react'

interface StatItem {
  value: number
  label: string
  suffix: string
  description: string
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  const stats: StatItem[] = [
    {
      value: 0,
      label: 'Подключенных судов',
      suffix: '+',
      description: 'Успешно работают с нашим интернетом'
    },
    {
      value: 0,
      label: 'Время работы',
      suffix: '%',
      description: 'Стабильность соединения'
    },
    {
      value: 0,
      label: 'Техподдержка',
      suffix: '/7',
      description: 'Круглосуточная поддержка'
    },
    {
      value: 0,
      label: 'Скорость',
      suffix: ' Мбит/с',
      description: 'Максимальная скорость интернета'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="stats-section" className="section-padding bg-gradient-to-br from-marine-900 to-ocean-900 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши показатели
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ключевые метрики работы Starlink для морских судов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold text-marine-300 mb-2">
                  {isVisible ? (
                    <CountUpAnimation
                      end={stat.value}
                      duration={2000}
                      delay={index * 200}
                    />
                  ) : (
                    '0'
                  )}
                  <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-300">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-marine-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-marine-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-white">Сертифицированные</div>
                <div className="text-sm text-gray-300">Специалисты</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-marine-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-marine-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-white">Быстрая</div>
                <div className="text-sm text-gray-300">Установка</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-marine-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-marine-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold text-white">Глобальное</div>
                <div className="text-sm text-gray-300">Покрытие</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Компонент для анимации счетчика
function CountUpAnimation({ end, duration, delay }: { end: number; duration: number; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now()
      const startValue = 0

      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)
        
        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay])

  return <span>{count}</span>
}
