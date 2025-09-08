'use client'

import { useState, useEffect } from 'react'
import { useToast } from './NotificationProvider'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const toast = useToast()

  const quickQuestions = [
    'Какова стоимость подключения?',
    'Сколько времени занимает установка?',
    'Какая скорость интернета?',
    'Работает ли в шторм?',
    'Как оформить заказ?'
  ]

  const botResponses: { [key: string]: string } = {
    'стоимость': 'Стоимость подключения Starlink зависит от типа судна и выбранного тарифа. Базовый тариф начинается от 25,000 рублей в месяц. Используйте наш калькулятор для точного расчета.',
    'установка': 'Установка Starlink на судно занимает 4-8 часов. Процесс включает монтаж антенны, прокладку кабелей и настройку оборудования. Наши специалисты работают профессионально и аккуратно.',
    'скорость': 'Starlink обеспечивает скорость от 50 до 200 Мбит/с в зависимости от местоположения и условий. Задержка составляет 20-40 мс, что отлично подходит для видеозвонков и работы.',
    'шторм': 'Да, Starlink работает даже в штормовую погоду. Антенна автоматически отслеживает спутники и поддерживает соединение. Надежность составляет 99.9% времени работы.',
    'заказ': 'Для оформления заказа свяжитесь с нами по телефону +7 (800) 123-45-67 или заполните форму на странице контактов. Мы проведем консультацию и подберем оптимальное решение.'
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Приветственное сообщение
      setTimeout(() => {
        addMessage('Добро пожаловать! Я помогу вам с вопросами о Starlink для морских судов. Чем могу помочь?', false)
      }, 500)
    }
  }, [isOpen])

  const addMessage = (text: string, isUser: boolean) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = inputText.trim()
    addMessage(userMessage, true)
    setInputText('')

    // Имитация ответа бота
    setIsTyping(true)
    setTimeout(() => {
      const response = getBotResponse(userMessage)
      addMessage(response, false)
      setIsTyping(false)
    }, 1000 + Math.random() * 2000)
  }

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response
      }
    }

    // Общие ответы
    if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуйте')) {
      return 'Привет! Рад помочь вам с вопросами о Starlink. Что вас интересует?'
    }

    if (lowerMessage.includes('спасибо')) {
      return 'Пожалуйста! Если у вас есть еще вопросы, я всегда готов помочь.'
    }

    if (lowerMessage.includes('контакт') || lowerMessage.includes('телефон')) {
      return 'Наши контакты: телефон +7 (800) 123-45-67, email info@starlink-marine.ru. Мы работаем с 9:00 до 18:00 по московскому времени.'
    }

    return 'Спасибо за вопрос! Для получения подробной информации рекомендую связаться с нашими специалистами по телефону +7 (800) 123-45-67 или заполнить форму обратной связи.'
  }

  const handleQuickQuestion = (question: string) => {
    addMessage(question, true)
    setInputText('')

    setIsTyping(true)
    setTimeout(() => {
      const response = getBotResponse(question)
      addMessage(response, false)
      setIsTyping(false)
    }, 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <>
      {/* Кнопка чата */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-marine-600 hover:bg-marine-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-30 group"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Уведомление о новых сообщениях */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Задать вопрос
          </div>
        </button>
      )}

      {/* Окно чата */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-30 flex flex-col">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-marine-600 to-ocean-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Поддержка Starlink</h3>
                <p className="text-xs text-marine-100">Онлайн</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-marine-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.isUser ? 'text-marine-100' : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Индикатор печати */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Быстрые вопросы */}
          {messages.length <= 1 && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Быстрые вопросы:</p>
              <div className="space-y-1">
                {quickQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="block w-full text-left text-xs text-marine-600 hover:text-marine-700 p-2 hover:bg-marine-50 rounded transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Поле ввода */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Введите ваш вопрос..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-marine-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-marine-600 hover:bg-marine-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
