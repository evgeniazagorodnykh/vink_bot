import { FC, FormEvent, useState } from 'react'
import MessageBlock from './Block/MessageBlock'
import styles from './Chat.module.scss'
import Form from './Form/Form'
import { IMessage } from '../types/types'

const mockMessages: IMessage[] = [
	{
		id: 1,
		text: 'Готовы помочь!',
		user: 'vink',
		time: '12:00',
	},
	{
		id: 2,
		text: 'Мне нужна помощь!',
		user: 'me',
		time: '13:00',
	},
	{
		id: 11,
		text: 'Опишите вашу проблему.',
		user: 'vink',
		time: '12:00',
	},
	{
		id: 21,
		text: 'Моя проблемма...',
		user: 'me',
		time: '13:00',
	},
]

type ChatProps = {
	isOpen: boolean
}

const Chat: FC<ChatProps> = ({ isOpen }) => {
	const [messages, setMessages] = useState<IMessage[]>(mockMessages)
	const [currentMessage, setCurrentMessage] = useState<string>('')
	// let socket;

	// useEffect(() => {
	//   // Устанавливаем соединение с веб-сокет сервером при загрузке компонента
	//   socket = new WebSocket('ws://your-socket-server-address');

	//   // Установка обработчиков событий
	//   socket.onopen = () => {
	//     console.log('WebSocket connected');
	//   };

	//   // Принимаем новые сообщения и добавляем их в состояние messages
	//   socket.onmessage = (event) => {
	//     setMessages((prevMessages) => [...prevMessages, event.data]);
	//   };

	//   // Обработка закрытия соединения
	//   socket.onclose = () => {
	//     console.log('WebSocket disconnected');
	//   };

	//   // Отключение соединения при размонтировании компонента
	//   return () => {
	//     socket.close();
	//   };
	// }, []);

	// const handleMessageSubmit = (e: any): void => {
	// 	e.preventDefault()
	// 	// Отправляем текущее сообщение через веб-сокет
	// 	// socket.send(currentMessage);
	// 	// setCurrentMessage('')
	// 	console.log(e.target.value)
	// }

	function handleSubmit() {
		// Отправляем текущее сообщение через веб-сокет
		// socket.send(currentMessage);
		const date = new Date()

		const newMessage: IMessage = {
			id: messages.length + 1,
			text: currentMessage,
			user: 'me',
			time: `${date.getHours()}:${date.getMinutes()}`,
		}
		setMessages([...messages, newMessage])
		setCurrentMessage('')
	}

	const handleMessageSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleSubmit()
	}

	return (
		<div className={`${styles.chat} ${isOpen ? styles.open : ''}`}>
			<div className={styles.chat__header}>
				<h3>Чат с поддержкой:</h3>
			</div>
			<MessageBlock messages={messages} />
			<Form
				setCurrentMessage={setCurrentMessage}
				currentMessage={currentMessage}
				handleSubmit={handleSubmit}
				handleMessageSubmit={handleMessageSubmit}
			/>
		</div>
	)
}
export default Chat
