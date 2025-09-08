import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Валидация email
    if (!email) {
      return NextResponse.json(
        { error: 'Email обязателен для заполнения' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный email адрес' },
        { status: 400 }
      )
    }

    // Здесь будет интеграция с реальным сервисом рассылки
    // Пока что просто логируем данные
    console.log('Новая подписка на рассылку:', {
      email,
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    })

    // Mock ответ
    const mockResponse = {
      success: true,
      message: 'Подписка успешно оформлена',
      data: {
        email,
        subscribed: true,
        timestamp: new Date().toISOString()
      }
    }

    return NextResponse.json(mockResponse, { status: 200 })

  } catch (error) {
    console.error('Ошибка обработки подписки:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
