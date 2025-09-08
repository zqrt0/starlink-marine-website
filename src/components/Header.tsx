'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'Оборудование', href: '/equipment' },
    { name: 'Галерея', href: '/gallery' },
    { name: 'Тарифы', href: '/pricing' },
    { name: 'Калькулятор', href: '/calculator' },
    { name: 'Отзывы', href: '/testimonials' },
    { name: 'Контакты', href: '/contact' },
    { name: 'Блог', href: '/blog' },
    { name: 'Демо', href: '/demo' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 relative">
      <div className="container-max">
        <div className="flex items-center py-4 space-x-8">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-marine-500 to-ocean-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Starlink Marine</h1>
              <p className="text-xs text-gray-600">Для морских судов</p>
            </div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-8 flex-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-marine-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Кнопка заявки */}
          <div className="hidden md:block relative z-50">
            <Link href="/contact" className="btn-primary relative z-50">
              Оставить заявку
            </Link>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 relative z-50">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-marine-600 font-medium transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 pb-4 relative z-50">
                <Link href="/contact" className="btn-primary w-full text-center block relative z-50">
                  Оставить заявку
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
