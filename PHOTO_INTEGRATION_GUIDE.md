# 📸 Интеграция реальных фотографий в галерею

## ✅ **Что сделано:**

### **1. Обновлена структура галереи:**
- ✅ Добавлена поддержка реальных изображений
- ✅ Создана новая категория "Глобальная сеть" 🌍
- ✅ Обновлен компонент `StarlinkGallery`

### **2. Создана структура папок:**
```
public/images/starlink/real/
├── antennas/          # Антенны и радары
├── maritime/          # Морские суда
├── equipment/         # Оборудование Starlink
├── installation/      # Процесс установки
└── network/           # Глобальная сеть
```

### **3. Добавлены реальные изображения:**
- 🌍 **Глобальная сеть** - вид Земли с космической сетью
- 🚢 **Морские суда** - корабли в портах и в океане
- 📡 **Антенны** - коммуникационное оборудование
- ⚙️ **Оборудование** - коробки Starlink Performance Kit
- 🔧 **Установка** - портовая инфраструктура

## 📋 **Как загрузить ваши фотографии:**

### **Шаг 1: Подготовьте файлы**
1. **Переименуйте фотографии** по образцу:
   - `global-network-1.jpg` → папка `network/`
   - `ship-port-1.jpg` → папка `maritime/`
   - `ship-antennas-1.jpg` → папка `antennas/`
   - `starlink-boxes-1.jpg` → папка `equipment/`
   - `ship-infrastructure-1.jpg` → папка `installation/`

### **Шаг 2: Загрузите в папки**
```
public/images/starlink/real/network/global-network-1.jpg
public/images/starlink/real/maritime/ship-port-1.jpg
public/images/starlink/real/antennas/ship-antennas-1.jpg
public/images/starlink/real/equipment/starlink-boxes-1.jpg
public/images/starlink/real/installation/ship-infrastructure-1.jpg
```

### **Шаг 3: Обновите сайт**
```bash
git add .
git commit -m "Add real Starlink photos to gallery"
git push
```

## 🎯 **Результат:**

После загрузки фотографий:
- ✅ **Реальные изображения** будут отображаться в галерее
- ✅ **Демо-изображения** останутся как примеры
- ✅ **Новая категория** "Глобальная сеть" будет доступна
- ✅ **Модальные окна** будут показывать реальные фото

## 📱 **Проверьте:**

1. **Откройте галерею:** https://starlink-marine-website.vercel.app/gallery
2. **Выберите категорию** "Глобальная сеть"
3. **Кликните на изображение** для просмотра в модальном окне

**Галерея готова для ваших реальных фотографий!** 🎉
