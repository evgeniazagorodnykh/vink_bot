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
			e.preventDefault()
			handleSubmit()
		}
	}
	return (
		<div className={styles.form}>
			<form onSubmit={handleMessageSubmit}>
				<textarea
					value={currentMessage}
					onChange={onChangeHandler}
					className={styles.form__input}
					placeholder='Введите сообщение'
					onKeyDown={handleKeyDown}
				/>
				<button type='submit'>
					<ArrowUp size={24} color={'#37383a'} />
				</button>
			</form>
		</div>
	)
}
export default Form
