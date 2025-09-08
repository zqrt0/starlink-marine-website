# 🚀 Установка Node.js для запуска проекта

## 📋 Варианты установки

### Вариант 1: Официальный сайт (Рекомендуется)

1. **Перейдите на сайт:** https://nodejs.org/
2. **Скачайте LTS версию** (рекомендуется для большинства пользователей)
3. **Запустите установщик** и следуйте инструкциям
4. **Перезапустите терминал** после установки

### Вариант 2: Homebrew (для macOS)

```bash
# Установите Homebrew (если не установлен)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Установите Node.js
brew install node
```

### Вариант 3: NVM (Node Version Manager)

```bash
# Установите NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Перезапустите терминал или выполните:
source ~/.bashrc

# Установите последнюю LTS версию Node.js
nvm install --lts
nvm use --lts
```

## ✅ Проверка установки

После установки проверьте версии:

```bash
node --version
npm --version
```

Должны появиться номера версий, например:
- Node.js: v18.17.0
- npm: 9.6.7

## 🚀 Запуск проекта

После установки Node.js:

```bash
# Перейдите в папку проекта
cd "/Users/artempetrov/Desktop/cursor yandex project"

# Установите зависимости
npm install

# Запустите проект в режиме разработки
npm run dev
```

Откройте браузер: http://localhost:3000

## 🔧 Возможные проблемы

### Проблема: "command not found: node"
**Решение:** Node.js не установлен или не добавлен в PATH

### Проблема: "Permission denied"
**Решение:** Используйте sudo или установите через менеджер пакетов

### Проблема: "EACCES: permission denied"
**Решение:** Настройте права доступа к npm:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## 📱 Альтернативы

### Если не можете установить Node.js:

1. **Используйте демо-версию** в папке `demo/`
2. **Разверните на Vercel** (онлайн)
3. **Используйте Codesandbox** (онлайн редактор)

### Онлайн развертывание:

1. **Vercel:** https://vercel.com/
2. **Netlify:** https://netlify.com/
3. **GitHub Pages:** https://pages.github.com/

## 🎯 Рекомендуемая версия

- **Node.js:** 18.x LTS или выше
- **npm:** 9.x или выше

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте официальную документацию Node.js
2. Обратитесь к сообществу разработчиков
3. Используйте демо-версию для просмотра дизайна

---

**Удачной установки! 🚢**
