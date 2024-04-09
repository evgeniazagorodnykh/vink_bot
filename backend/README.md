# Vink Bot

## Описание
Асинхронный Telegram бот для техподдержки, разработанный в команде в рамках Хакатона.
Бот отвечает на вопросы клиентов с помощью дообученной модели YandexGPT.

## Технологии
- Python 3.9
- Django 4.2.11
- Django REST Framework
- Aiogram 3.4.1
- PostgreSQL 13.0
- Nginx 1.21.3
- Docker

# Установка
## Копирование репозитория
Клонируем репозиторий и переходим в директорию infra:
```
~ git clone git@github.com:evgeniazagorodnykh/vink_bot.git
~ cd ./vink_bot/infra/
```
Требуется изменить server_name и listen в ./infra/nginx/default.conf, ports в docker-compose.production.yml

## Подготовка боевого сервера:
1. Перейдите на боевой сервер:
```
ssh username@server_address
```
2. Обновите индекс пакетов APT:
```
sudo apt update
```
и обновите установленные в системе пакеты и установите обновления безопасности:
```
sudo apt upgrade -y
```
Создайте папку `nginx`:
```
mkdir nginx
``` 
Скопируйте файлы docker-compose.yaml, nginx/default.conf из вашего проекта на сервер в home/<ваш_username>/docker-compose.yaml, home/<ваш_username>/nginx/default.conf соответственно:
```
scp docker-compose.production.yaml <username>@<host>/home/<username>/docker-compose.production.yaml
scp default.conf <username>@<host>/home/<username>/nginx/default.conf
```
Установите Docker и Docker-compose:
```
sudo apt install docker.io
```
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
```
sudo chmod +x /usr/local/bin/docker-compose
```
Проверьте правильность установки Docker-compose:
```
sudo  docker-compose --version
```
На боевом сервере создайте файл .env:
```
touch .env
```
и заполните переменные окружения по образцу

## Развертывание проекта с помощью Docker:
Разворачиваем контейнеры в фоновом режиме из папки infra:
```
sudo docker compose up -d
```
При первом запуске выполняем миграции:
```
sudo docker compose exec backend python manage.py migrate
```
И собираем статику:
```
sudo docker compose exec backend python manage.py collectstatic --no-input
```
Создаем суперпользователя:
```
sudo docker compose exec backend python manage.py createsuperuser
```

# Адресные пути
- [Документация к API базе данных](http://94.241.139.6/docs)
- [Админ-панель базы данных](http://94.241.139.6/admin)

## Авторы:
[Евгения Загородных](https://github.com/evgeniazagorodnykh)\
[Константин Гашев](https://github.com/Gashev1989)\
[Юлия Авраменко](https://github.com/JuliaAvramenko)\
[Анжелика](https://github.com/anzhelf)\
[Анна Радченко](https://github.com/radanngen)

