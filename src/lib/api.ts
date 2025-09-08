// Утилиты для работы с API

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  message?: string
  vesselType: string
}

// Базовый URL API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

// Обертка для fetch с обработкой ошибок
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Произошла ошибка при выполнении запроса',
      }
    }

    return {
      success: true,
      data: data.data || data,
      message: data.message,
    }
  } catch (error) {
    console.error('API request failed:', error)
    return {
      success: false,
      error: 'Ошибка сети. Проверьте подключение к интернету.',
    }
  }
}

// Отправка формы обратной связи
export async function submitContactForm(
  formData: ContactFormData
): Promise<ApiResponse<{ id: string; timestamp: string }>> {
  return apiRequest<{ id: string; timestamp: string }>('/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
}

// Получение тарифных планов
export async function getPricingPlans(): Promise<ApiResponse<any[]>> {
  return apiRequest<any[]>('/pricing')
}

// Получение статей блога
export async function getBlogPosts(): Promise<ApiResponse<any[]>> {
  return apiRequest<any[]>('/blog')
}

// Получение конкретной статьи блога
export async function getBlogPost(id: string): Promise<ApiResponse<any>> {
  return apiRequest<any>(`/blog/${id}`)
}

// Подписка на новости
export async function subscribeToNewsletter(
  email: string
): Promise<ApiResponse<{ subscribed: boolean }>> {
  return apiRequest<{ subscribed: boolean }>('/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
}

// Получение FAQ
export async function getFAQ(): Promise<ApiResponse<any[]>> {
  return apiRequest<any[]>('/faq')
}

// Отправка отзыва
export async function submitTestimonial(
  testimonialData: {
    name: string
    email: string
    vessel: string
    rating: number
    text: string
  }
): Promise<ApiResponse<{ id: string }>> {
  return apiRequest<{ id: string }>('/testimonials', {
    method: 'POST',
    body: JSON.stringify(testimonialData),
  })
}

// Проверка статуса заявки
export async function checkRequestStatus(
  requestId: string
): Promise<ApiResponse<{ status: string; message?: string }>> {
  return apiRequest<{ status: string; message?: string }>(`/requests/${requestId}/status`)
}

// Получение статистики
export async function getStats(): Promise<ApiResponse<{
  connectedVessels: number
  uptime: number
  supportHours: number
  maxSpeed: number
}>> {
  return apiRequest<{
    connectedVessels: number
    uptime: number
    supportHours: number
    maxSpeed: number
  }>('/stats')
}

// Утилиты для работы с ошибками
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  return 'Произошла неизвестная ошибка'
}

// Утилиты для работы с загрузкой
export const createLoadingState = () => ({
  isLoading: false,
  error: null as string | null,
})

export const setLoading = (state: any, isLoading: boolean) => ({
  ...state,
  isLoading,
  error: isLoading ? null : state.error,
})

export const setError = (state: any, error: string | null) => ({
  ...state,
  error,
  isLoading: false,
})
