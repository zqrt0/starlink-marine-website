import { Metadata } from 'next'
import Header from '@/components/Header'
import StarlinkGallery from '@/components/StarlinkGallery'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Фотогалерея Starlink | Оборудование и установка',
  description: 'Фотографии оборудования Starlink, процесса установки и работы в море. Посмотрите, как выглядит спутниковый интернет на морских судах.',
  keywords: 'фото старлинк, галерея старлинк, установка старлинк, антенна старлинк, оборудование старлинк',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero секция */}
      <section className="bg-gradient-to-br from-marine-900 to-ocean-900 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Фотогалерея Starlink
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Посмотрите, как выглядит оборудование Starlink и процесс его установки 
              на различных типах морских судов
            </p>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <StarlinkGallery />

      {/* Дополнительная информация */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                О фотографиях
              </h2>
              <p className="text-xl text-gray-600">
                Все фотографии сделаны на реальных объектах наших клиентов
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
                  Реальные объекты
                </h3>
                <p className="text-gray-600 text-sm">
                  Фотографии сделаны на судах наших клиентов
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Высокое качество
                </h3>
                <p className="text-gray-600 text-sm">
                  Профессиональные фотографии высокого разрешения
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Актуальные
                </h3>
                <p className="text-gray-600 text-sm">
                  Фотографии обновляются регулярно
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Разные типы судов
                </h3>
                <p className="text-gray-600 text-sm">
                  Яхты, рыболовные и коммерческие суда
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
            Хотите увидеть Starlink на своем судне?
          </h2>
          <p className="text-xl mb-8 text-marine-100">
            Свяжитесь с нами для получения консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary bg-white text-marine-600 hover:bg-gray-100">
              Получить консультацию
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
