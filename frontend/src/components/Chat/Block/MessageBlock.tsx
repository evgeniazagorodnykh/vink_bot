import { FC, useEffect, useRef } from 'react'
import { MessageBlockProps } from '../../types/types'
import Message from '../Message/Message'
import styles from './MessageBlock.module.scss'

const MessageBlock: FC<MessageBlockProps> = ({ messages }) => {
	const chatEndRef = useRef<HTMLDivElement | null>(null)

	const scrollToBottom = () => {
		if (chatEndRef.current) {
			chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return (
		<ul className={styles.block}>
			{messages.map(el => (
				<Message key={el.id} time={el.time} user={el.user} message={el.text} />
			))}
			<div ref={chatEndRef} />
		</ul>
	)
}
export default MessageBlock
