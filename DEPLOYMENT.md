# Инструкции по развертыванию

## 🚀 Быстрый старт

### 1. Установка Node.js

Скачайте и установите Node.js с официального сайта: https://nodejs.org/

Рекомендуемая версия: Node.js 18.x или выше

### 2. Установка зависимостей

```bash
npm install
```

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# Яндекс.Метрика
YANDEX_METRIKA_COUNTER_ID=ваш_счетчик_метрики

# Домен сайта
NEXT_PUBLIC_SITE_URL=https://starlink-marine.ru
```

### 4. Запуск в режиме разработки

```bash
npm run dev
```

Откройте браузер и перейдите по адресу: http://localhost:3000

## 🌐 Развертывание на продакшн

### Вариант 1: Vercel (Рекомендуется)

1. **Установите Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Войдите в аккаунт:**
   ```bash
   vercel login
   ```

3. **Разверните проект:**
   ```bash
   vercel --prod
   ```

4. **Настройте переменные окружения в панели Vercel**

### Вариант 2: Собственный сервер

1. **Соберите проект:**
   ```bash
   npm run build
   ```

2. **Запустите продакшн версию:**
   ```bash
   npm start
   ```

3. **Настройте Nginx или Apache для проксирования**

### Вариант 3: Docker

1. **Создайте Dockerfile:**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Соберите и запустите:**
   ```bash
   docker build -t starlink-marine .
   docker run -p 3000:3000 starlink-marine
   ```

## ⚙️ Настройка после развертывания

### 1. Яндекс.Метрика

1. Создайте счетчик в Яндекс.Метрике
2. Замените `YOUR_COUNTER_ID` в файле `src/lib/analytics.ts`
3. Обновите ID в `src/app/layout.tsx`

### 2. Домен и SSL

1. Настройте DNS записи для вашего домена
2. Установите SSL сертификат (Let's Encrypt)
3. Обновите URL в `src/app/sitemap.ts` и `src/app/robots.ts`

### 3. Backend интеграция

Замените mock API в `src/app/api/contact/route.ts` на реальную интеграцию:

```typescript
// Пример интеграции с реальным API
const response = await fetch(`${process.env.API_BASE_URL}/leads`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.API_KEY}`
  },
  body: JSON.stringify(formData)
})
```

### 4. Email уведомления

Настройте отправку email уведомлений:

```typescript
// Пример с Nodemailer
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})
```

## 🔧 Дополнительные настройки

### 1. CDN и оптимизация

- Настройте CDN для статических файлов
- Включите сжатие gzip/brotli
- Оптимизируйте изображения

### 2. Мониторинг

- Настройте мониторинг ошибок (Sentry)
- Добавьте логирование
- Настройте алерты

### 3. Безопасность

- Настройте rate limiting
- Добавьте CORS политики
- Регулярно обновляйте зависимости

## 📊 Аналитика и SEO

### 1. Яндекс.Вебмастер

1. Добавьте сайт в Яндекс.Вебмастер
2. Подтвердите права на домен
3. Отправьте sitemap.xml
4. Настройте индексацию

### 2. Google Search Console

1. Добавьте сайт в Google Search Console
2. Подтвердите права
3. Отправьте sitemap
4. Настройте мониторинг

### 3. Дополнительная аналитика

- Google Analytics 4
- Hotjar для анализа поведения
- A/B тестирование

## 🆘 Поддержка

При возникновении проблем:

1. Проверьте логи сервера
2. Убедитесь в правильности переменных окружения
3. Проверьте доступность внешних сервисов
4. Обратитесь к документации Next.js

---

**Удачного развертывания! 🚢**
