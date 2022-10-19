import React from 'react';
import { Container, Inventory, SignOut, Favorites } from './styles';
import { Logo } from '../Logo';
import { Search } from '../Search';

import receiptIcon from '../../assets/receipt.svg';
import signOutIcon from '../../assets/sign-out.svg';


export function Header(){
	return (
		<Container>
			<nav>
				<ul>
					<li><Logo /></li>
					<li><Favorites>Meus favoritos</Favorites></li>
					<li><Search /></li>
					<li>
						<Inventory>
							<img src={receiptIcon} alt="Meu pedidos" />
                                 Meu pedido (0) 
						</Inventory>
					</li>
					<li>
						<SignOut>
							<img src={signOutIcon} alt="Sair" />
						</SignOut>
					</li>
				</ul>		
			</nav>  
		</Container>
	);
}