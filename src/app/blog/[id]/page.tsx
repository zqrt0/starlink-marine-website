import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

// Mock данные для статей блога
const blogPosts = {
  '1': {
    title: 'Как выбрать антенну Starlink для яхты',
    content: `
      <p>Выбор правильной антенны Starlink для вашей яхты — это критически важное решение, которое повлияет на качество интернет-соединения в море. В этой статье мы рассмотрим все аспекты выбора и установки спутниковой антенны.</p>
      
      <h2>Типы антенн Starlink</h2>
      <p>Starlink предлагает несколько типов антенн, каждый из которых подходит для определенных условий использования:</p>
      
      <h3>1. Стандартная антенна</h3>
      <p>Идеально подходит для стационарной установки на яхтах среднего размера. Обеспечивает стабильное соединение при умеренной качке.</p>
      
      <h3>2. Морская антенна</h3>
      <p>Специально разработана для морских условий. Имеет усиленную защиту от коррозии и более широкий диапазон работы при качке судна.</p>
      
      <h3>3. Компактная антенна</h3>
      <p>Подходит для небольших яхт и катеров. Легкая и компактная, но с несколько меньшей производительностью.</p>
      
      <h2>Факторы выбора</h2>
      <p>При выборе антенны учитывайте следующие факторы:</p>
      <ul>
        <li>Размер и тип вашего судна</li>
        <li>Планируемые маршруты плавания</li>
        <li>Количество пользователей интернета</li>
        <li>Бюджет на оборудование</li>
      </ul>
      
      <h2>Установка и настройка</h2>
      <p>Профессиональная установка антенны — залог надежной работы. Наши специалисты помогут с монтажом и настройкой оборудования.</p>
    `,
    excerpt: 'Подробное руководство по выбору и установке спутниковой антенны Starlink на частную яхту.',
    date: '2024-01-15',
    category: 'Установка',
    readTime: '5 мин',
    image: '🚤',
    tags: ['установка', 'яхта', 'антенна', 'starlink']
  },
  '2': {
    title: 'Преимущества Starlink для рыболовных судов',
    content: `
      <p>Рыболовная отрасль все больше зависит от современных технологий связи. Starlink открывает новые возможности для рыболовных судов.</p>
      
      <h2>Повышение эффективности</h2>
      <p>С надежным интернетом рыболовные суда могут:</p>
      <ul>
        <li>Получать актуальную информацию о погоде</li>
        <li>Отслеживать косяки рыбы в реальном времени</li>
        <li>Связываться с берегом для координации</li>
        <li>Использовать навигационные приложения</li>
      </ul>
      
      <h2>Безопасность экипажа</h2>
      <p>Постоянная связь с берегом критически важна для безопасности. В случае чрезвычайной ситуации помощь может быть вызвана мгновенно.</p>
      
      <h2>Экономические выгоды</h2>
      <p>Инвестиции в спутниковый интернет быстро окупаются за счет повышения эффективности рыболовства и снижения рисков.</p>
    `,
    excerpt: 'Как спутниковый интернет помогает рыболовному флоту повысить эффективность работы.',
    date: '2024-01-10',
    category: 'Отрасль',
    readTime: '7 мин',
    image: '🐟',
    tags: ['рыболовство', 'эффективность', 'безопасность']
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.id as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Статья не найдена',
    }
  }

  return {
    title: `${post.title} | Starlink Marine Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.id as keyof typeof blogPosts]

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="section-padding bg-white">
          <div className="container-max text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Статья не найдена</h1>
            <p className="text-xl text-gray-600 mb-8">Запрашиваемая статья не существует.</p>
            <Link href="/blog" className="btn-primary">
              Вернуться к блогу
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/blog" className="text-marine-300 hover:text-white transition-colors">
                ← Назад к блогу
              </Link>
            </div>
            <div className="text-6xl mb-6">{post.image}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center space-x-6 text-marine-200">
              <span className="px-3 py-1 bg-marine-700 rounded-full text-sm">
                {post.category}
              </span>
              <time>{new Date(post.date).toLocaleDateString('ru-RU')}</time>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Содержание статьи */}
      <article className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      {/* Похожие статьи */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Похожие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .filter(([id]) => id !== params.id)
                .slice(0, 2)
                .map(([id, article]) => (
                  <Link key={id} href={`/blog/${id}`} className="group">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="text-4xl mb-4">{article.image}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-marine-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="px-3 py-1 bg-marine-100 text-marine-600 text-sm rounded-full">
                            {article.category}
                          </span>
                          <span className="text-gray-500 text-sm">{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
