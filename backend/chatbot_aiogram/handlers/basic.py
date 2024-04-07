from aiogram import Bot
from aiogram.types import Message
from aiogram.fsm.context import FSMContext

from keyboards.reply import enter_phone_kbd
from utils.states import StepsForm


async def get_start(message: Message, bot: Bot, state: FSMContext):
    """Приветствие."""
    await message.answer(
        f'Привет, {message.from_user.first_name}! ' 
        'Это поддержка Vink. '
        'Мы постараемся ответить на все ваши вопросы. '
        'Отправьте свой номер телефона для дальнейшей работы. ',
        reply_markup=enter_phone_kbd()
    )

    await state.set_state(StepsForm.PHONE_STATE)


async def question_resolved(message: Message, bot: Bot, state: FSMContext):
    """Вопрос решен."""
    await message.answer(
        'Мы рады, что смогли вам помочь!'
    )
    await state.set_state(StepsForm.FINAL_STATE)
