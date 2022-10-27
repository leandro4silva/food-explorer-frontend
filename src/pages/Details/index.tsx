import React from 'react';
import { Header } from '../../components/Header';
import { Container, Content, Preview } from './styles';
import {CaretLeft} from 'phosphor-react';

export function Details(){
	return (
		<Container>
			<Header />
			<Content>
				<div>
					<button>
						<CaretLeft size={32}/> 
                        voltar
					</button>
				</div>
				<Preview>
					<img src="./img/salada.png" alt="Salada" />										
					<div>
						<h2>Salada Ravanello</h2>
						<p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
						<div>
                             
						</div>
					</div>
				</Preview>   
			</Content>
		</Container>
	);
}