import React from 'react';
import { Container } from './styles';
import {IoSearchOutline} from 'react-icons/io5';

export function Search(){
	return (
		<Container>
			<IoSearchOutline size={24}/>
			<input type="text" placeholder='Busque pelas opções de pratos' />
		</Container>
	);
}