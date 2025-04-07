import type {ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styles from './Button.module.scss'

type ButtonProps = {
    children: ReactNode
} & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({children, ...props}: ButtonProps) => {
    return (
        <button  className={styles.button}{...props}>
            {children}
        </button>);
}

export default Button;
