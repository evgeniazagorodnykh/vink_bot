import { ButtonHTMLAttributes, FC } from 'react'
import style from './Button.module.css'

// export enum ButtonSize {
//     SMALL = 'small',
//     BIG = 'big'
// }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string

}
export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
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