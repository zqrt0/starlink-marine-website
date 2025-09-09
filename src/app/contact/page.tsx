import { Metadata } from 'next'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Контакты Starlink Marine | Связаться с нами',
  description: 'Свяжитесь с нами для подключения Starlink на ваше судно. Бесплатная консультация и расчет стоимости.',
  keywords: 'контакты старлинк, связаться с нами, заявка на подключение, консультация',
}

export default function ContactPage() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'info@starlink-marine.com',
      description: 'Ответим в течение 24 часов',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Telegram',
      value: '@starlink_marine',
      description: 'Быстрая связь через мессенджер',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
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
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Получите бесплатную консультацию по подключению Starlink 
              для вашего судна. Мы поможем подобрать оптимальное решение.
            </p>
          </div>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите удобный способ связи с нами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-marine-500 to-ocean-500 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.title}
                </h3>
                <p className="text-marine-600 font-medium mb-1">
                  {contact.value}
                </p>
                <p className="text-sm text-gray-500">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <ContactForm />

      {/* Дополнительная информация */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Почему выбирают нас?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-marine-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Опыт работы</h3>
                    <p className="text-gray-600">Более 5 лет опыта в области морской спутниковой связи</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-marine-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Сертифицированные специалисты</h3>
                    <p className="text-gray-600">Все наши монтажники имеют сертификаты Starlink</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-marine-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Гарантия качества</h3>
                    <p className="text-gray-600">Гарантия на оборудование и работы до 2 лет</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-marine-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Индивидуальный подход</h3>
                    <p className="text-gray-600">Подбираем решение под конкретные потребности вашего судна</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Как мы работаем?
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-marine-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <p className="text-gray-700">Вы оставляете заявку или звоните нам</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-marine-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <p className="text-gray-700">Проводим бесплатную консультацию</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-marine-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <p className="text-gray-700">Подбираем оптимальное решение</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-marine-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <p className="text-gray-700">Устанавливаем и настраиваем оборудование</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-marine-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <p className="text-gray-700">Обеспечиваем техническую поддержку</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
