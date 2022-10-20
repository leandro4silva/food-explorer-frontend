import React from 'react';
import { Container, Banner, FoodContent } from './styles';
import { Header } from '../../components/Header';
import { FoodCard } from '../../components/FoodCard';
import bannerImg from '../../assets/image/banner.png';


export function Home() {
	return (
		<Container>
			<Header />
			<Banner>
				<img src={bannerImg} alt="Hamburgues coloridos com frutas ao lado" draggable='false' />
				<div></div>
				<div>
					<h2>Sabores inigualáveis</h2>
					<p>Sinta o cuidado do preparo com ingredientes selecionados</p>
				</div>
			</Banner>
			<FoodContent>
				<h3>Pratos principais</h3>
				<div>
					<FoodCard />
					<FoodCard />
				</div>
			</FoodContent>
		</Container>
	);
}