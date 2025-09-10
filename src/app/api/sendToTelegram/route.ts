import { NextRequest, NextResponse } from 'next/server'

interface TelegramMessage {
  name: string
  phone: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: TelegramMessage = await request.json()
    const { name, phone, email, message } = body

    // Проверяем наличие обязательных полей
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Не все обязательные поля заполнены' },
        { status: 400 }
      )
    }

    // Получаем переменные окружения
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не настроены')
      return NextResponse.json(
        { error: 'Telegram бот не настроен' },
        { status: 500 }
      )
    }

    // Формируем сообщение для Telegram
    const telegramMessage = `
🚢 *Новая заявка с сайта Starlink Marine*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
📧 *Email:* ${email}
💬 *Сообщение:* ${message || 'Не указано'}

⏰ *Время:* ${new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow'
    })}
    `.trim()

    // Отправляем сообщение в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    )

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json()
      console.error('Ошибка отправки в Telegram:', errorData)
      return NextResponse.json(
        { error: 'Ошибка отправки в Telegram' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно отправлена в Telegram'
    })

  } catch (error) {
    console.error('Ошибка API sendToTelegram:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
