import type {ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './Button.scss'

type ButtonProps = {
    children: ReactNode
} & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button  className="button"{...props}>
            {children}
        </button>);
}

export default Button;
