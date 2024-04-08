from aiogram.utils.keyboard import ReplyKeyboardBuilder


def enter_phone_kbd():
    """Отправить номер телефона."""
    keyboard_builder = ReplyKeyboardBuilder()
    keyboard_builder.button(
        text='Отправить мой номер телефона', request_contact=True
    )
    keyboard_builder.adjust(1)
    return keyboard_builder.as_markup(
        resize_keyboard=True,
        one_time_keyboard=True,
        input_field_placeholder='Введите номер телефона.'
    )


def final_kbd():
    """Закончить диалог."""
    keyboard_builder = ReplyKeyboardBuilder()
    keyboard_builder.button(text='Вопрос решен!')
    keyboard_builder.adjust(1)
    return keyboard_builder.as_markup(
        resize_keyboard=True,
        one_time_keyboard=True,
    )
