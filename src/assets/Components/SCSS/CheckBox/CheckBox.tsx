import type {InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import './CheckBox.scss'

type CheckBoxProps = {
    children: ReactNode
}& PropsWithChildren & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({children, ...props}: CheckBoxProps) => {
    return (
        <div className="checkbox">
            <input type="checkbox" {...props}/>
            <p>{children}</p>
        </div>
    );
}

export default CheckBox;
