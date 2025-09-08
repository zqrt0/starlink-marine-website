import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, message, vesselType } = body

    // Валидация данных
    if (!name || !phone || !email || !vesselType) {
      return NextResponse.json(
        { error: 'Все обязательные поля должны быть заполнены' },
        { status: 400 }
      )
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный email адрес' },
        { status: 400 }
      )
    }

    // Валидация телефона (базовая)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Некорректный номер телефона' },
        { status: 400 }
      )
    }

    // Здесь будет интеграция с реальным backend
    // Пока что просто логируем данные
    console.log('Новая заявка:', {
      name,
      phone,
      email,
      vesselType,
      message,
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    })

    // Mock ответ - в реальном проекте здесь будет отправка email или сохранение в БД
    const mockResponse = {
      success: true,
      message: 'Заявка успешно отправлена',
      id: `req_${Date.now()}`,
      data: {
        name,
        phone,
        email,
        vesselType,
        message,
        timestamp: new Date().toISOString()
      }
    }

    return NextResponse.json(mockResponse, { status: 200 })

  } catch (error) {
    console.error('Ошибка обработки заявки:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
