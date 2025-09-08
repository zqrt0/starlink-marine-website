'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  id: string
  src: string
  alt: string
  title: string
  description: string
  category: string
}

export default function PhotoGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const photos: Photo[] = [
    {
      id: '1',
      src: '/images/starlink/real/network/global-network-1.jpg',
      alt: 'Глобальная сеть Starlink',
      title: 'Глобальная сеть Starlink',
      description: 'Вид Земли с космической сетью Starlink, обеспечивающей глобальное покрытие интернетом',
      category: 'network'
    },
    {
      id: '2',
      src: '/images/starlink/real/maritime/ship-port-1.jpg',
      alt: 'Морское судно в порту',
      title: 'Морское судно в порту',
      description: 'Современное морское судно с коммуникационным оборудованием в порту',
      category: 'maritime'
    },
    {
      id: '3',
      src: '/images/starlink/real/antennas/satellite-dish-1.jpg',
      alt: 'Спутниковая антенна Starlink',
      title: 'Спутниковая антенна Starlink',
      description: 'Белая спутниковая антенна Starlink на палубе судна',
      category: 'antennas'
    },
    {
      id: '4',
      src: '/images/starlink/real/equipment/starlink-boxes-1.jpg',
      alt: 'Оборудование Starlink',
      title: 'Оборудование Starlink',
      description: 'Комплекты оборудования Starlink Performance Kit, готовые к установке',
      category: 'equipment'
    },
    {
      id: '5',
      src: '/images/starlink/real/installation/ship-infrastructure-1.jpg',
      alt: 'Портовая инфраструктура',
      title: 'Портовая инфраструктура',
      description: 'Современная портовая инфраструктура с кранами и коммуникационным оборудованием',
      category: 'installation'
    },
    {
      id: '6',
      src: '/images/starlink/real/maritime/container-ship-1.jpg',
      alt: 'Контейнеровоз в океане',
      title: 'Контейнеровоз в океане',
      description: 'Большой контейнеровоз с оборудованием Starlink в открытом океане',
      category: 'maritime'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Реальные фотографии Starlink в действии
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Посмотрите на реальные примеры установки и использования Starlink на морских судах
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {photos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay при наведении */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal для просмотра фото */}
          {selectedPhoto && (
            <div className="fixed inset-0 z-[60] bg-black bg-opacity-75 flex items-center justify-center p-4">
              <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative h-96">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedPhoto.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Реальные примеры</h3>
              <p className="text-gray-600">Фотографии с реальных установок Starlink на морских судах</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Проверенное качество</h3>
              <p className="text-gray-600">Все фотографии сделаны на реальных судах с установленным Starlink</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрая установка</h3>
              <p className="text-gray-600">Профессиональный монтаж за 4-8 часов на любом типе судна</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
