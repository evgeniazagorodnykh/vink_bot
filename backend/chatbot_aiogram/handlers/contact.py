from aiogram import Bot
from aiogram.fsm.context import FSMContext
from aiogram.types import Message

from utils.states import StepsForm
from handlers.api import post_user


async def get_true_contact(
    message: Message, bot: Bot, phone: str, state: FSMContext
):
    """Если заказчик правильно указал телефон, то активируется диалог."""
    await state.update_data(phone=phone, name=message.from_user.first_name)
    context_data = await state.get_data()
    data_dict = {}
    data_dict['name'] = context_data.get('name')
    data_dict['phone'] = context_data.get('phone')
    answer = await post_user(data_dict)
    await message.answer('Какой вопрос вас интересует?')
    await state.set_state(StepsForm.CONVERSATION_STATE)
    await state.update_data(conversation_id=answer['id'])


async def get_fake_contact(message: Message, bot: Bot, state: FSMContext):
    """Если телефон указан неправильно, то в чат вернется ошибка."""
    await message.answer('Вы отправили не свой номер телефона!')
    await state.set_state(StepsForm.PHONE_STATE)
