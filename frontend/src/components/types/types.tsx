export interface IFormProps {
	onSubmit: (e: React.FormEvent) => void
}

export interface IMessage {
	id: number
	text: string
	user: string
	time: string
}

export type MessageBlockProps = {
	messages: IMessage[]
}
