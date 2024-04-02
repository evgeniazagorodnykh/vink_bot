from django.contrib import admin

from bot.models import Conversation, Message


@admin.register(Conversation)
class ConversationAdmin(admin.ModelAdmin):
    """Конфигурация диалога в админке."""
    list_display = (
        'id', 'name', 'phone', 'archive', 'created_at', 'updated_at',
    )
    list_filter = ('created_at', 'updated_at', 'archive',)
    search_fields = ('name', 'phone',)


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    """Конфигурация сообщения в админке."""
    list_display = (
        'id', 'conversation', 'content', 'is_from_user', 'created_at',
    )
    list_filter = ('is_from_user', 'conversation__name', 'created_at',)
    search_fields = ('content',)
    oredering = ('-created_at',)
