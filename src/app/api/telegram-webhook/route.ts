import { NextRequest, NextResponse } from 'next/server'

interface TelegramMessage {
  message_id: number
  from: {
    id: number
    is_bot: boolean
    first_name: string
    username?: string
  }
  chat: {
    id: number
    type: string
  }
  date: number
  text?: string
}

interface TelegramUpdate {
  update_id: number
  message: TelegramMessage
}

export async function POST(request: NextRequest) {
  try {
    const update: TelegramUpdate = await request.json()
    
    // Проверяем, что это сообщение
    if (!update.message) {
      return NextResponse.json({ ok: true })
    }

    const message = update.message
    const chatId = message.chat.id
    const text = message.text || ''
    const firstName = message.from.first_name

    // Получаем токен бота
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    if (!botToken) {
      console.error('TELEGRAM_BOT_TOKEN не настроен')
      return NextResponse.json({ error: 'Bot token not configured' }, { status: 500 })
    }

    let responseText = ''

    // Обработка команд
    if (text.startsWith('/start')) {
      responseText = `🚢 Добро пожаловать в Starlink Marine, ${firstName}!

🌊 Мы предоставляем высокоскоростной спутниковый интернет для морских судов.

📋 Доступные команды:
/help - помощь
/contact - связаться с нами
/website - перейти на сайт

💬 Для получения консультации просто напишите ваше сообщение.`

    } else if (text.startsWith('/help')) {
      responseText = `🆘 Помощь по Starlink Marine

📞 Связь с нами:
• Email: info@starlink-marine.com
• Сайт: https://starlink-marine-website.vercel.app

🚢 Наши услуги:
• Подключение Starlink для яхт
• Интернет для рыболовных судов
• Связь для коммерческих судов
• Техническая поддержка 24/7

💬 Напишите ваш вопрос, и мы ответим в течение 24 часов!`

    } else if (text.startsWith('/contact')) {
      responseText = `📞 Контактная информация

🌐 Сайт: https://starlink-marine-website.vercel.app
📧 Email: info@starlink-marine.com
🤖 Этот бот: @starlinkmarine_bot

📝 Для подачи заявки:
1. Перейдите на наш сайт
2. Заполните форму обратной связи
3. Мы свяжемся с вами в течение 24 часов

💬 Или просто напишите ваш вопрос здесь!`

    } else if (text.startsWith('/website')) {
      responseText = `🌐 Наш сайт: https://starlink-marine-website.vercel.app

📋 На сайте вы можете:
• Подать заявку на подключение
• Узнать о тарифах
• Посмотреть фотографии установок
• Связаться с нами

💬 Или задайте вопрос прямо здесь!`

    } else if (text.toLowerCase().includes('привет') || text.toLowerCase().includes('hello')) {
      responseText = `👋 Привет, ${firstName}!

Рад вас видеть! Чем могу помочь с подключением Starlink для вашего судна?

🚢 У нас есть решения для:
• Частных яхт
• Рыболовных судов  
• Коммерческих судов
• Грузовых судов

💬 Опишите ваш запрос, и я помогу!`

    } else if (text.toLowerCase().includes('цена') || text.toLowerCase().includes('стоимость') || text.toLowerCase().includes('тариф')) {
      responseText = `💰 Информация о тарифах

📊 Стоимость зависит от типа судна и требований:
• Яхты и катера
• Рыболовные суда
• Коммерческие суда
• Грузовые суда

📝 Для точного расчета:
1. Перейдите на сайт: https://starlink-marine-website.vercel.app
2. Заполните форму с вашими данными
3. Мы рассчитаем индивидуальную стоимость

💬 Или опишите ваш тип судна, и я дам примерную информацию!`

    } else if (text.toLowerCase().includes('установка') || text.toLowerCase().includes('монтаж')) {
      responseText = `🔧 Установка Starlink

⚡ Процесс установки:
• Консультация и расчет
• Доставка оборудования
• Профессиональный монтаж (4-8 часов)
• Настройка и тестирование
• Обучение экипажа

🛠️ Что входит в установку:
• Спутниковая антенна
• Модем и роутер
• Кабели и крепления
• Настройка сети
• Гарантия на работы

📝 Для заказа установки заполните форму на сайте!`

    } else {
      // Общий автоответ на любые другие сообщения
      responseText = `💬 Спасибо за ваше сообщение, ${firstName}!

📋 Мы получили ваш запрос и ответим в течение 24 часов.

🌐 Для быстрой подачи заявки:
https://starlink-marine-website.vercel.app/contact

📞 Или свяжитесь с нами:
📧 info@starlink-marine.com

🚢 Starlink Marine - надежный интернет в море!`
    }

    // Отправляем ответ пользователю
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: responseText,
          parse_mode: 'HTML',
        }),
      }
    )

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error('Ошибка отправки ответа в Telegram:', errorData)
    }

    return NextResponse.json({ ok: true })

  } catch (error) {
    console.error('Ошибка обработки webhook:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
