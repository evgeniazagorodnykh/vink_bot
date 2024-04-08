import type { Meta, StoryObj } from '@storybook/react'
import message from '../../assets/images/chat.svg'
import telegram from '../../assets/images/telegram.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import Button from '../Button/Button.tsx'
import style from '../ChatWidget/ChatWidget.module.css'
import ContextMenu from './ContextMenu'

const meta = {
	title: 'chatOpen/ContextMenu',
	component: ContextMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		isOpened: true,
		items: [
			<a
				href='https://t.me/lia_jul_07'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Button className={style.link} key={0}>
					<img src={telegram} alt='message' className={style.icon} />
				</Button>
			</a>,
			<a
				href='https://www.whatsapp.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Button className={style.link} key={1}>
					<img src={whatsapp} alt='message' className={style.icon} />
				</Button>
			</a>,
			<a
				href='https://t.me/lia_jul_07'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Button className={style.chat} key={2}>
					<img src={message} alt='message' className='' />
				</Button>
			</a>,
		],
	},
}
