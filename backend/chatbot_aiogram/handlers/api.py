import aiohttp


async def post_user(data):
    async with aiohttp.ClientSession() as session:
        async with session.post(
            f'http://backend:8000/conversations/', json=data
        ) as response:
            return await response.json()


async def post_message(data, conversation_id):
    async with aiohttp.ClientSession() as session:
        async with session.post(
            f'http://backend:8000/conversations/{conversation_id}/messages/', json=data
        ) as response:
            return await response.json()
