import React from 'react';
import {FieldValues} from 'react-hook-form';
import {InputHTMLAttributes} from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label: string,
    placeholder: string,
    register?: FieldValues,
}

export const Input: React.FC<InputProps> = ({name, label, placeholder, register, ...rest}) => {
	return(
		<Container>
			<label htmlFor={name}>
				{label}
			</label>
			<input placeholder={placeholder} {...register} {...rest}/>
		</Container>
	);
};