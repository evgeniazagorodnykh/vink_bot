import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.scss'


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string

}
export const Button: FC<IButtonProps> = ({ children, className, ...props }) => {
    return (
        <button
            type="button"
            className={`${style.button} ${className}`}
            {...props}
        >
            {children}
        </button >
    )
}

export default Button;