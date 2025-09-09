export default function Pricing() {
  const plans = [
    // Добавьте реальные тарифные планы здесь
    // Пример структуры:
    // {
    //   name: 'Название тарифа',
    //   price: 'Цена',
    //   period: 'руб/мес',
    //   description: 'Описание тарифа',
    //   features: [
    //     'Особенность 1',
    //     'Особенность 2',
    //     'Особенность 3'
    //   ],
    //   popular: false
    // }
  ]

  // Если нет тарифов, не показываем секцию
  if (plans.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Тарифные планы
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий тариф для вашего судна
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-marine-500 transform scale-105' 
                  : 'border-gray-200 hover:border-marine-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-marine-500 to-ocean-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-marine-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-marine-500 to-ocean-500 text-white hover:from-marine-600 hover:to-ocean-600'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Выбрать план
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Нужен индивидуальный тариф? Свяжитесь с нами для консультации
          </p>
          <button className="btn-secondary">
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  )
}
