from django.urls import include, path
from rest_framework.routers import SimpleRouter

from bot.views import ConversationViewSet, MessageViewSet

app_name = 'bot'

router_v1 = SimpleRouter()
router_v1.register(
    r'conversations',
    ConversationViewSet,
    basename='conversations'
)
router_v1.register(
    r'conversations/(?P<conversation_id>\d+)/messages',
    MessageViewSet,
    basename='messages'
)

urlpatterns = [
    path('', include(router_v1.urls)),
]
