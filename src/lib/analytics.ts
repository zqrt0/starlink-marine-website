// Утилиты для работы с Яндекс.Метрикой

declare global {
  interface Window {
    ym: (counterId: string, method: string, target: string, params?: any) => void
  }
}

export const YANDEX_METRIKA_COUNTER_ID = process.env.YANDEX_METRIKA_COUNTER_ID || '12345678'

// Отправка цели в Яндекс.Метрику
export const trackGoal = (goalName: string, params?: any) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YANDEX_METRIKA_COUNTER_ID, 'reachGoal', goalName, params)
  }
}

// Отправка события
export const trackEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(YANDEX_METRIKA_COUNTER_ID, 'params', { event: eventName, ...params })
  }
}

// Цели для отслеживания
export const GOALS = {
  FORM_SUBMIT: 'form_submit', // Отправка формы заявки
  PHONE_CLICK: 'click_phone', // Клик по телефону
  EMAIL_CLICK: 'EMAIL_CLICK', // Клик по email
  PRICING_VIEW: 'PRICING_VIEW', // Просмотр тарифов
  CONTACT_VIEW: 'CONTACT_VIEW', // Просмотр контактов
  BLOG_READ: 'BLOG_READ', // Чтение статьи в блоге
} as const

// События для отслеживания
export const EVENTS = {
  PAGE_VIEW: 'page_view',
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_START: 'form_start',
  FORM_COMPLETE: 'form_complete',
} as const
