'use client'

import { useState } from 'react'
import { trackGoal, GOALS } from '@/lib/analytics'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  vesselType: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    vesselType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const vesselTypes = [
    'Яхта',
    'Катер',
    'Рыболовное судно',
    'Коммерческое судно',
    'Грузовое судно',
    'Пассажирское судно',
    'Другое'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Валидация на клиенте
    if (!formData.name || !formData.phone || !formData.email || !formData.vesselType) {
      alert('Пожалуйста, заполните все обязательные поля')
      setIsSubmitting(false)
      return
    }

    try {
      console.log('Отправляем данные:', formData)
      
      // Отправка на mock API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log('Ответ сервера:', result)

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
          vesselType: ''
        })
        
        // Отправка цели в Яндекс.Метрику
        trackGoal(GOALS.FORM_SUBMIT, {
          vessel_type: formData.vesselType,
          form_type: 'contact'
        })
        
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
      } else {
        setSubmitStatus('error')
        alert(`Ошибка: ${result.error || 'Не удалось отправить заявку'}`)
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      setSubmitStatus('error')
      alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.')
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
              Оставить заявку
            </h2>
            <p className="text-xl text-gray-600">
              Получите персональную консультацию по подключению Starlink для вашего судна
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Форма */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Ваше имя"
                  />
                </div>

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

                <div>
                  <label htmlFor="vesselType" className="block text-sm font-medium text-gray-700 mb-2">
                    Тип судна *
                  </label>
                  <select
                    id="vesselType"
                    name="vesselType"
                    value={formData.vesselType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Выберите тип судна</option>
                    {vesselTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent transition-colors"
                    placeholder="Расскажите о ваших потребностях в интернете на судне..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">
                      Произошла ошибка при отправке заявки. Попробуйте еще раз или свяжитесь с нами по телефону.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                </button>
              </form>
            </div>

            {/* Контактная информация */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Контактная информация
                </h3>
                
                <div className="space-y-6">

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-marine-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a 
                        href="mailto:info@starlink-marine.com" 
                        className="text-gray-600 hover:text-marine-600 transition-colors"
                        onClick={() => trackGoal(GOALS.EMAIL_CLICK, { source: 'contact_page' })}
                      >
                        info@starlink-marine.com
                      </a>
                      <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="bg-marine-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Почему стоит обратиться к нам?
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-marine-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Бесплатная консультация
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-marine-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Индивидуальный подход
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-marine-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Помощь с установкой
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-marine-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Техническая поддержка 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
