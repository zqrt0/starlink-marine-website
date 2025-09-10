#!/bin/bash

echo "🔍 Получение CHAT_ID для Telegram-бота"
echo "======================================"

echo "📱 Сначала отправьте сообщение боту @starlinkmarine_bot"
echo "   (любое сообщение, например: 'Привет')"
echo ""
echo "⏳ Ожидаем 10 секунд..."
sleep 10

echo "🔍 Получаем CHAT_ID..."

# Получаем обновления
RESPONSE=$(curl -s "https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getUpdates")

# Извлекаем CHAT_ID
CHAT_ID=$(echo "$RESPONSE" | jq -r '.result[0].message.chat.id // empty')

if [ -n "$CHAT_ID" ] && [ "$CHAT_ID" != "null" ]; then
    echo "✅ CHAT_ID найден: $CHAT_ID"
    echo ""
    echo "📝 Создаем .env.local с CHAT_ID..."
    
    cat > .env.local << EOF
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE
TELEGRAM_CHAT_ID=$CHAT_ID

# Yandex Metrika
YANDEX_METRIKA_COUNTER_ID=12345678
EOF
    
    echo "✅ Файл .env.local создан с CHAT_ID: $CHAT_ID"
    echo ""
    echo "🚀 Теперь запустите: npm run dev"
    echo "📱 Проверьте работу: заполните форму на сайте"
    
else
    echo "❌ CHAT_ID не найден"
    echo ""
    echo "📱 Убедитесь, что вы отправили сообщение боту @starlinkmarine_bot"
    echo "🔄 Попробуйте еще раз через несколько секунд"
    echo ""
    echo "📋 Или получите CHAT_ID вручную:"
    echo "   https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getUpdates"
fi
