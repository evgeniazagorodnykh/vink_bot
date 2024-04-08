import { ArrowUp } from 'lucide-react'
import { ChangeEvent, FC, FormEvent, KeyboardEvent } from 'react'
import styles from './Form.module.scss'

type FormProps = {
	setCurrentMessage: (message: string) => void
	currentMessage: string
	handleSubmit: () => void
	handleMessageSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Form: FC<FormProps> = ({
	setCurrentMessage,
	currentMessage,
	handleSubmit,
	handleMessageSubmit,
}) => {
	function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
		setCurrentMessage(e.target.value)
	}

	function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
		if (e.key === 'Enter' && !e.shiftKey) {
			if (currentMessage.trim() !== '') {
				e.preventDefault()
				handleSubmit()
			}
		}
	}
	return (
		<div className={styles.form}>
			<form onSubmit={handleMessageSubmit}>
				<textarea
					minLength={2}
					maxLength={100}
					value={currentMessage}
					onChange={onChangeHandler}
					className={styles.form__input}
					placeholder='Введите сообщение'
					onKeyDown={handleKeyDown}
				/>
				<button disabled={currentMessage.trim() === ''} type='submit'>
					<ArrowUp
						className={currentMessage.trim() !== '' ? styles.icon : ''}
						size={24}
						color={currentMessage.trim() !== '' ? '#37383a' : '#e5e5e5'}
					/>
				</button>
			</form>
		</div>
	)
}
export default Form
