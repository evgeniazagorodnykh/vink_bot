FROM python:3.9-slim

WORKDIR /app

COPY ./ ./

RUN pip3 install -r requirements.txt --no-cache-dir

CMD ["uvicorn", "--host", "0.0.0.0", "--port", "8000", "chatbot.asgi:application"]
