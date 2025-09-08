import { Metadata } from 'next'
import Header from '@/components/Header'
import EquipmentShowcase from '@/components/EquipmentShowcase'
import InteractiveMap from '@/components/InteractiveMap'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Оборудование Starlink для морских судов | Каталог техники',
  description: 'Профессиональное оборудование Starlink для морских судов: антенны, модемы, роутеры. Готовые комплекты для яхт, рыболовных и коммерческих судов.',
  keywords: 'оборудование старлинк, антенна старлинк, модем морской, роутер для судов, комплекты старлинк',
}

export default function EquipmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Оборудование Starlink
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Профессиональное оборудование для подключения высокоскоростного интернета 
              на морских судах любого типа
            </p>
          </div>
        </div>
      </section>

      {/* Каталог оборудования */}
      <EquipmentShowcase />

      {/* Интерактивная карта портов */}
      <InteractiveMap />

      {/* Преимущества оборудования */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают наше оборудование?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем только сертифицированное оборудование, адаптированное для морских условий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Сертификация
              </h3>
              <p className="text-gray-600">
                Все оборудование сертифицировано для использования в морских условиях
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Гарантия
              </h3>
              <p className="text-gray-600">
                2 года гарантии на все оборудование и 1 год на работы по установке
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Поддержка
              </h3>
              <p className="text-gray-600">
                Круглосуточная техническая поддержка и консультации специалистов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Производительность
              </h3>
              <p className="text-gray-600">
                Высокая скорость и надежность работы в любых погодных условиях
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Процесс заказа */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как заказать оборудование?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс заказа и быстрая доставка по всей России
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Выберите оборудование
              </h3>
              <p className="text-gray-600 text-sm">
                Подберите подходящий комплект или отдельные компоненты
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-marine-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Оформите заказ
              </h3>
              <p className="text-gray-600 text-sm">
                Заполните форму заказа или свяжитесь с нами по телефону
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-marine-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Получите оборудование
              </h3>
              <p className="text-gray-600 text-sm">
                Доставка по всей России в течение 3-5 рабочих дней
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-marine-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Установка и настройка
              </h3>
              <p className="text-gray-600 text-sm">
                Профессиональная установка и настройка нашими специалистами
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ по оборудованию */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Частые вопросы об оборудовании
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Какое оборудование входит в базовый комплект?
                </h3>
                <p className="text-gray-600">
                  Базовый комплект включает антенну Starlink, морской модем, комплект крепления и кабели. 
                  Для коммерческих судов рекомендуется добавить морской роутер.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Можно ли установить оборудование самостоятельно?
                </h3>
                <p className="text-gray-600">
                  Мы рекомендуем профессиональную установку нашими специалистами. 
                  Это гарантирует правильную настройку и максимальную производительность системы.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Как долго работает оборудование без обслуживания?
                </h3>
                <p className="text-gray-600">
                  Оборудование рассчитано на работу в течение 5-7 лет без технического обслуживания. 
                  Рекомендуется ежегодная проверка соединений и очистка антенны.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Что делать, если оборудование вышло из строя?
                </h3>
                <p className="text-gray-600">
                  В случае поломки в течение гарантийного срока мы бесплатно заменим оборудование. 
                  Также предоставляем техническую поддержку 24/7.
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
            Готовы заказать оборудование?
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Свяжитесь с нами для получения персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Заказать оборудование
            </a>
            <a href="/calculator" className="btn-secondary border-white text-white hover:bg-white hover:text-marine-600">
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
