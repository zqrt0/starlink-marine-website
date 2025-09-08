'use client'

import { trackGoal, GOALS } from '@/lib/analytics'

interface PhoneButtonProps {
  phone: string
  className?: string
  children?: React.ReactNode
}

export default function PhoneButton({ 
  phone, 
  className = '', 
  children 
}: PhoneButtonProps) {
  const handlePhoneClick = () => {
    // Отправка цели в Яндекс.Метрику
    trackGoal(GOALS.PHONE_CLICK, {
      phone: phone,
      source: 'phone_button'
    })
  }

  return (
    <a
      href={`tel:${phone}`}
      onClick={handlePhoneClick}
      className={`inline-flex items-center space-x-2 bg-marine-600 text-white px-4 py-2 rounded-lg hover:bg-marine-700 focus:outline-none focus:ring-2 focus:ring-marine-500 focus:ring-offset-2 transition-colors ${className}`}
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
        />
      </svg>
      <span className="font-medium">
        {children || phone}
      </span>
    </a>
  )
}
