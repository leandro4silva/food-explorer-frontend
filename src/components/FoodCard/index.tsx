import React from 'react';
import { Container } from './styles';

import heartIcon from '../../assets/heart.svg';
import plusIcon from '../../assets/plus.svg';
import lessIcon from '../../assets/less.svg';


export function FoodCard(){
	return (
		<Container>
			<div>
				<button>
					<img src={heartIcon} alt="Favoritar" />
				</button>
			</div>
			<div>
				<img src='./img/torrada.png' alt="Torradas de Parma"/>
				<h4>Torradas de Parma</h4>
				<p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
				<h3>R$ 25,97</h3>
				<div>
					<div>
						<button>
							<img src={lessIcon} alt="Decrementar um produto" />
						</button>
						<span>01</span>
						<button>
							<img src={plusIcon} alt="Incrementar um produto" />
						</button>
					</div>
					<div>
						<button>Incluir</button>
					</div>
				</div>

			</div>
		</Container>
	);
}