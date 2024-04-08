# vink_bot
## 1.Сведения о команде 7
### Продакт-менеджер

1)  Пацев Артём,  https://t.me/armarkof

### Backend-разработчики 

1) Загородных Евгения Александровна, https://t.me/boun_tyy 
2) Гашев Константин Валерьевич, https://t.me/Quattro66 

### Frontend-разработчики 
1) Авраменко Юлия Юрьевна, https://t.me/lia_jul_07
2) Шиляева Анжелика Максимовна, https://t.me/anzhelf

### Проджект-менеджер 
1) Радченко Анна Геннадьевна, https://t.me/radchenkoanna

## 2.Описание и ссылка на Github Pages 
https://evgeniazagorodnykh.github.io/vink_bot/

Реализована кнопка для связи с поддержкой в Telegram, Whatsapp и чате на сайте. В Telegram создан асинхронный Telegram бот для техподдержки, разработанный в команде в рамках Хакатона. Бот отвечает на вопросы клиентов с помощью дообученной модели YandexGPT. 
Кнопку можно подключить как стороннюю библиотеку в HTML-документ. Наша библиотека (`ChatWidgetLib`) представляет из себя компонент ChatWidget и функцию-конструктор (`ChatWidgetConstructor`) этого компонента для удобства встраивания в файл HTML. Для украшения и привлечения внимания к кнопке использовались CSS-переходы и анимация.

## 3.Инструкция по сборке и запуску

Проект развернут на GitHub Pages

### Собрать проект локально

```
npm run build
```

### Запустить проект локально

```
npm i
npm run dev
```

Откройте http://localhost:5173, чтобы просмотреть его в своем браузере.

### Установить проект как стороннюю библиотеку в HTML-файл
Cобрать бандл:
- `npm i`
- `npm run build` 
- положить `dist` на сервер или локально 
- поместить ссылки в `head`
```html
<head> 
   <script src="./dist/chat-widget-ts-lib.umd.js"></script>
   <link rel="stylesheet" href="./dist/style.css" type="text/css">
</head>
```
- поместить переиспользуемый виджет перед закрывающим тегом
```html
<body>
<script>
    ChatWidgetLib.ChatWidgetConstructor({ element: 'root', styles: { width: '200px' } })
</script>
```
- ChatWidgetConstructor принимает 3 аргумента :
1) element - мы определяем, в какой элемент в HTML-файле мы положим наш виджет: мы прописываем имя аргументу element (н-р, element: `root`) и то же самое название прописывем в id HTML-элемента:
```html
<div id="root"></div>
```  
2) styles - дает возможность изменить CSS-стили и прописать их прямо в виджете
3) className - дает возможность изменить CSS-стили
Пример использования находится в папке `example` в файле `index.html`

## 4.Стэк технологий

React 18.2.0  
Typescript 5.4.4  
HTML 5  
SCSS 3  
Vite 5.2.8  
Storybook 8.0.5  

## 5.Cсылки на сторонние фреймворки, библиотеки, иконки и шрифты
Библиотека иконок https://lucide.dev/guide/packages/lucide-react  
Иконки с сайта заказчика https://www.vink.ru/  
Иконки с https://icon-icons.com/


## 6.Kлючевые точки для media queries
Tablet `767px`  
Mobile `576px`
