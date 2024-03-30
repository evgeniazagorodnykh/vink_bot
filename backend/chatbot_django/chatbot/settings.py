import os

from pathlib import Path

from dataclasses import dataclass

from dotenv import load_dotenv
from environs import Env

load_dotenv()


# @dataclass
# class Bots:
#     bot_token: str
#     admin_id: int


# @dataclass
# class Settings:
#    bots: Bots


# def get_settings(path: str):
#     env = Env()
#     env.read_env(path)

#     return Settings(
#         bots=Bots(
#             bot_token=env.str('TOKEN'),
#             admin_id=env.int('ADMIN_ID'),
#         )
#     )


# settings = get_settings('.env')

BASE_DIR = Path(__file__).resolve().parent.parent
# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

WEB_HOST = os.getenv(
    'WEB_HOST', default='127.0.0.1')
WEB_PORT = os.getenv(
    'WEB_PORT', default='')
WEB_PROTOCOL = os.getenv(
    'WEB_PROTOCOL', default='http://')
SECRET_KEY = os.getenv('SECRET_KEY', default='without_key')

DEBUG = True

ALLOWED_HOSTS = ['*']


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'channels',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'chatbot.urls'

CSRF_TRUSTED_ORIGINS = [f"{WEB_PROTOCOL}{WEB_HOST}{WEB_PORT}"]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'chatbot.wsgi.application'
# ASGI_APPLICATION = 'chatbot.asgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': os.getenv('DATABASE_NAME', default='postgres'),
#         'USER': os.getenv('DATABASE_USERNAME', default='postgres'),
#         'PASSWORD': os.getenv('DATABASE_PASSWORD', default='postgres'),
#         'HOST': os.getenv('DATABASE_HOST', default='db'),
#         'PORT': os.getenv('DATABASE_PORT', default='5432'),
#     }
# }


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'ru'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
