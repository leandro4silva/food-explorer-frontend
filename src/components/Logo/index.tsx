import React, { LinkHTMLAttributes } from 'react';
import {Container} from './styles';

import iconFoodExplorer from '../../assets/food-explorer.svg';
import iconFoodExplorerFooter from '../../assets/food-explorer-footer.svg';


interface LogoProps extends LinkHTMLAttributes<HTMLElement>{
	footer?: boolean
}

export const Logo : React.FC<LogoProps> = ({footer=false}) =>{
	return (
		<Container footer={footer}>
			<img src={footer ? iconFoodExplorerFooter : iconFoodExplorer} alt="food explorer" /> 
            food explorer
		</Container>
	);
};