# 🔧 Настройка переменных окружения

## 📝 Создайте файл `.env.local` в корне проекта

Создайте файл `.env.local` в папке `/Users/artempetrov/Desktop/cursor yandex project/` со следующим содержимым:

```bash
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE
TELEGRAM_CHAT_ID=ВАШ_CHAT_ID

# Yandex Metrika
YANDEX_METRIKA_COUNTER_ID=12345678
```

## 🔍 Как получить CHAT_ID

1. **Добавьте бота в чат** (личный чат или группу)
2. **Отправьте любое сообщение** боту
3. **Перейдите по ссылке:**
   ```
   https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getUpdates
   ```
4. **Найдите в ответе:**
   ```json
   "chat":{"id":123456789
   ```
5. **Скопируйте число** после `"id":` - это ваш CHAT_ID

## 📱 Пример получения CHAT_ID

Если вы отправите боту сообщение "Привет", то в ответе будет примерно так:

```json
{
  "ok": true,
  "result": [
    {
      "update_id": 123456789,
      "message": {
        "message_id": 1,
        "from": {
          "id": 987654321,
          "is_bot": false,
          "first_name": "Ваше имя"
        },
        "chat": {
          "id": 123456789,  ← ЭТО ВАШ CHAT_ID
          "first_name": "Ваше имя",
          "type": "private"
        },
        "date": 1234567890,
        "text": "Привет"
      }
    }
  ]
}
```

## ✅ После настройки

1. **Перезапустите сервер разработки:**
   ```bash
   npm run dev
   ```

2. **Проверьте работу:**
   - Заполните форму на сайте
   - Заявка должна прийти в ваш Telegram-чат

## 🚨 Важно

- **Не публикуйте** файл `.env.local` в Git
- **Добавьте** `.env.local` в `.gitignore`
- **Используйте** только для разработки
