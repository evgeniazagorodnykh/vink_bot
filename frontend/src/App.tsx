import { useState } from 'react'
import './App.css'
import Chat from './components/Chat/Chat'
import ChatWidget from './components/ChatWidget/ChatWidget'

function App() {
	const [isOpenChat, setIsOpenChat] = useState<boolean>(true)
	return (
		<div>
			<h1 onClick={() => setIsOpenChat(!isOpenChat)}>Vink bot</h1>
			{isOpenChat ? <Chat isOpen={isOpenChat} /> : <ChatWidget />}
		</div>
	)
}
export default App
