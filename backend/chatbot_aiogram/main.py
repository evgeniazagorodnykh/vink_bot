import logging
import asyncio

from aiogram import Bot, Dispatcher, F
from aiogram.types import Message
from aiogram.filters import Command
from settings import settings

from handlers.basic import get_start, question_resolved
from handlers.contact import get_fake_contact, get_true_contact
from handlers.question import get_question
from filters.is_contact import IsTrueContact
from utils.commands import set_commands
from utils.states import StepsForm


async def start():
    """Функция, запускающая работу бота."""
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    )
    bot = Bot(token=settings.bots.bot_token)

    dp = Dispatcher()
    dp.message.register(
        get_start,
        Command(commands=['start', 'run'])
    )
    dp.message.register(
        get_true_contact,
        F.contact,
        IsTrueContact(),
        StepsForm.PHONE_STATE
    )
    dp.message.register(
        get_fake_contact,
        F.contact
    )
    dp.message.register(
        question_resolved,
        F.text == 'Вопрос решен!',
        StepsForm.CONVERSATION_STATE,
    )
    dp.message.register(
        get_question,
        StepsForm.CONVERSATION_STATE
    )

    try:
        await dp.start_polling(bot)
    finally:
        await bot.session.close()


if __name__ == '__main__':
    asyncio.run(start())
