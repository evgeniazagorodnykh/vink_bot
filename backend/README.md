# vink_bot
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