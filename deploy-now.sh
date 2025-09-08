#!/bin/bash

echo "🚀 ДЕПЛОЙ STARLINK MARINE - НАЧИНАЕМ!"

# Проверяем Git
if ! git status > /dev/null 2>&1; then
    echo "❌ Git не инициализирован"
    exit 1
fi

# Проверяем сборку
echo "📦 Проверяем сборку проекта..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Ошибка сборки"
    exit 1
fi

echo "✅ Проект собирается успешно!"

# Коммитим изменения
echo "💾 Коммитим изменения..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Проверяем remote
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Remote origin не настроен"
    echo "📝 Выполните команды:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/starlink-marine-website.git"
    echo "   git push -u origin main"
    echo ""
    echo "🌐 Затем идите на vercel.com и создайте проект"
    exit 1
fi

# Пушим в GitHub
echo "📤 Загружаем в GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Код загружен в GitHub!"
    echo ""
    echo "🎯 СЛЕДУЮЩИЕ ШАГИ:"
    echo "1. Идите на vercel.com"
    echo "2. Войдите через GitHub"
    echo "3. Нажмите 'New Project'"
    echo "4. Выберите starlink-marine-website"
    echo "5. Нажмите 'Deploy'"
    echo ""
    echo "🌐 Ваш сайт будет доступен по адресу:"
    echo "   https://starlink-marine-website.vercel.app"
else
    echo "❌ Ошибка при загрузке в GitHub"
    exit 1
fi
