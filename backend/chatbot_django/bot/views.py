from django.shortcuts import get_object_or_404
from rest_framework import viewsets

from bot.models import Conversation, Message
from bot.serializers import ConversationSerializer, MessageSerializer


class ConversationViewSet(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def get_conversation(self):
        conversation_id = self.kwargs.get('conversation_id')
        return get_object_or_404(Conversation, id=conversation_id)

    def get_queryset(self):
        return Message.objects.filter(conversation=self.get_conversation())

    def perform_create(self, serializer):
        conversation = self.get_conversation()
        return serializer.save(conversation=conversation)
