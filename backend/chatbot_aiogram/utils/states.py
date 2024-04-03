from aiogram.fsm.state import State, StatesGroup


class StepsForm(StatesGroup):
    """Состояния для машины состояний."""
    PHONE_STATE = State()
    CONVERSATION_STATE = State()
    FINAL_STATE = State()
