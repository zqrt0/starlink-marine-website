export default function Partners() {
  const partners = [
    {
      name: 'Starlink',
      description: 'Официальный партнер SpaceX',
      logo: '🚀',
      category: 'Технологический партнер'
    },
    {
      name: 'Морской порт СПб',
      description: 'Партнер по установке',
      logo: '⚓',
      category: 'Партнер по установке'
    },
    {
      name: 'Российский морской регистр',
      description: 'Сертификация оборудования',
      logo: '📋',
      category: 'Сертификация'
    },
    {
      name: 'Морские технологии',
      description: 'Техническая поддержка',
      logo: '🔧',
      category: 'Техподдержка'
    },
    {
      name: 'Судостроительные верфи',
      description: 'Интеграция с судами',
      logo: '🏭',
      category: 'Интеграция'
    },
    {
      name: 'Морские страховые компании',
      description: 'Страхование оборудования',
      logo: '🛡️',
      category: 'Страхование'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши партнеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем с ведущими компаниями в области морских технологий
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{partner.logo}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-600 mb-3">
                {partner.description}
              </p>
              <span className="inline-block px-3 py-1 bg-marine-100 text-marine-600 text-sm font-medium rounded-full">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Дополнительная информация о партнерстве */}
        <div className="mt-16 bg-gradient-to-r from-marine-50 to-ocean-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Стать нашим партнером
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Мы всегда открыты для сотрудничества с компаниями, работающими в морской отрасли. 
              Присоединяйтесь к нашей партнерской программе.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Стать партнером
              </a>
              <a href="mailto:partners@starlink-marine.ru" className="btn-secondary">
                partners@starlink-marine.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
