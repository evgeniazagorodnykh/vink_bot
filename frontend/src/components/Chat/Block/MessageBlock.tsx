import { FC } from 'react'
import styles from './MessageBlock.module.scss'
import Message from '../Message/Message'

interface Message {
	id: number
	text: string
	user: string
	time: string
}

type MessageBlockProps = {
	messages: Message[]
}

const MessageBlock: FC<MessageBlockProps> = ({ messages }) => {
	return (
		<ul className={styles.block}>
			{messages.map(el => (
				<Message key={el.id} time={el.time} user={el.user} message={el.text} />
			))}
		</ul>
	)
}

export default MessageBlock
