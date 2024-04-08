import { FC, PropsWithChildren, ReactNode } from 'react'
import style from './ContextMenu.module.css'

interface ContextMenuProps {
	isOpened: boolean
	items?: Array<ReactNode>
}
export const ContextMenu: FC<PropsWithChildren & ContextMenuProps> = ({
	children,
	isOpened,
	items,
}) => {
	return (
		<>
			{isOpened && <div className={style.wrapper}>{items}</div>}
			<div className={style.container}>{children}</div>
		</>
	)
}

export default ContextMenu
