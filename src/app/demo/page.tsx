import { Metadata } from 'next'
import SimpleContactForm from '@/components/SimpleContactForm'
import PhoneButton from '@/components/PhoneButton'

export const metadata: Metadata = {
  title: 'Демо Яндекс.Метрики | Starlink Marine',
  description: 'Демонстрация работы Яндекс.Метрики с отслеживанием целей',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Демо Яндекс.Метрики
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ID счетчика: <span className="font-mono bg-gray-200 px-2 py-1 rounded">12345678</span>
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Отслеживаемые цели:
            </h2>
            <ul className="text-blue-800 space-y-1">
              <li>• <code className="bg-blue-100 px-1 rounded">form_submit</code> - отправка формы</li>
              <li>• <code className="bg-blue-100 px-1 rounded">click_phone</code> - клик по телефону</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Форма */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Форма обратной связи
            </h2>
            <SimpleContactForm />
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">
                Отслеживание:
              </h3>
              <p className="text-green-800 text-sm">
                При отправке формы отправляется цель <code className="bg-green-100 px-1 rounded">form_submit</code> 
                с данными формы в параметрах.
              </p>
            </div>
          </div>

          {/* Кнопки телефона */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Кнопки телефона
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Основной телефон
                </h3>
                <PhoneButton phone="+78001234567">
                  +7 (800) 123-45-67
                </PhoneButton>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Телефон поддержки
                </h3>
                <PhoneButton phone="+74951234567">
                  +7 (495) 123-45-67
                </PhoneButton>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Мобильный телефон
                </h3>
                <PhoneButton phone="+79991234567">
                  +7 (999) 123-45-67
                </PhoneButton>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">
                Отслеживание:
              </h3>
              <p className="text-green-800 text-sm">
                При клике на любую кнопку телефона отправляется цель <code className="bg-green-100 px-1 rounded">click_phone</code> 
                с номером телефона в параметрах.
              </p>
            </div>
          </div>
        </div>

        {/* Инструкции */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Инструкции по тестированию
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. Проверка базового кода Метрики:
                </h3>
                <p className="text-gray-600">
                  Откройте инструменты разработчика (F12) → вкладка Network → обновите страницу. 
                  Вы должны увидеть запросы к <code className="bg-gray-100 px-1 rounded">mc.yandex.ru</code>.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. Тестирование цели &quot;form_submit&quot;:
                </h3>
                <p className="text-gray-600">
                  Заполните и отправьте форму выше. В консоли браузера должно появиться сообщение 
                  <code className="bg-gray-100 px-1 rounded">ym(12345678, &quot;reachGoal&quot;, &quot;form_submit&quot;)</code>.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. Тестирование цели &quot;click_phone&quot;:
                </h3>
                <p className="text-gray-600">
                  Кликните на любую кнопку телефона. В консоли должно появиться сообщение 
                  <code className="bg-gray-100 px-1 rounded">ym(12345678, &quot;reachGoal&quot;, &quot;click_phone&quot;)</code>.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4. Проверка в Яндекс.Метрике:
                </h3>
                <p className="text-gray-600">
                  Войдите в ваш счетчик Метрики (ID: 12345678) и проверьте раздел &quot;Отчеты&quot; → &quot;Стандартные отчеты&quot; → &quot;Цели&quot;. 
                  Цели должны появиться в течение нескольких минут.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
