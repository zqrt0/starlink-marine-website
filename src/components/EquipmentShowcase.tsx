'use client'

import { useState } from 'react'

interface Equipment {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  specifications: { [key: string]: string }
  price: number
  category: 'antenna' | 'modem' | 'router' | 'accessories'
}

export default function EquipmentShowcase() {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const equipment: Equipment[] = [
    {
      id: 'starlink-antenna',
      name: 'Starlink Антенна',
      description: 'Высокоэффективная спутниковая антенна для морских судов',
      image: '📡',
      features: [
        'Автоматическое отслеживание спутников',
        'Защита от коррозии и влаги',
        'Работа в экстремальных условиях',
        'Простая установка и настройка'
      ],
      specifications: {
        'Диаметр': '60 см',
        'Вес': '15 кг',
        'Мощность': '100 Вт',
        'Температура': '-30°C до +60°C',
        'Влажность': 'до 95%'
      },
      price: 120000,
      category: 'antenna'
    },
    {
      id: 'marine-modem',
      name: 'Морской модем',
      description: 'Специализированный модем для работы в морских условиях',
      image: '📶',
      features: [
        'Высокая скорость передачи данных',
        'Стабильное соединение',
        'Защита от вибрации',
        'Удаленное управление'
      ],
      specifications: {
        'Скорость': 'до 200 Мбит/с',
        'Задержка': '20-40 мс',
        'Интерфейсы': 'Ethernet, WiFi',
        'Питание': '12-24 В',
        'Размеры': '200x150x50 мм'
      },
      price: 45000,
      category: 'modem'
    },
    {
      id: 'marine-router',
      name: 'Морской роутер',
      description: 'Мощный роутер для создания локальной сети на судне',
      image: '🌐',
      features: [
        'WiFi 6 поддержка',
        'Множественные подключения',
        'VPN сервер',
        'Мониторинг трафика'
      ],
      specifications: {
        'WiFi': '802.11ax (WiFi 6)',
        'Порты': '4x Gigabit Ethernet',
        'Диапазон': '2.4/5 ГГц',
        'Пользователи': 'до 50 устройств',
        'Антенны': '4x внешние'
      },
      price: 35000,
      category: 'router'
    },
    {
      id: 'cable-set',
      name: 'Кабельный комплект',
      description: 'Комплект кабелей для подключения оборудования',
      image: '🔌',
      features: [
        'Морской кабель с защитой',
        'Различные длины',
        'Водонепроницаемые разъемы',
        'Легкий монтаж'
      ],
      specifications: {
        'Длина': '50 метров',
        'Тип': 'Cat6A',
        'Защита': 'IP67',
        'Материал': 'Медь + алюминий',
        'Цвет': 'Синий морской'
      },
      price: 15000,
      category: 'accessories'
    },
    {
      id: 'power-supply',
      name: 'Блок питания',
      description: 'Стабилизированный блок питания для морских условий',
      image: '⚡',
      features: [
        'Стабилизация напряжения',
        'Защита от перегрузок',
        'Индикация состояния',
        'Компактный размер'
      ],
      specifications: {
        'Вход': '12-24 В DC',
        'Выход': '12 В, 5 А',
        'КПД': '95%',
        'Защита': 'IP65',
        'Размеры': '150x100x50 мм'
      },
      price: 12000,
      category: 'accessories'
    },
    {
      id: 'mounting-kit',
      name: 'Комплект крепления',
      description: 'Профессиональный комплект для монтажа антенны',
      image: '🔧',
      features: [
        'Универсальное крепление',
        'Антивибрационные элементы',
        'Коррозионная стойкость',
        'Быстрая установка'
      ],
      specifications: {
        'Материал': 'Нержавеющая сталь',
        'Нагрузка': 'до 50 кг',
        'Угол наклона': '0-90°',
        'Азимут': '0-360°',
        'Вес': '8 кг'
      },
      price: 25000,
      category: 'accessories'
    }
  ]

  const categories = [
    { value: 'all', label: 'Все оборудование', icon: '📦' },
    { value: 'antenna', label: 'Антенны', icon: '📡' },
    { value: 'modem', label: 'Модемы', icon: '📶' },
    { value: 'router', label: 'Роутеры', icon: '🌐' },
    { value: 'accessories', label: 'Аксессуары', icon: '🔧' }
  ]

  const filteredEquipment = activeCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.icon : '📦'
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Оборудование Starlink
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональное оборудование для подключения высокоскоростного интернета на морских судах
          </p>
        </div>

        {/* Категории */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category.value
                  ? 'bg-marine-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Список оборудования */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEquipment.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedEquipment(item)}
                  className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-200 ${
                    selectedEquipment?.id === item.id
                      ? 'ring-2 ring-marine-500 shadow-lg'
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{item.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {getCategoryIcon(item.category)}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-marine-600">
                          {item.price.toLocaleString()} ₽
                        </span>
                        <span className="text-sm text-gray-500">
                          Подробнее →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Детали оборудования */}
          <div className="lg:col-span-1">
            {selectedEquipment ? (
              <div className="bg-white rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{selectedEquipment.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedEquipment.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {selectedEquipment.description}
                  </p>
                </div>

                {/* Цена */}
                <div className="bg-marine-50 rounded-lg p-4 mb-6 text-center">
                  <div className="text-3xl font-bold text-marine-600 mb-1">
                    {selectedEquipment.price.toLocaleString()} ₽
                  </div>
                  <div className="text-sm text-gray-600">
                    Включая НДС и доставку
                  </div>
                </div>

                {/* Особенности */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Особенности
                  </h4>
                  <ul className="space-y-2">
                    {selectedEquipment.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Технические характеристики */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Технические характеристики
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(selectedEquipment.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-600">{key}:</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Заказать оборудование
                  </button>
                  <button className="w-full btn-secondary">
                    Добавить в корзину
                  </button>
                </div>

                {/* Дополнительная информация */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Доставка 3-5 рабочих дней</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Гарантия 2 года</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Выберите оборудование
                </h3>
                <p className="text-gray-600">
                  Кликните на любое оборудование, чтобы узнать подробную информацию
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Комплекты */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовые комплекты
            </h3>
            <p className="text-gray-600">
              Оптимальные наборы оборудования для разных типов судов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">⛵</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Комплект для яхт
                </h4>
                <p className="text-gray-600 text-sm">
                  Идеально подходит для частных яхт и катеров
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Starlink Антенна</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Морской модем</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Комплект крепления</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marine-600 mb-2">
                  190,000 ₽
                </div>
                <button className="w-full btn-primary">
                  Заказать комплект
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-marine-500">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🚢</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Комплект для судов
                </h4>
                <p className="text-gray-600 text-sm">
                  Полный комплект для коммерческих судов
                </p>
                <div className="inline-block bg-marine-600 text-white px-3 py-1 rounded-full text-xs font-medium mt-2">
                  Популярный
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Starlink Антенна</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Морской модем</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Морской роутер</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Кабельный комплект</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Комплект крепления</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marine-600 mb-2">
                  240,000 ₽
                </div>
                <button className="w-full btn-primary">
                  Заказать комплект
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🐟</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Комплект для рыболовных судов
                </h4>
                <p className="text-gray-600 text-sm">
                  Специализированный комплект для рыболовства
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Starlink Антенна</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Морской модем</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Блок питания</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Комплект крепления</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-marine-600 mb-2">
                  202,000 ₽
                </div>
                <button className="w-full btn-primary">
                  Заказать комплект
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Нужна помощь с выбором оборудования?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать оптимальное оборудование для вашего судна
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Получить консультацию
            </a>
            <a href="/calculator" className="btn-secondary">
              Рассчитать стоимость
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
