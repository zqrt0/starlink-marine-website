import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, vessel, rating, text } = body

    // Валидация данных
    if (!name || !email || !vessel || !rating || !text) {
      return NextResponse.json(
        { error: 'Все поля обязательны для заполнения' },
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

    // Валидация рейтинга
    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Рейтинг должен быть от 1 до 5' },
        { status: 400 }
      )
    }

    // Валидация длины текста
    if (text.length < 10 || text.length > 1000) {
      return NextResponse.json(
        { error: 'Отзыв должен содержать от 10 до 1000 символов' },
        { status: 400 }
      )
    }

    // Здесь будет интеграция с реальным backend
    // Пока что просто логируем данные
    console.log('Новый отзыв:', {
      name,
      email,
      vessel,
      rating,
      text,
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    })

    // Mock ответ
    const mockResponse = {
      success: true,
      message: 'Отзыв успешно отправлен',
      data: {
        id: `testimonial_${Date.now()}`,
        name,
        email,
        vessel,
        rating,
        text,
        status: 'pending', // pending, approved, rejected
        timestamp: new Date().toISOString()
      }
    }

    return NextResponse.json(mockResponse, { status: 200 })

  } catch (error) {
    console.error('Ошибка обработки отзыва:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Mock данные отзывов
    const testimonials = [
      {
        id: 1,
        name: 'Александр Петров',
        vessel: 'Яхта "Морская звезда"',
        location: 'Санкт-Петербург',
        text: 'Отличный интернет! Скорость стабильная, даже в шторм работает без проблем. Теперь можем работать удаленно прямо с яхты.',
        rating: 5,
        image: '👨‍💼',
        approved: true,
        timestamp: '2024-01-15T10:30:00Z'
      },
      {
        id: 2,
        name: 'Мария Соколова',
        vessel: 'Рыболовное судно "Волна"',
        location: 'Мурманск',
        text: 'Starlink кардинально изменил нашу работу. Теперь можем отслеживать косяки рыбы в реальном времени и связываться с берегом.',
        rating: 5,
        image: '👩‍💼',
        approved: true,
        timestamp: '2024-01-10T14:20:00Z'
      },
      {
        id: 3,
        name: 'Дмитрий Козлов',
        vessel: 'Грузовое судно "Север"',
        location: 'Архангельск',
        text: 'Надежная связь в любых условиях. Экипаж может общаться с семьями, а мы - координировать грузоперевозки.',
        rating: 5,
        image: '👨‍✈️',
        approved: true,
        timestamp: '2024-01-05T09:15:00Z'
      }
    ]

    return NextResponse.json({
      success: true,
      data: testimonials
    })

  } catch (error) {
    console.error('Ошибка получения отзывов:', error)
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    )
  }
}
