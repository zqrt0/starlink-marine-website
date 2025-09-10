#!/bin/bash

echo "🔗 Настройка webhook для Telegram-бота"
echo "====================================="

# Получаем переменные из .env.local
if [ -f .env.local ]; then
    source .env.local
    echo "✅ Файл .env.local найден"
else
    echo "❌ Файл .env.local не найден"
    echo "Создайте файл .env.local с TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID"
    exit 1
fi

if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
    echo "❌ TELEGRAM_BOT_TOKEN не найден в .env.local"
    exit 1
fi

echo "🤖 Токен бота: ${TELEGRAM_BOT_TOKEN:0:10}..."

# URL для webhook (замените на ваш домен)
WEBHOOK_URL="https://starlink-marine-website.vercel.app/api/telegram-webhook"

echo "🔗 Устанавливаем webhook: $WEBHOOK_URL"

# Устанавливаем webhook
RESPONSE=$(curl -s -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "Content-Type: application/json" \
  -d "{\"url\": \"$WEBHOOK_URL\"}")

echo "📡 Ответ от Telegram API:"
echo "$RESPONSE" | jq '.'

# Проверяем статус webhook
echo ""
echo "🔍 Проверяем статус webhook..."

WEBHOOK_INFO=$(curl -s "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getWebhookInfo")
echo "📊 Информация о webhook:"
echo "$WEBHOOK_INFO" | jq '.'

echo ""
echo "✅ Webhook настроен!"
echo "🤖 Теперь бот будет отвечать на сообщения автоматически"
echo ""
echo "📱 Попробуйте отправить боту команды:"
echo "   /start - приветствие"
echo "   /help - помощь"
echo "   /contact - контакты"
echo "   /website - ссылка на сайт"
