import React, { FC, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'

import message from '../../assets/images/chat.svg'
import cross from '../../assets/images/cross2.svg'
import telegram from '../../assets/images/telegram.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import Button from '../Button/Button'
import ContextMenu from '../ContextMenu/ContextMenu'
import style from './ChatWidget.module.scss'
import Chat from '../Chat/Chat'


interface IChatWidgetProps {
	className?: string
	styles?: any
	// setIsOpenChat: (arg: boolean) => void
}

export const ChatWidget: FC<IChatWidgetProps> = ({
	className,
	styles,
}) => {
	const [menuState, setMenuState] = useState(false)
	const [isOpenChat, setIsOpenChat] = useState<boolean>(false)

	const items = useMemo(
		() => [
			<a
				href='https://web.telegram.org/a/#7042323177'
				target='_blank'
				rel='noopener noreferrer'
				key={0}
			>
				<Button className={style.link} >
					<img src={telegram} alt='message' className={style.icon} />
				</Button>
			</a>,
			<a
				href='https://www.whatsapp.com/'
				target='_blank'
				rel='noopener noreferrer'
				key={1}
			>
				<Button className={style.link}>
					<img src={whatsapp} alt='message' className={style.icon} />
				</Button>
			</a>,
			<a href='#' rel='noopener noreferrer' key={2}>
				<Button
					onClick={openChatHandler}
					className={style.chat}
				>
					<img src={message} alt='message' />
				</Button>
			</a>,
		],
		[],
	)

	function openChatHandler() {
		setIsOpenChat(true)
		setMenuState(false)
	}

	function openContextMenu() {
		if (menuState === true) {
			setMenuState(false)
		} else {
			setMenuState(true)
		}
	}

	return (
		<div>
			{
				isOpenChat
				&& <Chat isOpen={isOpenChat} setIsOpen={setIsOpenChat} />
				||
				<div className={`${style.container} ${className}`} style={styles}>
					<ContextMenu items={items} isOpened={menuState}>
						{(menuState && (
							<Button className={style.cross} onClick={openContextMenu}>
								<img src={cross} alt='message' className={style.iconCross} />
							</Button>
						)) || (
								<Button className={style.button} onClick={openContextMenu}>
									<img src={message} alt='cross' className={style.message} />
								</Button>
							)}
					</ContextMenu>
				</div>
			}
		</div>
	)
}

export function ChatWidgetConstructor({
	element,
	className,
	styles,
}: {
	element: string
	className?: string
	styles?: any
}) {
	const root = createRoot(document.getElementById(element) as HTMLElement)
	root.render(React.createElement(ChatWidget, { className, styles }))
}

export default ChatWidget
