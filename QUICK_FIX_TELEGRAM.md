# 🚀 Быстрое решение проблемы с Telegram

## 🚨 Проблема:
Форма на https://starlink-marine-website.vercel.app/contact не работает, потому что:
1. Vercel еще не обновил сайт с новыми API-роутами
2. Не настроены переменные окружения в Vercel

## ✅ Решение за 5 минут:

### **Шаг 1: Настройте переменные окружения в Vercel**
1. Откройте: https://vercel.com/dashboard
2. Найдите проект "starlink-marine-website"
3. Перейдите в **Settings** → **Environment Variables**
4. Добавьте 3 переменные:

```
TELEGRAM_BOT_TOKEN = 8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE
TELEGRAM_CHAT_ID = 1862997216
YANDEX_METRIKA_COUNTER_ID = 12345678
```

### **Шаг 2: Перезапустите деплой**
1. В Vercel Dashboard → **Deployments**
2. Нажмите **Redeploy** на последнем деплое
3. Подождите 2-3 минуты

### **Шаг 3: Проверьте работу**
1. Откройте: https://starlink-marine-website.vercel.app/contact
2. Заполните форму
3. Нажмите "Отправить заявку"
4. Проверьте Telegram-чат

## 🎯 Альтернативный способ тестирования:

### **Прямая отправка в Telegram (работает сейчас):**
```bash
curl -X POST "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{
    "chat_id": 1862997216,
    "text": "📩 Новая заявка:\n👤 Имя: Тест Тестович\n📞 Телефон: +7 (999) 123-45-67\n📧 Email: test@example.com\n📝 Сообщение: Тестовое сообщение"
  }'
```

## 📱 Что должно работать после настройки:

✅ **Форма на /contact** → отправляет в Telegram
✅ **Кнопка телефона** → отслеживается в Яндекс.Метрике  
✅ **Кнопка Telegram** → открывает @starlinkmarine_bot
✅ **Автоответы бота** → работают

## 🔍 Проверка статуса:
После настройки проверьте:
```bash
curl -X POST https://starlink-marine-website.vercel.app/api/sendToTelegram \
  -H "Content-Type: application/json" \
  -d '{"name":"Тест","phone":"+79999999999","email":"test@test.com","message":"Тест"}'
```

**Должен вернуть:** `{"success":true,"message":"Заявка успешно отправлена в Telegram"}`

## ⏰ Время решения: 5-10 минут
После настройки переменных и перезапуска деплоя все будет работать!
