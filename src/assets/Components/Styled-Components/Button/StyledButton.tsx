import type {ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
    children: ReactNode
} & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

const Button = styled.button<ButtonProps>`
  padding: 0.5rem 4rem;`

const StyledButton = ({children, ...props}: ButtonProps) => {
    return (
        <Button {...props}>
            {children}
        </Button>);
}

export default StyledButton;
