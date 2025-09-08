import { Metadata } from 'next'
import Header from '@/components/Header'
import Calculator from '@/components/Calculator'
import WeatherWidget from '@/components/WeatherWidget'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Калькулятор стоимости Starlink | Рассчитать цену подключения',
  description: 'Рассчитайте стоимость подключения Starlink для вашего судна. Узнайте точную цену оборудования, установки и абонентской платы.',
  keywords: 'калькулятор старлинк, стоимость подключения, цена интернета для судов, расчет тарифов',
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Калькулятор стоимости Starlink
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Рассчитайте точную стоимость подключения высокоскоростного интернета 
              для вашего судна за несколько минут
            </p>
          </div>
        </div>
      </section>

      {/* Калькулятор */}
      <Calculator />

      {/* Погодный виджет */}
      <WeatherWidget />

      {/* Дополнительная информация */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Что включает стоимость?
              </h2>
              <p className="text-xl text-gray-600">
                Полная стоимость подключения Starlink включает несколько компонентов
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Оборудование
                </h3>
                <p className="text-gray-600">
                  Антенна Starlink, модем, роутер и все необходимые кабели для подключения
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Установка
                </h3>
                <p className="text-gray-600">
                  Профессиональный монтаж антенны, настройка системы и обучение экипажа
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Абонентская плата
                </h3>
                <p className="text-gray-600">
                  Ежемесячная плата за доступ к высокоскоростному интернету Starlink
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ по стоимости */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Частые вопросы о стоимости
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Можно ли рассрочить оплату оборудования?
                </h3>
                <p className="text-gray-600">
                  Да, мы предлагаем рассрочку на оборудование до 12 месяцев без переплат. 
                  Первоначальный взнос составляет 30% от стоимости оборудования.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Включает ли стоимость гарантию?
                </h3>
                <p className="text-gray-600">
                  Да, на все оборудование предоставляется гарантия 2 года. 
                  На работы по установке - гарантия 1 год.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Есть ли скрытые платежи?
                </h3>
                <p className="text-gray-600">
                  Нет, в стоимость включены все работы и материалы. 
                  Дополнительные расходы могут возникнуть только при нестандартной установке.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Можно ли изменить тарифный план?
                </h3>
                <p className="text-gray-600">
                  Да, тарифный план можно изменить в любое время. 
                  Изменения вступают в силу с начала следующего расчетного периода.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="section-padding bg-marine-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы подключить Starlink?
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Свяжитесь с нами для получения персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Получить предложение
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
