'use client'

import { useState } from 'react'
import { useToast } from './NotificationProvider'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      toast.error('Введите email адрес')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Введите корректный email адрес')
      return
    }

    setIsSubmitting(true)

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Спасибо за подписку! Мы будем присылать вам новости о Starlink.')
      setEmail('')
    } catch (error) {
      toast.error('Произошла ошибка при подписке. Попробуйте еще раз.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-marine-600 to-ocean-600 text-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Подпишитесь на новости
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Получайте последние новости о Starlink, советы по использованию и специальные предложения
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-marine-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Подписываем...' : 'Подписаться'}
              </button>
            </div>
          </form>

          <p className="text-sm text-marine-200 mt-4">
            Мы не спамим. Отписаться можно в любое время.
          </p>
        </div>
      </div>
    </section>
  )
}
