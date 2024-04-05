import { useState } from 'react'
import Chat from './components/Chat/Chat'
import ChatWidget from './components/ChatWidget/ChatWidget'

function App() {
	const [isOpenChat, setIsOpenChat] = useState<boolean>(false)
	return (
		<div>
			{isOpenChat ? (
				<Chat isOpen={isOpenChat} setIsOpen={setIsOpenChat} />
			) : (
				<ChatWidget setIsOpenChat={setIsOpenChat} />
			)}
		</div>
	)
}
export default App
