import { FC, useMemo, useState } from 'react'
import style from './ChatWidget.module.css'
import ContextMenu from '../ContextMenu/ContextMenu';
import Button from '../Button/Button'
import message from '../../assets/images/chat.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
import telegram from '../../assets/images/telegram.svg'
import cross from '../../assets/images/cross2.svg'

interface ChatWidgetProps {
    className?: string
    styles?: any

}
export const ChatWidget: FC<ChatWidgetProps> = ({ className, styles }) => {
    const [menuState, setMenuState] = useState(false)

    const items = useMemo(
        () => [
            <a href="https://t.me/lia_jul_07" target="_blank" rel="noopener noreferrer">
                <Button className={style.link} key={0}>
                    <img src={telegram} alt="message" className={style.icon} />
                </Button>
            </a>,
            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <Button className={style.link} key={1}>
                    <img src={whatsapp} alt="message" className={style.icon} />
                </Button>
            </a>,
            <a href="https://t.me/lia_jul_07" target="_blank" rel="noopener noreferrer">
                <Button className={style.chat} key={2}>
                    <img src={message} alt="message" className="" />
                </Button>
            </a>
        ], [])

    function openContextMenu() {
        if (menuState === true) {
            setMenuState(false)
        } else {
            setMenuState(true)
        }
    }

    return (
        <div className={`${style.container} ${className}`} style={styles}>
            <ContextMenu items={items} isOpened={menuState}>
                {menuState && <Button className={style.cross} onClick={openContextMenu}>
                    <img src={cross} alt="message" className={style.iconCross} />
                </Button>
                    ||
                    <Button className={style.button} onClick={openContextMenu}>
                        <img src={message} alt="cross" className={style.message} />
                    </Button>}
            </ContextMenu>

        </div>
    )
}

export default ChatWidget;