import React, {ButtonHTMLAttributes} from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string
}

export const Button: React.FC<ButtonProps> = ({title, ...rest}) => {
	return (
		<Container 
			{...rest}> 
			{title}      
		</Container>
	); 
};