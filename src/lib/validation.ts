// Утилиты для валидации форм

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

export interface FormData {
  name: string
  phone: string
  email: string
  message?: string
  vesselType: string
}

// Валидация email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Валидация телефона
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Валидация имени
export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50
}

// Валидация сообщения
export const validateMessage = (message: string): boolean => {
  return message.length <= 1000
}

// Основная функция валидации формы
export const validateForm = (data: FormData): ValidationResult => {
  const errors: Record<string, string> = {}

  // Валидация имени
  if (!data.name.trim()) {
    errors.name = 'Имя обязательно для заполнения'
  } else if (!validateName(data.name)) {
    errors.name = 'Имя должно содержать от 2 до 50 символов'
  }

  // Валидация телефона
  if (!data.phone.trim()) {
    errors.phone = 'Телефон обязателен для заполнения'
  } else if (!validatePhone(data.phone)) {
    errors.phone = 'Введите корректный номер телефона'
  }

  // Валидация email
  if (!data.email.trim()) {
    errors.email = 'Email обязателен для заполнения'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Введите корректный email адрес'
  }

  // Валидация типа судна
  if (!data.vesselType) {
    errors.vesselType = 'Выберите тип судна'
  }

  // Валидация сообщения (если заполнено)
  if (data.message && !validateMessage(data.message)) {
    errors.message = 'Сообщение не должно превышать 1000 символов'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Форматирование телефона
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 11 && cleaned.startsWith('7')) {
    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9)}`
  }
  
  if (cleaned.length === 10) {
    return `+7 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8)}`
  }
  
  return phone
}

// Очистка данных формы
export const sanitizeFormData = (data: FormData): FormData => {
  return {
    name: data.name.trim(),
    phone: data.phone.trim(),
    email: data.email.trim().toLowerCase(),
    message: data.message?.trim() || '',
    vesselType: data.vesselType
  }
}

// Типы судов
export const vesselTypes = [
  { value: 'yacht', label: 'Яхта' },
  { value: 'boat', label: 'Катер' },
  { value: 'fishing', label: 'Рыболовное судно' },
  { value: 'commercial', label: 'Коммерческое судно' },
  { value: 'cargo', label: 'Грузовое судно' },
  { value: 'passenger', label: 'Пассажирское судно' },
  { value: 'other', label: 'Другое' }
]

// Получение метки типа судна по значению
export const getVesselTypeLabel = (value: string): string => {
  const vesselType = vesselTypes.find(type => type.value === value)
  return vesselType ? vesselType.label : value
}
