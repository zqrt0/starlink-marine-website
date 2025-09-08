#!/bin/bash

echo "🔧 НАСТРОЙКА GITHUB РЕПОЗИТОРИЯ"
echo ""

# Проверяем Git
if ! git status > /dev/null 2>&1; then
    echo "❌ Git не инициализирован"
    exit 1
fi

echo "✅ Git репозиторий найден"
echo ""

# Проверяем remote
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote origin уже настроен:"
    git remote get-url origin
    echo ""
    echo "🚀 Для деплоя выполните:"
    echo "   git push -u origin main"
    exit 0
fi

echo "⚠️  Remote origin не настроен"
echo ""
echo "📝 СЛЕДУЮЩИЕ ШАГИ:"
echo ""
echo "1. Создайте репозиторий на GitHub:"
echo "   - Идите на github.com"
echo "   - Нажмите 'New repository'"
echo "   - Название: starlink-marine-website"
echo "   - Видимость: Public"
echo "   - НЕ ставьте галочки на инициализацию"
echo "   - Нажмите 'Create repository'"
echo ""
echo "2. Скопируйте URL репозитория (например):"
echo "   https://github.com/YOUR_USERNAME/starlink-marine-website.git"
echo ""
echo "3. Выполните команды:"
echo "   git remote add origin https://github.com/YOUR_USERNAME/starlink-marine-website.git"
echo "   git push -u origin main"
echo ""
echo "4. Затем идите на vercel.com и создайте проект"
echo ""
echo "📖 Подробная инструкция в файле: CREATE_GITHUB_REPO.md"
