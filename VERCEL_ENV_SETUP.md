# 🔧 Настройка переменных окружения в Vercel

## 🚨 Проблема:
Форма на https://starlink-marine-website.vercel.app/contact не отправляет заявки в Telegram, потому что в Vercel не настроены переменные окружения.

## ✅ Решение:

### 1. **Зайдите в Vercel Dashboard:**
- Откройте: https://vercel.com/dashboard
- Войдите в свой аккаунт
- Найдите проект "starlink-marine-website"

### 2. **Добавьте переменные окружения:**
1. В проекте перейдите в **Settings** → **Environment Variables**
2. Нажмите **Add New**
3. Добавьте следующие переменные:

#### **Переменная 1:**
- **Name:** `TELEGRAM_BOT_TOKEN`
- **Value:** `8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE`
- **Environment:** Production, Preview, Development (все три)

#### **Переменная 2:**
- **Name:** `TELEGRAM_CHAT_ID`
- **Value:** `1862997216`
- **Environment:** Production, Preview, Development (все три)

#### **Переменная 3:**
- **Name:** `YANDEX_METRIKA_COUNTER_ID`
- **Value:** `12345678`
- **Environment:** Production, Preview, Development (все три)

### 3. **Перезапустите деплой:**
1. Перейдите в **Deployments**
2. Найдите последний деплой
3. Нажмите **Redeploy**

### 4. **Проверьте работу:**
После обновления (2-3 минуты):
1. Откройте: https://starlink-marine-website.vercel.app/contact
2. Заполните форму
3. Нажмите "Отправить заявку"
4. Проверьте Telegram-чат

## 🎯 Ожидаемый результат:
✅ **Форма отправляет заявки** в Telegram
✅ **Получаете уведомления** в Telegram-чат
✅ **Яндекс.Метрика отслеживает** отправки форм

## 📱 Альтернативный способ тестирования:
Если нужно протестировать прямо сейчас:
1. Откройте: https://starlink-marine-website.vercel.app/demo-telegram
2. Используйте упрощенную форму для тестирования

## 🔍 Проверка статуса:
После настройки переменных проверьте:
```bash
curl -X POST https://starlink-marine-website.vercel.app/api/sendToTelegram \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "phone": "+7 (999) 123-45-67",
    "email": "test@example.com",
    "message": "Тест API"
  }'
```

**Должен вернуть:** `{"success":true,"message":"Заявка успешно отправлена в Telegram"}`
