// Простой тест для проверки API sendToTelegram
const testData = {
  name: "Тест Тестович",
  phone: "+7 (999) 123-45-67",
  email: "test@example.com",
  message: "Тестовое сообщение для проверки API"
}

console.log('🧪 Тестируем API sendToTelegram...')
console.log('📤 Отправляем данные:', testData)

fetch('http://localhost:3000/api/sendToTelegram', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData)
})
.then(response => response.json())
.then(data => {
  console.log('✅ Ответ API:', data)
  if (data.success) {
    console.log('🎉 Заявка успешно отправлена!')
    console.log('📱 Проверьте ваш Telegram-чат')
  } else {
    console.log('❌ Ошибка:', data.error)
  }
})
.catch(error => {
  console.error('❌ Ошибка запроса:', error)
})
