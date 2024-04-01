from aiogram import Bot
from aiogram.fsm.context import FSMContext
from aiogram.types import Message

from utils.states import StepsForm


async def get_true_contact(
    message: Message, bot: Bot, phone: str, state: FSMContext
):
    """Если заказчик правильно указал телефон, то в чат вернется номер."""
    await state.update_data(phone=phone, name=message.from_user.first_name)
    context_data = await state.get_data()
    await message.answer(f'Сохраненные данные:\r\n{str(context_data)}')
    await message.answer('Какой вопрос вас интересует?')
    await state.set_state(StepsForm.QUESTION_STATE)


async def get_fake_contact(message: Message, bot: Bot, state: FSMContext):
    """Если телефон указан неправльно, то в чат вернется ошибка."""
    await message.answer('Вы отправили не свой номер телефона!')
    await state.set_state(StepsForm.PHONE_STATE)
