# ⚡ Быстрая настройка Telegram-бота

## 🎯 Что нужно сделать:

### 1. Отправьте сообщение боту
- Откройте Telegram
- Найдите бота: **@starlinkmarine_bot**
- Отправьте любое сообщение (например: "Привет")

### 2. Получите CHAT_ID
Выполните команду:
```bash
./get-chat-id.sh
```

Или вручную:
```bash
curl -s "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getUpdates" | jq '.result[0].message.chat.id'
```

### 3. Создайте .env.local
Если CHAT_ID получен, создайте файл `.env.local`:
```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE
TELEGRAM_CHAT_ID=ВАШ_CHAT_ID_ЗДЕСЬ

# Yandex Metrika
YANDEX_METRIKA_COUNTER_ID=12345678
```

### 4. Запустите проект
```bash
npm run dev
```

## ✅ Проверка:
- Заполните форму на сайте
- Заявка должна прийти в ваш Telegram-чат

## 🔗 Полезные ссылки:
- **Бот:** https://t.me/starlinkmarine_bot
- **API:** https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getUpdates
