from aiogram.fsm.state import State, StatesGroup


class StepsForm(StatesGroup):
    """Состояния для машины состояний."""
    PHONE_STATE = State()
    QUESTION_STATE = State()
