'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const faqItems: FAQItem[] = [
    {
      question: 'Какая скорость интернета в море?',
      answer: 'Скорость зависит от выбранного тарифа: от 50 Мбит/с для яхт до 200 Мбит/с для коммерческих судов. В реальных условиях скорость может варьироваться в зависимости от погодных условий и загрузки сети.',
      category: 'technical'
    },
    {
      question: 'Работает ли интернет в шторм?',
      answer: 'Да, антенна Starlink устойчива к морским условиям и продолжает работать даже в штормовую погоду. Система автоматически компенсирует качку судна.',
      category: 'technical'
    },
    {
      question: 'Сколько времени занимает установка?',
      answer: 'Установка и настройка занимает от 4 до 8 часов в зависимости от сложности монтажа. Мы работаем в удобное для вас время.',
      category: 'installation'
    },
    {
      question: 'Можно ли изменить тариф?',
      answer: 'Да, вы можете изменить тарифный план в любое время. Изменения вступают в силу с начала следующего расчетного периода.',
      category: 'pricing'
    },
    {
      question: 'Есть ли ограничения по трафику?',
      answer: 'Нет, все наши тарифы включают неограниченный трафик. Вы можете пользоваться интернетом без ограничений по объему данных.',
      category: 'pricing'
    },
    {
      question: 'Какая гарантия на оборудование?',
      answer: 'Мы предоставляем гарантию 2 года на оборудование и 1 год на работы по установке. При поломке по гарантии замена производится бесплатно.',
      category: 'support'
    },
    {
      question: 'Нужно ли получать разрешения?',
      answer: 'Для установки спутниковой антенны на судно не требуется специальных разрешений. Мы помогаем с оформлением всех необходимых документов.',
      category: 'legal'
    },
    {
      question: 'Как происходит техническая поддержка?',
      answer: 'Техническая поддержка работает 24/7 на русском языке. Вы можете связаться с нами по телефону, email или через мобильное приложение.',
      category: 'support'
    },
    {
      question: 'Можно ли использовать интернет для видеозвонков?',
      answer: 'Да, качество интернета позволяет проводить видеозвонки, онлайн-конференции и стриминг. Рекомендуем тарифы от 100 Мбит/с для стабильной работы.',
      category: 'technical'
    },
    {
      question: 'Что делать, если антенна сломалась?',
      answer: 'При поломке антенны свяжитесь с нашей службой поддержки. Мы организуем замену оборудования в кратчайшие сроки, обычно в течение 24-48 часов.',
      category: 'support'
    }
  ]

  const categories = [
    { id: 'all', name: 'Все вопросы', count: faqItems.length },
    { id: 'technical', name: 'Технические', count: faqItems.filter(item => item.category === 'technical').length },
    { id: 'pricing', name: 'Тарифы', count: faqItems.filter(item => item.category === 'pricing').length },
    { id: 'installation', name: 'Установка', count: faqItems.filter(item => item.category === 'installation').length },
    { id: 'support', name: 'Поддержка', count: faqItems.filter(item => item.category === 'support').length },
    { id: 'legal', name: 'Правовые', count: faqItems.filter(item => item.category === 'legal').length }
  ]

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory)

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на популярные вопросы о Starlink для морских судов
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-marine-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-marine-600 transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не нашли ответ на свой вопрос?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Задать вопрос
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
