#!/bin/bash

# 🚀 Скрипт для быстрого деплоя Starlink Marine

echo "🚀 Начинаем деплой Starlink Marine..."

# Проверяем, что мы в правильной директории
if [ ! -f "package.json" ]; then
    echo "❌ Ошибка: package.json не найден. Запустите скрипт из корня проекта."
    exit 1
fi

# Проверяем Git
if ! git status > /dev/null 2>&1; then
    echo "❌ Ошибка: Git репозиторий не инициализирован."
    exit 1
fi

# Собираем проект
echo "📦 Собираем проект..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки проекта."
    exit 1
fi

# Коммитим изменения
echo "💾 Коммитим изменения..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Пушим в GitHub
echo "📤 Загружаем в GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Деплой завершен успешно!"
    echo "🌐 Сайт будет доступен по адресу: https://starlink-marine.vercel.app"
    echo "⏱️  Обычно деплой занимает 1-2 минуты."
else
    echo "❌ Ошибка при загрузке в GitHub."
    exit 1
fi

# Проверяем доступность сайта через 30 секунд
echo "⏳ Ждем 30 секунд для завершения деплоя..."
sleep 30

echo "🔍 Проверяем доступность сайта..."
response=$(curl -s -o /dev/null -w "%{http_code}" https://starlink-marine.vercel.app)

if [ $response -eq 200 ]; then
    echo "✅ Сайт доступен! (HTTP $response)"
    echo "🎉 Деплой завершен успешно!"
else
    echo "⚠️  Сайт еще не готов (HTTP $response). Попробуйте через несколько минут."
fi

echo "📊 Для мониторинга перейдите в панель Vercel: https://vercel.com/dashboard"
