from aiogram import Bot
from aiogram.types import Message

from keyboards.reply import enter_phone_kbd


async def get_start(message: Message, bot: Bot):
    """Приветствие."""
    await message.answer(
        f'Привет, {message.from_user.first_name}! ' 
        'Это поддержка Vink. '
        'Мы постараемся ответить на все ваши вопросы. '
        'Отправь свой номер телефона для дальнейшей работы. ',
        reply_markup=enter_phone_kbd()
    )
