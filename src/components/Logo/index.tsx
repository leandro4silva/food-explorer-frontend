import React from 'react';
import {Container} from './styles';

import iconFoodExplorer from '../../assets/food-explorer.svg';

export function Logo(){
	return (
		<Container>
			<img src={iconFoodExplorer} alt="food explorer" /> 
            food explorer
		</Container>
	);
}