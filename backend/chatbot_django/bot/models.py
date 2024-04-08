from django.db import models

from chatbot.settings import MAX_CHAR_LENGTH, MAX_DIGIT_LENGTH


class Conversation(models.Model):
    """Модель диалога."""
    name = models.CharField(max_length=MAX_CHAR_LENGTH, default='User')
    phone = models.CharField(max_length=MAX_DIGIT_LENGTH)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    archive = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Диалог'
        verbose_name_plural = 'Диалоги'
        ordering = ['created_at']

    def __str__(self):
        return f'Диалог с пользователем {self.name}'


class Message(models.Model):
    """Модель сообщения в диалоге."""
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_from_user = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
        ordering = ['-created_at']

    def __str__(self):
        return f'Сообщение {self.id} в диалоге {self.conversation}'
