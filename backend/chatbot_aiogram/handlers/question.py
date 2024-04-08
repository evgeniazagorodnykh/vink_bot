import logging

from aiogram import Bot
from aiogram.fsm.context import FSMContext
from aiogram.types import Message

from handlers.api import post_message
from handlers.gpt import YandexGPT
from keyboards.reply import final_kbd
from utils.states import StepsForm


logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s [%(levelname)s] %(message)s'
)


async def get_question(
    message: Message, bot: Bot, state: FSMContext
):
    """Диалог с покупателем."""
    await state.update_data(question=message.text)
    context_data = await state.get_data()
    data_dict = {}
    data_dict['is_from_user'] = True
    data_dict['content'] = message.text

    answer = await post_message(data_dict, context_data['conversation_id'])
    gpt = YandexGPT()
    gpt_answer = gpt.generate(answer)
    data_dict['content'] = gpt_answer
    data_dict['is_from_user'] = False
    await post_message(
        data_dict,
        context_data['conversation_id']
    )
    if gpt_answer is not None:
        await message.answer(
            gpt_answer,
            reply_markup=final_kbd()
        )
    else:
        await message.answer(
            'Возникли технические неполадки в работе чата. '
            'Для решения Вашего вопроса, '
            'пожалуйста свяжитесь с нами по телефону 8 800 550 7888!'
        )
        await state.set_state(StepsForm.FINAL_STATE)
