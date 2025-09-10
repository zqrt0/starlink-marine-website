'use client'

import { trackGoal, GOALS } from '@/lib/analytics'

interface PhoneButtonProps {
  phone?: string
  className?: string
  children?: React.ReactNode
}

export default function PhoneButton({ 
  phone = '+79999999999', 
  className = '',
  children 
}: PhoneButtonProps) {
  const handleClick = () => {
    // Отправляем цель в Яндекс.Метрику
    trackGoal(GOALS.PHONE_CLICK, { 
      source: 'phone_button',
      phone: phone 
    })
    
    // Открываем приложение для звонка
    window.location.href = `tel:${phone}`
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center space-x-2 bg-marine-600 hover:bg-marine-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>{children || phone}</span>
    </button>
  )
}