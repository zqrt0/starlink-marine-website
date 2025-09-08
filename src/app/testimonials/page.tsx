import { Metadata } from 'next'
import Header from '@/components/Header'
import Testimonials from '@/components/Testimonials'
import TestimonialForm from '@/components/TestimonialForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Отзывы клиентов Starlink Marine | Реальные истории',
  description: 'Читайте отзывы владельцев яхт, рыболовных и коммерческих судов о работе Starlink в море.',
  keywords: 'отзывы старлинк, отзывы клиентов, интернет для судов, морская связь',
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Отзывы наших клиентов
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Узнайте, что говорят владельцы судов о работе Starlink в море. 
              Реальные истории и опыт использования.
            </p>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <Testimonials />

      {/* Форма для отправки отзыва */}
      <TestimonialForm />

      {/* Статистика отзывов */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Статистика отзывов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Наши клиенты высоко оценивают качество услуг Starlink
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-marine-600 mb-2">4.9</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-marine-600 mb-2">500+</div>
              <div className="text-gray-600">Отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-marine-600 mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-marine-600 mb-2">24ч</div>
              <div className="text-gray-600">Ответ на отзыв</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="section-padding bg-marine-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Станьте частью сообщества
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Присоединяйтесь к сотням владельцев судов, которые уже используют Starlink
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Подключить Starlink
            </a>
            <a href="/pricing" className="btn-secondary border-white text-white hover:bg-white hover:text-marine-600">
              Посмотреть тарифы
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
