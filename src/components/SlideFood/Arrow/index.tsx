import React, { ButtonHTMLAttributes } from 'react';
import {Container} from './styles';

interface ArrowProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    disable: boolean,
    left?: boolean,
}

export const Arrow: React.FC<ArrowProps> = ({disable, left=false, ...rest}) => {
	return (
		<Container
			left={left}
			disable={disable}
			{...rest}
		>
			{left && (
				<svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M15.3451 0.832913C15.8332 1.32107 15.8332 2.11253 15.3451 2.60068L3.72895 14.2168L15.3451 25.8329C15.8332 26.3211 15.8332 27.1125 15.3451 27.6007C14.8569 28.0888 14.0655 28.0888 13.5773 27.6007L1.0773 15.1007C0.589143 14.6125 0.589143 13.8211 1.0773 13.3329L13.5773 0.832913C14.0655 0.344758 14.8569 0.344758 15.3451 0.832913Z" fill="white"/>
				</svg> 
			)}
			{!left && (
				<svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M0.577298 1.11123C1.06545 0.623078 1.85691 0.623078 2.34507 1.11123L14.8451 13.6112C15.3332 14.0994 15.3332 14.8908 14.8451 15.379L2.34507 27.879C1.85691 28.3672 1.06545 28.3672 0.577298 27.879C0.0891428 27.3908 0.0891428 26.5994 0.577298 26.1112L12.1934 14.4951L0.577298 2.879C0.0891428 2.39085 0.0891428 1.59939 0.577298 1.11123Z" fill="white"/>
				</svg>  
			)}
		</Container>
	);
};