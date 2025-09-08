'use client'

import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Посмотрите, как работает Starlink
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Узнайте больше о возможностях спутникового интернета для морских судов
            </p>
          </div>

          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div className="relative aspect-video bg-gradient-to-br from-marine-900 to-ocean-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handlePlay}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                {/* Overlay content */}
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Starlink для морских судов</h3>
                  <p className="text-gray-200">Высокоскоростной интернет в любой точке океана</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 bg-marine-500/20 rounded-full blur-xl"></div>
                </div>
                <div className="absolute bottom-8 right-8">
                  <div className="w-12 h-12 bg-ocean-500/20 rounded-full blur-xl"></div>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-black">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-marine-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Видео загружается...</h3>
                    <p className="text-gray-400">Здесь будет демонстрационное видео</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Video features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Высокая скорость</h3>
              <p className="text-gray-600">До 200 Мбит/с в любой точке мирового океана</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Надежность</h3>
              <p className="text-gray-600">99.9% времени работы даже в штормовую погоду</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-marine-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-marine-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Быстрая установка</h3>
              <p className="text-gray-600">Профессиональный монтаж за 4-8 часов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
