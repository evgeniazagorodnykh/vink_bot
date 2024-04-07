# vink_bot

## Описание
Асинхронный Telegram бот для техподдержки, разработанный в команде в рамках Хакатона.
Бот отвечает на вопросы клиентов с помощью дообученной модели YandexGPT.
Бот позволяет получить информацию о кафе (время работы, контакты, геолокацию), резервировать стол на определенные дни, выбрать и оплатить сеты для ужина., отправляет пользователю напоминания о брони.
Бот позволяет получить информацию о кафе (время работы, контакты, геолокацию), резервировать стол на определенные дни, выбрать и оплатить сеты для ужина, отправляет пользователю напоминания о брони (за 3 часа или за сутки).

## Технологии
- Python 3.9
- Django 4.2.11
- Django REST Framework
- Aiogram 3.4.1
- PostgreSQL 13.0
- Nginx 1.21.3
- Docker

## Развертывание проекта с помощью Docker:
1. Проект реализован в контейнерах Docker, для упрощенного запуска установите и настройте на сервере:
- Docker;
- Docker-compose.

2. Запустить проект локально:
- В директории backend создайте файл .env с переменными окружения по образцу в env.example
- Перейдите в директорию infra, выполните команды:

```
docker-compose up -d --build
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
docker-compose exec backend python manage.py collectstatic --no-input
```
- Админка доступна по адресу: http://127.0.0.1:81/admin/
- Документация доступна по адресу: http://127.0.0.1:81/docs/

## Авторы:
[Евгения Загородных](https://github.com/evgeniazagorodnykh)\
[Константин Гашев](https://github.com/Gashev1989)\
[Юлия Авраменко](https://github.com/JuliaAvramenko)\
[Анжелика](https://github.com/anzhelf)\
[Анна Радченко](https://github.com/radanngen)\

