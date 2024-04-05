export interface IFormProps {
	onSubmit: (e: React.FormEvent) => void
}

export interface IMessage {
	id: number
	text: string
	user: string
	time: string
}

export type ChatProps = {
	isOpen: boolean
	setIsOpen: (arg: boolean) => void
}

export type MessageBlockProps = {
	messages: IMessage[]
}

export type MessageProps = {
	user: string
	message: string
	time: string
}
