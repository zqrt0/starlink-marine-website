'use client'

import { useState } from 'react'
import Image from 'next/image'
import DemoImage from './DemoImage'

interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  description: string
  category: 'equipment' | 'installation' | 'maritime' | 'antennas'
  isDemo?: boolean
}

export default function StarlinkGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Демо-изображения Starlink
  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/images/starlink/antennas/starlink-antenna-ship-1.jpg',
      alt: 'Starlink антенна на судне',
      title: 'Starlink антенна на судне',
      description: 'Антенна Starlink, установленная на палубе морского судна с белыми ограждениями',
      category: 'antennas',
      isDemo: true
    },
    {
      id: '2',
      src: '/images/starlink/antennas/starlink-antenna-ship-2.jpg',
      alt: 'Антенна Starlink на палубе',
      title: 'Антенна на палубе',
      description: 'Детальный вид антенны Starlink на палубе судна с различным морским оборудованием',
      category: 'antennas',
      isDemo: true
    },
    {
      id: '3',
      src: '/images/starlink/antennas/starlink-antenna-ship-3.jpg',
      alt: 'Комплексная установка антенны',
      title: 'Комплексная установка',
      description: 'Сложная система установки антенны Starlink с множественными ограждениями и оборудованием',
      category: 'antennas',
      isDemo: true
    },
    {
      id: '4',
      src: '/images/starlink/antennas/starlink-antenna-ship-4.jpg',
      alt: 'Антенна в зимних условиях',
      title: 'Работа в зимних условиях',
      description: 'Антенна Starlink на судне в зимних условиях с падающим снегом',
      category: 'antennas',
      isDemo: true
    },
    {
      id: '5',
      src: '/images/starlink/maritime/ship-starlink-harbor.jpg',
      alt: 'Судно с Starlink в порту',
      title: 'Судно в порту',
      description: 'Большое судно с установленным Starlink в портовой зоне с промышленными кранами',
      category: 'maritime',
      isDemo: true
    },
    {
      id: '6',
      src: '/images/starlink/maritime/container-ship-ocean.jpg',
      alt: 'Контейнеровоз в океане',
      title: 'Контейнеровоз в океане',
      description: 'Крупный контейнеровоз с Starlink, плывущий по океану с характерным кильватерным следом',
      category: 'maritime',
      isDemo: true
    },
    {
      id: '7',
      src: '/images/starlink/maritime/ship-starlink-harbor-2.jpg',
      alt: 'Вид с судна на порт',
      title: 'Вид с судна на порт',
      description: 'Вид с палубы судна на портовую зону с антенной Starlink на переднем плане',
      category: 'maritime',
      isDemo: true
    },
    {
      id: '8',
      src: '/images/starlink/equipment/starlink-equipment-stack.jpg',
      alt: 'Комплект оборудования Starlink',
      title: 'Комплект оборудования',
      description: 'Склад оборудования Starlink с коробками Performance Kit и аппаратными компонентами',
      category: 'equipment',
      isDemo: true
    },
    {
      id: '9',
      src: '/images/starlink/installation/ship-commemorative-plaque.jpg',
      alt: 'Мемориальная доска судна',
      title: 'Мемориальная доска',
      description: 'Бронзовая мемориальная доска с гербом Российской Федерации, посвященная строительству судна',
      category: 'installation',
      isDemo: true
    },
    {
      id: '10',
      src: '/images/starlink/installation/ship-infrastructure.jpg',
      alt: 'Инфраструктура судна',
      title: 'Инфраструктура судна',
      description: 'Внутренняя инфраструктура судна с трубами, кабелями и электронным оборудованием',
      category: 'installation',
      isDemo: true
    }
  ]

  const categories = [
    { value: 'all', label: 'Все фото', icon: '📸' },
    { value: 'antennas', label: 'Антенны', icon: '📡' },
    { value: 'equipment', label: 'Оборудование', icon: '⚙️' },
    { value: 'installation', label: 'Установка', icon: '🔧' },
    { value: 'maritime', label: 'В море', icon: '🌊' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Фотогалерея Starlink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Посмотрите, как выглядит оборудование Starlink и процесс его установки на морских судах
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-marine-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 bg-gray-200">
                {/* Демо-изображение */}
                <DemoImage
                  title={image.title}
                  description={image.description}
                  category={image.category}
                  className="w-full h-full"
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
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.description}
                </p>
                <div className="mt-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    image.category === 'antennas' ? 'bg-blue-100 text-blue-800' :
                    image.category === 'equipment' ? 'bg-green-100 text-green-800' :
                    image.category === 'installation' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {categories.find(c => c.value === image.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно для просмотра изображения */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="h-96">
                  <DemoImage
                    title={selectedImage.title}
                    description={selectedImage.description}
                    category={selectedImage.category}
                    className="w-full h-full"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Информация о демо-изображениях */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            🎨 Демо-изображения Starlink
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                ✨ Что показывается сейчас
              </h4>
              <p className="text-gray-600 mb-4">
                Сейчас в галерее отображаются красивые демо-изображения с градиентами и иконками, которые показывают структуру и категории фотографий Starlink.
              </p>
              <div className="bg-white rounded-lg p-4 text-sm">
                <div className="text-gray-700">
                  🎨 <strong>Демо-изображения включают:</strong>
                  <br />• 4 антенны с синими градиентами 📡
                  <br />• 3 морских судна с бирюзовыми градиентами 🚢
                  <br />• 1 оборудование с серыми градиентами ⚙️
                  <br />• 2 установки с зелеными градиентами 🔧
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                🔄 Как заменить на реальные фото
              </h4>
              <p className="text-gray-600 mb-4">
                Чтобы показать ваши реальные фотографии, просто замените placeholder файлы в папках
              </p>
              <div className="bg-white rounded-lg p-4 text-sm">
                <div className="font-mono text-gray-700">
                  public/images/starlink/
                  <br />├── antennas/ (4 файла)
                  <br />├── equipment/ (1 файл)
                  <br />├── installation/ (2 файла)
                  <br />└── maritime/ (3 файла)
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Демо-изображения автоматически заменятся на ваши фотографии при их добавлении
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
