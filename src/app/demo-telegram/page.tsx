import { Metadata } from 'next'
import SimpleContactForm from '@/components/SimpleContactForm'
import PhoneButton from '@/components/PhoneButton'
import TelegramButton from '@/components/TelegramButton'

export const metadata: Metadata = {
  title: 'Демо Telegram интеграции - Starlink Marine',
  description: 'Тестирование интеграции с Telegram-ботом',
}

export default function DemoTelgramPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🤖 Демо Telegram интеграции
            </h1>
            <p className="text-xl text-gray-600">
              Тестирование всех компонентов интеграции с Telegram-ботом
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Форма заявки */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                📝 Форма заявки
              </h2>
              <SimpleContactForm />
            </div>

            {/* Кнопки */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                📱 Кнопки связи
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Телефон
                  </h3>
                  <PhoneButton />
                  <p className="text-sm text-gray-500 mt-2">
                    При клике вызывается цель Яндекс.Метрики "click_phone"
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Telegram
                  </h3>
                  <TelegramButton />
                  <p className="text-sm text-gray-500 mt-2">
                    Открывает чат с ботом @starlinkmarine_bot
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Инструкции */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📋 Инструкции по тестированию
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  🧪 Тестирование формы:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Заполните все поля формы</li>
                  <li>Нажмите "Отправить заявку"</li>
                  <li>Проверьте alert "Заявка отправлена"</li>
                  <li>Проверьте Telegram-чат</li>
                  <li>Проверьте Яндекс.Метрику (цель "form_submit")</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  📱 Тестирование кнопок:
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Кликните на кнопку телефона</li>
                  <li>Проверьте Яндекс.Метрику (цель "click_phone")</li>
                  <li>Кликните на кнопку Telegram</li>
                  <li>Проверьте открытие чата с ботом</li>
                </ol>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">
                🔗 Полезные ссылки:
              </h4>
              <ul className="text-blue-800 space-y-1">
                <li>• <strong>Бот:</strong> https://t.me/starlinkmarine_bot</li>
                <li>• <strong>API:</strong> /api/sendToTelegram</li>
                <li>• <strong>Метрика:</strong> ID 12345678</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
