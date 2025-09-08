import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Блог Starlink Marine | Новости и статьи о спутниковом интернете',
  description: 'Читайте последние новости о Starlink для морских судов, советы по использованию и технические статьи.',
  keywords: 'блог старлинк, новости спутникового интернета, статьи о морской связи, технические советы',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать антенну Starlink для яхты',
      excerpt: 'Подробное руководство по выбору и установке спутниковой антенны Starlink на частную яхту.',
      date: '2024-01-15',
      category: 'Установка',
      readTime: '5 мин',
      image: '🚤'
    },
    {
      id: 2,
      title: 'Преимущества Starlink для рыболовных судов',
      excerpt: 'Как спутниковый интернет помогает рыболовному флоту повысить эффективность работы.',
      date: '2024-01-10',
      category: 'Отрасль',
      readTime: '7 мин',
      image: '🐟'
    },
    {
      id: 3,
      title: 'Техническая поддержка 24/7: что это значит',
      excerpt: 'Рассказываем о круглосуточной технической поддержке и как она работает в море.',
      date: '2024-01-05',
      category: 'Поддержка',
      readTime: '4 мин',
      image: '🛠️'
    },
    {
      id: 4,
      title: 'Сравнение тарифов Starlink для разных типов судов',
      excerpt: 'Детальное сравнение тарифных планов и рекомендации по выбору оптимального решения.',
      date: '2023-12-28',
      category: 'Тарифы',
      readTime: '6 мин',
      image: '📊'
    },
    {
      id: 5,
      title: 'Безопасность в море: как интернет помогает',
      excerpt: 'Роль надежной связи в обеспечении безопасности морских судов и экипажа.',
      date: '2023-12-20',
      category: 'Безопасность',
      readTime: '8 мин',
      image: '🛡️'
    },
    {
      id: 6,
      title: 'Интеграция Starlink с судовыми системами',
      excerpt: 'Как подключить спутниковый интернет к навигационным и коммуникационным системам судна.',
      date: '2023-12-15',
      category: 'Технологии',
      readTime: '10 мин',
      image: '⚙️'
    }
  ]

  const categories = [
    { name: 'Все', count: 6, active: true },
    { name: 'Установка', count: 1, active: false },
    { name: 'Отрасль', count: 1, active: false },
    { name: 'Поддержка', count: 1, active: false },
    { name: 'Тарифы', count: 1, active: false },
    { name: 'Безопасность', count: 1, active: false },
    { name: 'Технологии', count: 1, active: false }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Блог Starlink Marine
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Новости, советы и технические статьи о спутниковом интернете 
              для морских судов
            </p>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="section-padding bg-white border-b">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-marine-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Статьи */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-marine-100 text-marine-600 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-marine-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-marine-600 hover:text-marine-700 font-medium text-sm"
                    >
                      Читать далее →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Подписка на новости */}
      <section className="section-padding bg-marine-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Подпишитесь на новости
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Получайте последние новости о Starlink и полезные советы по email
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Подписаться
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
