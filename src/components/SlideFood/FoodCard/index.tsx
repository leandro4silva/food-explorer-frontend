import React, { HTMLAttributes } from 'react';
import { Container } from './styles';



import heartIcon from '../../../assets/heart.svg';
import plusIcon from '../../../assets/plus.svg';
import lessIcon from '../../../assets/less.svg';


interface FoodCardProps extends HTMLAttributes<HTMLDivElement>{
	name: string,
	description: string,
	price: string,
	image: string
}


export const FoodCard: React.FC<FoodCardProps> = ({name, description, price, image, ...rest}) =>{
	return (
		<Container {...rest}>
			<div>
				<button>
					<img src={heartIcon} alt="Favoritar" />
				</button>
			</div>
			<div>
				<img src={`./img/${image}`} alt="Torradas de Parma" draggable='false'/>
				<h4>{name}</h4>
				<p>{description}</p>
				<h3>R$ {price}</h3>
				<div>
					<div>
						<button>
							<img src={lessIcon} alt="Decrementar um produto" draggable='false' />
						</button>
						<span>01</span>
						<button>
							<img src={plusIcon} alt="Incrementar um produto" draggable='false' />
						</button>
					</div>
					<div>
						<button>Incluir</button>
					</div>
				</div>

			</div>
		</Container>
	);
};