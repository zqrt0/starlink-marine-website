'use client'

import { useState } from 'react'
import { trackGoal, GOALS } from '@/lib/analytics'

export default function SimpleContactForm() {
  const [formData, setFormData] = useState({
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
    
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Пожалуйста, заполните все обязательные поля')
      return
    }

    setIsSubmitting(true)

    try {
      // Отправка цели в Яндекс.Метрику
      trackGoal(GOALS.FORM_SUBMIT, {
        form_type: 'contact',
        name: formData.name,
        phone: formData.phone,
        email: formData.email
      })

      // Имитация отправки формы
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Заявка отправлена')
      
      // Очистка формы
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
    } catch (error) {
      alert('Произошла ошибка при отправке заявки')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Оставить заявку
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marine-500 focus:border-transparent"
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marine-500 focus:border-transparent"
            placeholder="+7 (999) 123-45-67"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marine-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marine-500 focus:border-transparent"
            placeholder="Расскажите о ваших потребностях..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-marine-600 text-white py-2 px-4 rounded-md hover:bg-marine-700 focus:outline-none focus:ring-2 focus:ring-marine-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
        </button>
      </form>
    </div>
  )
}
