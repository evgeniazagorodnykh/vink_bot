import { FC } from 'react'
import styles from './Message.module.scss'

type MessageProps = {
	user: string
	message: string
	time: string
}

const Message: FC<MessageProps> = ({ user, message, time }) => {
	return (
		<li className={`${styles.message} ${styles[`message__${user}`]}`}>
			{user === 'vink' && <h3>Сотрудник</h3>}

			<div className={styles.message__block}>
				<p className={styles.message__text}>{message}</p>
				<p className={styles.message__time}>{time}</p>
			</div>
		</li>
	)
}

export default Message
