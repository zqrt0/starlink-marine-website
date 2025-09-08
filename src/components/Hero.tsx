import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-marine-900 via-marine-800 to-ocean-900 text-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-marine-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-ocean-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-marine-400/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Высокоскоростной интернет
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-marine-300 to-ocean-300">
                Starlink для морских судов
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Надежная спутниковая связь для яхт, рыболовных и коммерческих судов. 
              Оставайтесь на связи в любой точке мирового океана.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Оставить заявку
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                Посмотреть тарифы
              </Link>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-marine-300 mb-2">100+ Мбит/с</div>
                <div className="text-gray-300">Скорость интернета</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-marine-300 mb-2">24/7</div>
                <div className="text-gray-300">Техническая поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-marine-300 mb-2">99.9%</div>
                <div className="text-gray-300">Время работы</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Волны внизу */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  )
}
