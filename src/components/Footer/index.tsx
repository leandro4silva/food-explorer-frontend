import React from 'react';
import { Logo } from '../Logo';
import {Container} from './styles';

export function Footer(){
	return (
		<Container>
			<Logo footer/>
			<span>© 2022 - Todos os direitos reservados.</span>
		</Container>
	);
}