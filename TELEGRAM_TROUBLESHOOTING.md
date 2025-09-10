# 🔧 Решение проблем с Telegram интеграцией

## 🚨 Проблема: Заявки не приходят в Telegram

### 🔍 Диагностика:

#### 1. **Проверьте статус webhook:**
```bash
curl -s "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getWebhookInfo" | jq '.'
```

#### 2. **Проверьте прямую отправку:**
```bash
curl -s -X POST "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": 1862997216,
    "text": "🔍 Тест прямой отправки"
  }' | jq '.'
```

#### 3. **Проверьте API локально:**
```bash
curl -X POST http://localhost:3000/api/sendToTelegram \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "phone": "+7 (999) 123-45-67",
    "email": "test@example.com",
    "message": "Тест"
  }'
```

## 🛠️ Решения:

### **Решение 1: Ожидание обновления Vercel**
- Vercel обновляет сайт через 1-2 минуты после push
- Проверьте статус деплоя в Vercel Dashboard
- URL: https://vercel.com/dashboard

### **Решение 2: Проверка переменных окружения в Vercel**
1. Зайдите в Vercel Dashboard
2. Выберите проект "starlink-marine-website"
3. Перейдите в Settings → Environment Variables
4. Убедитесь, что есть:
   - `TELEGRAM_BOT_TOKEN=8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE`
   - `TELEGRAM_CHAT_ID=1862997216`

### **Решение 3: Перезапуск webhook**
```bash
# Удалить webhook
curl -s -X POST "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/deleteWebhook"

# Установить webhook заново
curl -s -X POST "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://starlink-marine-website.vercel.app/api/telegram-webhook"}'
```

### **Решение 4: Тестирование через продакшн**
1. Откройте: https://starlink-marine-website.vercel.app/demo-telegram
2. Заполните форму
3. Проверьте Telegram-чат

## 📱 Проверка работы:

### **1. Прямая отправка (должна работать):**
```bash
curl -s -X POST "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": 1862997216,
    "text": "✅ Прямая отправка работает!"
  }'
```

### **2. Проверка через сайт:**
- URL: https://starlink-marine-website.vercel.app/demo-telegram
- Заполните форму
- Проверьте Telegram

### **3. Проверка логов Vercel:**
- Зайдите в Vercel Dashboard
- Выберите проект
- Перейдите в Functions → View Function Logs

## 🎯 Ожидаемый результат:

✅ **Прямая отправка** - работает
✅ **API через сайт** - работает после обновления Vercel
✅ **Автоответы бота** - работают
✅ **Заявки приходят** в Telegram-чат

## 📞 Если ничего не помогает:

1. **Проверьте Vercel Dashboard** на наличие ошибок
2. **Убедитесь в переменных окружения** в Vercel
3. **Попробуйте перезапустить** webhook
4. **Проверьте логи** в Vercel Functions
