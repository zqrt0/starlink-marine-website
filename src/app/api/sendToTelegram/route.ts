import { NextRequest, NextResponse } from 'next/server'

interface TelegramMessage {
  name: string
  phone: string
  email: string
  message: string
}

// Хранилище для ограничения частоты отправки
const lastSentTime = new Map<string, number>()
const messageQueue = new Map<string, TelegramMessage[]>()

// Ограничение: не чаще 1 сообщения в минуту
const RATE_LIMIT_MS = 60 * 1000 // 1 минута

// Максимальная длина сообщения Telegram
const MAX_MESSAGE_LENGTH = 4096

// Функция для группировки сообщений
function groupMessages(messages: TelegramMessage[]): string {
  if (messages.length === 1) {
    const msg = messages[0]
    return `📩 Новая заявка:
👤 Имя: ${msg.name}
📞 Телефон: ${msg.phone}
📧 Email: ${msg.email}
📝 Сообщение: ${msg.message || 'Не указано'}`
  }

  // Группируем несколько сообщений
  let groupedMessage = `📩 Новые заявки (${messages.length}):\n\n`
  
  messages.forEach((msg, index) => {
    const singleMessage = `${index + 1}. 👤 ${msg.name} | 📞 ${msg.phone} | 📧 ${msg.email}${msg.message ? ` | 📝 ${msg.message.substring(0, 100)}${msg.message.length > 100 ? '...' : ''}` : ''}\n`
    
    // Проверяем, не превысит ли добавление этого сообщения лимит
    if ((groupedMessage + singleMessage).length > MAX_MESSAGE_LENGTH) {
      return // Прерываем добавление, если превышаем лимит
    }
    
    groupedMessage += singleMessage
  })

  return groupedMessage
}

// Функция для отправки сообщения в Telegram
async function sendToTelegram(message: string, botToken: string, chatId: string) {
  // Если сообщение слишком длинное, разбиваем на части
  if (message.length > MAX_MESSAGE_LENGTH) {
    const parts = []
    let currentPart = ''
    
    const lines = message.split('\n')
    for (const line of lines) {
      if ((currentPart + line + '\n').length > MAX_MESSAGE_LENGTH) {
        if (currentPart) {
          parts.push(currentPart.trim())
          currentPart = line + '\n'
        } else {
          // Если одна строка слишком длинная, обрезаем её
          parts.push(line.substring(0, MAX_MESSAGE_LENGTH - 3) + '...')
        }
      } else {
        currentPart += line + '\n'
      }
    }
    
    if (currentPart) {
      parts.push(currentPart.trim())
    }
    
    // Отправляем все части
    for (const part of parts) {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: part,
        }),
      })
      
      // Небольшая задержка между частями
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  } else {
    // Отправляем обычное сообщение
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
  }
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

    const now = Date.now()
    const lastSent = lastSentTime.get(chatId) || 0

    // Проверяем ограничение частоты отправки
    if (now - lastSent < RATE_LIMIT_MS) {
      // Добавляем сообщение в очередь
      if (!messageQueue.has(chatId)) {
        messageQueue.set(chatId, [])
      }
      messageQueue.get(chatId)!.push(body)

      return NextResponse.json({
        success: true,
        message: 'Заявка добавлена в очередь (ограничение частоты отправки)'
      })
    }

    // Получаем все сообщения из очереди
    const queuedMessages = messageQueue.get(chatId) || []
    queuedMessages.push(body)
    
    // Очищаем очередь
    messageQueue.delete(chatId)

    // Группируем сообщения
    const groupedMessage = groupMessages(queuedMessages)

    // Отправляем сообщение
    await sendToTelegram(groupedMessage, botToken, chatId)

    // Обновляем время последней отправки
    lastSentTime.set(chatId, now)

    return NextResponse.json({
      success: true,
      message: `Заявка${queuedMessages.length > 1 ? 'и' : ''} успешно отправлена${queuedMessages.length > 1 ? 'ы' : ''} в Telegram`
    })

  } catch (error) {
    console.error('Ошибка API sendToTelegram:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}