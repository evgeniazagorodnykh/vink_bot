import aiohttp


async def post_user(data):
    async with aiohttp.ClientSession() as session:
        async with session.post(
            f'http://backend:8000/api-token-auth/', json=data
        ) as response:
            return await response.json()
