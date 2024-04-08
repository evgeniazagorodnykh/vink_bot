from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework import status

from bot.models import Conversation, Message
from bot.serializers import (
    ConversationSerializer,
    MessageSerializer,
)


class ConversationViewSet(viewsets.ModelViewSet):
    queryset = Conversation.objects.all()
    serializer_class = ConversationSerializer
    permission_classes = [AllowAny]


class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [AllowAny]

    def get_conversation(self):
        conversation_id = self.kwargs.get('conversation_id')
        return get_object_or_404(Conversation, id=conversation_id)

    def get_queryset(self):
        return Message.objects.filter(conversation=self.get_conversation())

    def perform_create(self, serializer):
        conversation = self.get_conversation()
        serializer.save(conversation=conversation)

