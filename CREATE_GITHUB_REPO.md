# 📝 Создание репозитория на GitHub

## 🎯 Пошаговая инструкция

### **Шаг 1: Войдите в GitHub**

1. Откройте браузер
2. Идите на [github.com](https://github.com)
3. Войдите в свой аккаунт (или создайте новый)

### **Шаг 2: Создайте новый репозиторий**

1. Нажмите зеленую кнопку **"New"** (или **"+"** → **"New repository"**)
2. Заполните форму:
   - **Repository name:** `starlink-marine-website`
   - **Description:** `Starlink Marine website with Next.js, TailwindCSS, and Yandex Metrika`
   - **Visibility:** Выберите **"Public"** (чтобы Vercel мог подключиться)
   - **Initialize this repository with:** НЕ ставьте галочки (у нас уже есть код)
3. Нажмите **"Create repository"**

### **Шаг 3: Скопируйте URL репозитория**

После создания репозитория GitHub покажет страницу с инструкциями. Скопируйте URL:
```
https://github.com/YOUR_USERNAME/starlink-marine-website.git
```

### **Шаг 4: Подключите локальный проект к GitHub**

Вернитесь в терминал и выполните:

```bash
# Добавьте remote origin (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/starlink-marine-website.git

# Загрузите код в GitHub
git push -u origin main
```

### **Шаг 5: Проверьте результат**

1. Обновите страницу GitHub
2. Вы должны увидеть все файлы проекта
3. Репозиторий готов для деплоя на Vercel!

## ✅ Готово!

Теперь у вас есть репозиторий на GitHub, и можно деплоить на Vercel!
