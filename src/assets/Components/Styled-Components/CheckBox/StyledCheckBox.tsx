import styled from 'styled-components';
import type { InputHTMLAttributes, ReactNode } from 'react';

type CheckBoxProps = {
	children: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const CheckboxWrapper = styled.div`
  	width: 100%;
  	display: flex;
`;

const CheckboxInput = styled.input`
  	margin: 5px;
`;

const CheckboxLabel = styled.p``;

const StyledCheckBox = ({ children, ...props }: CheckBoxProps) => {
	return (
		<CheckboxWrapper>
			<CheckboxInput type="checkbox" {...props} />
			<CheckboxLabel>{children}</CheckboxLabel>
		</CheckboxWrapper>
	);
};

export default StyledCheckBox;
