#!/bin/bash

echo "🤖 Настройка Telegram-бота для Starlink Marine"
echo "=============================================="

# Создаем .env.local файл
echo "📝 Создаем файл .env.local..."

cat > .env.local << EOF
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE
TELEGRAM_CHAT_ID=ВАШ_CHAT_ID

# Yandex Metrika
YANDEX_METRIKA_COUNTER_ID=12345678
EOF

echo "✅ Файл .env.local создан!"

echo ""
echo "🔍 Теперь получите CHAT_ID:"
echo "1. Отправьте сообщение боту @starlinkmarine_bot"
echo "2. Перейдите по ссылке:"
echo "   https://api.telegram.org/bot8392859317:AAHhTSvEa6Nj1SI8pyDK8_ozaRg48PDlnSE/getUpdates"
echo "3. Найдите 'chat':{'id':ЧИСЛО"
echo "4. Замените ВАШ_CHAT_ID в .env.local на это число"
echo ""
echo "🚀 После настройки запустите: npm run dev"
