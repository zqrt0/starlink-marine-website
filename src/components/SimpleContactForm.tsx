'use client'

import { useState } from 'react'
import { trackGoal, GOALS } from '@/lib/analytics'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

export default function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Валидация на клиенте
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Пожалуйста, заполните все обязательные поля')
      setIsSubmitting(false)
      return
    }

    try {
      // Отправляем данные в Telegram
      const response = await fetch('/api/sendToTelegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        // Очищаем поля
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        })
        
        // Отправляем цель в Яндекс.Метрику
        trackGoal(GOALS.FORM_SUBMIT, { form_type: 'telegram_contact' })
        
        // Показываем alert
        alert('Заявка отправлена')
      } else {
        alert(`Ошибка: ${result.error || 'Не удалось отправить заявку'}`)
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Связаться с нами
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Имя */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
            placeholder="Введите ваше имя"
          />
        </div>

        {/* Телефон */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        {/* Email */}
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
            placeholder="example@email.com"
          />
        </div>

        {/* Сообщение */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors resize-none"
            placeholder="Опишите ваш запрос..."
          />
        </div>

        {/* Кнопка отправки */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-marine-600 hover:bg-marine-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  )
}