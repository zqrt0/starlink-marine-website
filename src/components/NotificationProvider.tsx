'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import Toast from './Toast'

export interface Notification {
  id: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  duration?: number
}

interface NotificationContextType {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id'>) => void
  removeNotification: (id: string) => void
  clearAll: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

interface NotificationProviderProps {
  children: ReactNode
}

export default function NotificationProvider({ children }: NotificationProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification: Notification = {
      id,
      duration: 5000,
      ...notification,
    }
    
    setNotifications(prev => [...prev, newNotification])
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        removeNotification,
        clearAll,
      }}
    >
      {children}
      
      {/* Контейнер для уведомлений */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <Toast
            key={notification.id}
            message={notification.message}
            type={notification.type}
            isVisible={true}
            onClose={() => removeNotification(notification.id)}
            duration={notification.duration}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  )
}

// Хук для удобного использования уведомлений
export function useToast() {
  const { addNotification } = useNotifications()

  return {
    success: (message: string, duration?: number) =>
      addNotification({ message, type: 'success', duration }),
    error: (message: string, duration?: number) =>
      addNotification({ message, type: 'error', duration }),
    info: (message: string, duration?: number) =>
      addNotification({ message, type: 'info', duration }),
    warning: (message: string, duration?: number) =>
      addNotification({ message, type: 'warning', duration }),
  }
}
