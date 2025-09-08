'use client'

import { useState } from 'react'
import { useToast } from './NotificationProvider'

interface TestimonialData {
  name: string
  email: string
  vessel: string
  rating: number
  text: string
}

export default function TestimonialForm() {
  const [formData, setFormData] = useState<TestimonialData>({
    name: '',
    email: '',
    vessel: '',
    rating: 5,
    text: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Спасибо за ваш отзыв! Он будет опубликован после модерации.')
        setFormData({
          name: '',
          email: '',
          vessel: '',
          rating: 5,
          text: ''
        })
      } else {
        toast.error(result.error || 'Произошла ошибка при отправке отзыва')
      }
    } catch (error) {
      console.error('Ошибка отправки отзыва:', error)
      toast.error('Произошла ошибка при отправке отзыва. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Поделитесь своим опытом
            </h2>
            <p className="text-xl text-gray-600">
              Расскажите другим владельцам судов о вашем опыте использования Starlink
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="vessel" className="block text-sm font-medium text-gray-700 mb-2">
                  Название судна *
                </label>
                <input
                  type="text"
                  id="vessel"
                  name="vessel"
                  value={formData.vessel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
                  placeholder="Название вашего судна"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Оценка *
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingChange(rating)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        rating <= formData.rating
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.rating === 5 && 'Отлично!'}
                  {formData.rating === 4 && 'Хорошо!'}
                  {formData.rating === 3 && 'Нормально'}
                  {formData.rating === 2 && 'Плохо'}
                  {formData.rating === 1 && 'Очень плохо'}
                </p>
              </div>

              <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-2">
                  Ваш отзыв *
                </label>
                <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
                  placeholder="Расскажите о вашем опыте использования Starlink на судне..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  {formData.text.length}/1000 символов
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="text-sm font-medium text-blue-900 mb-1">
                      Модерация отзывов
                    </h4>
                    <p className="text-sm text-blue-700">
                      Ваш отзыв будет опубликован после проверки модератором. Это может занять до 24 часов.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Отправляем отзыв...' : 'Отправить отзыв'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
