'use client'

import { useState } from 'react'

interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: 'update' | 'announcement' | 'technical' | 'partnership'
  image: string
  featured: boolean
}

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Расширение покрытия Starlink в Баренцевом море',
      excerpt: 'Starlink теперь доступен в Баренцевом море для коммерческих судов',
      content: 'Мы рады сообщить о расширении зоны покрытия Starlink в Баренцевом море. Теперь высокоскоростной интернет доступен для коммерческих судов, работающих в этом регионе. Это открывает новые возможности для рыболовных и грузовых судов.',
      date: '2024-01-15',
      category: 'announcement',
      image: '🌊',
      featured: true
    },
    {
      id: '2',
      title: 'Новые тарифные планы для яхт',
      excerpt: 'Представляем специальные тарифы для владельцев яхт и катеров',
      content: 'Специально для владельцев яхт и катеров мы разработали новые тарифные планы с гибкими условиями. Теперь вы можете выбирать между ежемесячной оплатой и пакетными предложениями на сезон.',
      date: '2024-01-10',
      category: 'update',
      image: '⛵',
      featured: true
    },
    {
      id: '3',
      title: 'Техническое обновление антенн',
      excerpt: 'Улучшена стабильность работы антенн в штормовых условиях',
      content: 'Проведено техническое обновление антенн Starlink, которое значительно улучшает стабильность работы в штормовых условиях. Обновление включает улучшенную систему стабилизации и защиту от обледенения.',
      date: '2024-01-05',
      category: 'technical',
      image: '🔧',
      featured: false
    },
    {
      id: '4',
      title: 'Партнерство с портом Сочи',
      excerpt: 'Заключено соглашение о сотрудничестве с яхтенным портом Сочи',
      content: 'Мы заключили партнерское соглашение с яхтенным портом Сочи. Теперь владельцы яхт могут получить скидку на установку Starlink при стоянке в порту Сочи.',
      date: '2024-01-01',
      category: 'partnership',
      image: '🤝',
      featured: false
    },
    {
      id: '5',
      title: 'Новая версия мобильного приложения',
      excerpt: 'Выпущено обновление мобильного приложения для управления Starlink',
      content: 'Выпущена новая версия мобильного приложения, которая позволяет управлять настройками Starlink прямо с телефона. Добавлены функции мониторинга трафика и управления пользователями.',
      date: '2023-12-28',
      category: 'update',
      image: '📱',
      featured: false
    },
    {
      id: '6',
      title: 'Снижение цен на оборудование',
      excerpt: 'Снижены цены на базовые комплекты оборудования Starlink',
      content: 'Мы снизили цены на базовые комплекты оборудования Starlink на 15%. Это делает высокоскоростной интернет более доступным для владельцев судов.',
      date: '2023-12-20',
      category: 'announcement',
      image: '💰',
      featured: false
    }
  ]

  const categories = [
    { value: 'all', label: 'Все новости', icon: '📰' },
    { value: 'announcement', label: 'Объявления', icon: '📢' },
    { value: 'update', label: 'Обновления', icon: '🔄' },
    { value: 'technical', label: 'Технические', icon: '⚙️' },
    { value: 'partnership', label: 'Партнерство', icon: '🤝' }
  ]

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  const featuredNews = newsItems.filter(item => item.featured)
  const regularNews = filteredNews.filter(item => !item.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcement': return 'bg-blue-100 text-blue-800'
      case 'update': return 'bg-green-100 text-green-800'
      case 'technical': return 'bg-purple-100 text-purple-800'
      case 'partnership': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.label : 'Новость'
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Новости и обновления
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за последними новостями о Starlink и наших услугах
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-marine-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Список новостей */}
          <div className="lg:col-span-2 space-y-6">
            {/* Рекомендуемые новости */}
            {selectedCategory === 'all' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Рекомендуемые новости
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {featuredNews.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedNews(item)}
                      className="bg-gradient-to-br from-marine-50 to-ocean-50 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">{item.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                              {getCategoryLabel(item.category)}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDate(item.date)}
                            </span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {item.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Обычные новости */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {selectedCategory === 'all' ? 'Все новости' : getCategoryLabel(selectedCategory)}
              </h3>
              <div className="space-y-4">
                {regularNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedNews(item)}
                    className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{item.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                            {getCategoryLabel(item.category)}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatDate(item.date)}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Детали новости */}
          <div className="lg:col-span-1">
            {selectedNews ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{selectedNews.image}</div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedNews.category)}`}>
                      {getCategoryLabel(selectedNews.category)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {formatDate(selectedNews.date)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {selectedNews.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {selectedNews.content}
                </p>

                <div className="space-y-3">
                  <a href="/contact" className="w-full btn-primary text-center block">
                    Узнать больше
                  </a>
                  <a href="/blog" className="w-full btn-secondary text-center block">
                    Все новости
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Выберите новость
                </h3>
                <p className="text-gray-600">
                  Кликните на любую новость, чтобы прочитать подробности
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Подписка на новости */}
        <div className="mt-16 bg-gradient-to-r from-marine-600 to-ocean-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Подпишитесь на новости
          </h3>
          <p className="text-marine-100 mb-6 max-w-2xl mx-auto">
            Получайте последние новости о Starlink, обновлениях и специальных предложениях
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-marine-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
