import { Metadata } from 'next'
import Header from '@/components/Header'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Тарифы Starlink для морских судов | Цены на спутниковый интернет',
  description: 'Актуальные тарифы на спутниковый интернет Starlink для яхт, рыболовных и коммерческих судов. Гибкие тарифные планы.',
  keywords: 'тарифы старлинк, цены на интернет для судов, стоимость спутникового интернета, тарифные планы',
}

export default function PricingPage() {
  const additionalServices = [
    {
      name: 'Установка и настройка',
      price: 'от 50 000',
      description: 'Профессиональная установка антенны и настройка оборудования'
    },
    {
      name: 'Техническая поддержка',
      price: 'включена',
      description: 'Круглосуточная поддержка на русском языке'
    },
    {
      name: 'Замена оборудования',
      price: 'бесплатно',
      description: 'При поломке по гарантии - замена без доплат'
    },
    {
      name: 'Обучение экипажа',
      price: 'включено',
      description: 'Обучение работе с системой и мобильным приложением'
    }
  ]

  const faq = [
    {
      question: 'Какая скорость интернета в море?',
      answer: 'Скорость зависит от выбранного тарифа: от 50 Мбит/с для яхт до 200 Мбит/с для коммерческих судов. В реальных условиях скорость может варьироваться в зависимости от погодных условий и загрузки сети.'
    },
    {
      question: 'Работает ли интернет в шторм?',
      answer: 'Да, антенна Starlink устойчива к морским условиям и продолжает работать даже в штормовую погоду. Система автоматически компенсирует качку судна.'
    },
    {
      question: 'Сколько времени занимает установка?',
      answer: 'Установка и настройка занимает от 4 до 8 часов в зависимости от сложности монтажа. Мы работаем в удобное для вас время.'
    },
    {
      question: 'Можно ли изменить тариф?',
      answer: 'Да, вы можете изменить тарифный план в любое время. Изменения вступают в силу с начала следующего расчетного периода.'
    },
    {
      question: 'Есть ли ограничения по трафику?',
      answer: 'Нет, все наши тарифы включают неограниченный трафик. Вы можете пользоваться интернетом без ограничений по объему данных.'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Тарифы Starlink для морских судов
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Выберите подходящий тарифный план для вашего судна. 
              Гибкие условия и прозрачное ценообразование.
            </p>
          </div>
        </div>
      </section>

      {/* Основные тарифы */}
      <Pricing />

      {/* Дополнительные услуги */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Все необходимое для комфортного использования Starlink на вашем судне
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <div className="text-2xl font-bold text-marine-600 mb-3">
                  {service.price}
                </div>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о тарифах и услугах
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="section-padding bg-marine-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна помощь с выбором тарифа?
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Наши специалисты помогут подобрать оптимальный тариф для вашего судна
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Получить консультацию
            </a>
            <a href="tel:+78001234567" className="btn-secondary border-white text-white hover:bg-white hover:text-marine-600">
              Позвонить: +7 (800) 123-45-67
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
