import type {InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styles from './CheckBox.module.scss';

type CheckBoxProps = {
    children: ReactNode
}& PropsWithChildren & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({children, ...props}: CheckBoxProps) => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" {...props}/>
            <p>{children}</p>
        </div>
    );
}

export default CheckBox;
