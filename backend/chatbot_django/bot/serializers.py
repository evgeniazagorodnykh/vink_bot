from rest_framework import serializers

from bot.models import Conversation, Message
from bot.utils import time_since


class MessageSerializer(serializers.ModelSerializer):
    """Сериализатор для сообщений."""

    class Meta:
        model = Message
        fields = [
            'id', 'conversation', 'content', 'is_from_user', 'created_at'
        ]


class ConversationSerializer(serializers.ModelSerializer):
    """Сериализатор для диалогов."""
    messages = MessageSerializer(many=True, read_only=True)
    created_at = serializers.SerializerMethodField()

    class Meta:
        model = Conversation
        fields = ['id', 'archive', 'created_at', 'messages', 'name', 'phone']

    def get_created_at(self, obj):
        return time_since(obj.created_at)
