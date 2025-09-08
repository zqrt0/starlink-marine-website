# 🚀 Деплой сайта Starlink Marine на Vercel

## 📋 Пошаговая инструкция

### **1. Создание репозитория на GitHub**

1. Перейдите на [GitHub.com](https://github.com)
2. Нажмите **"New repository"**
3. Заполните:
   - **Repository name:** `starlink-marine-website`
   - **Description:** `Starlink Marine website with Next.js, TailwindCSS, and Yandex Metrika`
   - **Visibility:** Public
4. Нажмите **"Create repository"**

### **2. Загрузка кода на GitHub**

```bash
# Добавьте remote origin (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/starlink-marine-website.git

# Загрузите код
git push -u origin main
```

### **3. Деплой на Vercel**

1. Перейдите на [Vercel.com](https://vercel.com)
2. Нажмите **"Sign up"** или **"Log in"**
3. Выберите **"Continue with GitHub"**
4. Нажмите **"New Project"**
5. Выберите репозиторий `starlink-marine-website`
6. Нажмите **"Deploy"**

### **4. Настройка домена (опционально)**

1. В панели Vercel перейдите в **"Settings"** → **"Domains"**
2. Добавьте ваш домен
3. Настройте DNS записи

## ✅ Результат

После деплоя ваш сайт будет доступен по адресу:
- **Vercel URL:** `https://starlink-marine-website.vercel.app`
- **Custom domain:** `https://your-domain.com` (если настроен)

## 🔧 Настройки проекта

### **Environment Variables (если нужны):**
- `NEXT_PUBLIC_SITE_URL` - URL вашего сайта
- `YANDEX_METRIKA_ID` - ID счетчика Яндекс.Метрики

### **Автоматические деплои:**
- При каждом push в main ветку сайт автоматически обновляется
- Vercel автоматически собирает и деплоит проект

## 📱 Проверка работы

После деплоя проверьте:
- ✅ Главная страница загружается
- ✅ Все ссылки работают
- ✅ Формы отправляются
- ✅ Яндекс.Метрика работает
- ✅ Адаптивный дизайн

## 🎉 Готово!

Ваш сайт Starlink Marine теперь доступен в интернете!
