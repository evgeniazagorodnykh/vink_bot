from aiogram import Bot
from aiogram.fsm.context import FSMContext
from aiogram.types import Message

from utils.states import StepsForm
from handlers.api import post_message
from keyboards.reply import final_kbd


async def get_question(
    message: Message, bot: Bot, state: FSMContext
):
    """Диалог с покупателем."""
    await state.update_data(question=message.text)
    context_data = await state.get_data()
    data_dict = {}
    data_dict['content'] = message.text

    answer = await post_message(data_dict, context_data['conversation_id'])
    # отправка вопроса gpt и получение ответа
    await message.answer(
        'Ответ gpt',
        reply_markup=final_kbd()
    )

