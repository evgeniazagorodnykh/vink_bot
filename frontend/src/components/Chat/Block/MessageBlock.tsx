import { FC } from 'react'
import { MessageBlockProps } from '../../types/types'
import Message from '../Message/Message'
import styles from './MessageBlock.module.scss'

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
