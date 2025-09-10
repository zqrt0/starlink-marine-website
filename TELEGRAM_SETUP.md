# 🤖 Настройка Telegram-бота

## 📋 Требования

1. **Telegram Bot Token** - получите у @BotFather
2. **Chat ID** - ID чата куда будут приходить заявки

## 🔧 Настройка

### 1. Создайте файл `.env.local` в корне проекта:

```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=ВАШ_ТОКЕН_ОТ_BOTFATHER
TELEGRAM_CHAT_ID=ВАШ_CHAT_ID

# Yandex Metrika
YANDEX_METRIKA_COUNTER_ID=12345678
```

### 2. Получение Bot Token:

1. Откройте Telegram
2. Найдите @BotFather
3. Отправьте команду `/newbot`
4. Следуйте инструкциям
5. Скопируйте полученный токен

### 3. Получение Chat ID:

1. Добавьте бота в нужный чат
2. Отправьте любое сообщение боту
3. Перейдите по ссылке: `https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates`
4. Найдите `"chat":{"id":` - это ваш Chat ID

### 4. Обновите компоненты:

В файле `src/components/TelegramButton.tsx` замените:
```javascript
username = 'ВАШ_USERNAME_БОТА'
```

На реальный username вашего бота.

## ✅ Проверка работы

1. Заполните форму на сайте
2. Проверьте, что заявка пришла в Telegram
3. Проверьте цели в Яндекс.Метрике

## 🚀 Готово!

Теперь все заявки с сайта будут автоматически отправляться в ваш Telegram-чат!
