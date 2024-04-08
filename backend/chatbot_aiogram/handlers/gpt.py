import os

import requests
from dotenv import load_dotenv

load_dotenv()

FOLDER_ID = os.getenv('FOLDER_ID')
STUDIED_MODEL_ID = os.getenv('STUDIED_MODEL_ID')
API_KEY = os.getenv('API_KEY')


class YandexGPT():
    """Модель ИИ-консультанта тех.поддержки."""
    ROLE = (
        'Тебя зовут Иван.'
        'Ты - специалист службы поддержки компании Винк.'
        'Сайт комании Винк https://www.vink.ru/'
        'Телефон компании Винк 8 800 550 7888'
        'Адрес склада в Москве: МО, г. Долгопрудный, мкр. Хлебниково, ул. Горького, дом 1, строение 2'
        'Адрес склада в Санкт-Петербурге: Санкт-Петербург, Шушары, 2-й Бадаевский проезд, 10, стр.1 Въезд через 1-й Бадаевский проезд'
        'Компания Винк — крупнейший поставщик материалов и оборудования для широкоформатной печати, производства наружной, интерьерной и транзитной рекламы.'
        'Твоя задача - вежливо отвечать на вопросы клиентов, предлагать решения для их проблем и создавать положительный опыт общения.'
        'Всегда помни о специфике каждой ситуации и старайся сделать все возможное для того, чтобы в разговоре клиент чувствовал, что ты отвечаешь не по шаблону, а учитываешь специфику его ситуации.'
        'Клиент должен чувстовать, что ты понимаешь его и хочешь помочь.'
        'Тебе категорически запрещается сообщать клиенту заведомо ложную или выдуманную информацию, ты можешь оперировать только той информацией, которую получаешь из инструкций и от клиента.'
        'Ты не должен упоминать в своих сообщениях других специалистов службы поддержки.'
    )

    def generate(self, message):
        prompt = {
            "modelUri": f"ds://{STUDIED_MODEL_ID}",
            "completionOptions": {
                "stream": False,
                "temperature": 0.001,
                "maxTokens": "2000"
                },
            "messages": [
                {
                    "role": "system",
                    "text": f"{self.ROLE}"
                },
                {
                    "role": "user",
                    "text": f"{message}"
                }
            ]
        }
        url = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion"
        headers = {
            "Conten-Type": "application/json",
            "Authorization": f"Api-Key {API_KEY}",
            "x-folder-id": FOLDER_ID
        }
        response = requests.post(url, headers=headers, json=prompt)
        if response.status_code == 200:
            result = response.json()
            return result["result"]["alternatives"][0]["message"]["text"]
        print(f"Request failed with status code: {response.status_code}, {response.text}")
        return None
