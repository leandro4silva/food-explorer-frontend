/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container, Banner, Content } from './styles';
import { Header } from '../../components/Header';
import bannerImg from '../../assets/image/banner.png';
import { SlideFood } from '../../components/SlideFood';
import { Footer } from '../../components/Footer';

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
			<Content>
				<h2>Pratos principais</h2>
				<SlideFood/>
				
				<h2>Sobremesas</h2>
				<SlideFood/>
				
				<h2>Bebidas</h2>
				<SlideFood/>
			</Content>
			<Footer/>
		</Container>
	);
}