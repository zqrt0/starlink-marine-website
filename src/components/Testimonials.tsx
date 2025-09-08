'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  vessel: string
  location: string
  text: string
  rating: number
  image: string
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Александр Петров',
      vessel: 'Яхта "Морская звезда"',
      location: 'Санкт-Петербург',
      text: 'Отличный интернет! Скорость стабильная, даже в шторм работает без проблем. Теперь можем работать удаленно прямо с яхты.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Мария Соколова',
      vessel: 'Рыболовное судно "Волна"',
      location: 'Мурманск',
      text: 'Starlink кардинально изменил нашу работу. Теперь можем отслеживать косяки рыбы в реальном времени и связываться с берегом.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      vessel: 'Грузовое судно "Север"',
      location: 'Архангельск',
      text: 'Надежная связь в любых условиях. Экипаж может общаться с семьями, а мы - координировать грузоперевозки.',
      rating: 5,
      image: '👨‍✈️'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, что говорят владельцы судов о Starlink
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-br from-marine-50 to-ocean-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentIndex].image}
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonials[currentIndex].text}&quot;
                </blockquote>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-marine-600 font-medium mb-1">
                    {testimonials[currentIndex].vessel}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Навигация */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Предыдущий отзыв"
            >
              <svg className="w-6 h-6 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Следующий отзыв"
            >
              <svg className="w-6 h-6 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Индикаторы */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-marine-600' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
