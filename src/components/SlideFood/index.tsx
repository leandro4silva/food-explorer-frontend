/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Container } from './styles';
import { FoodCard } from './FoodCard';
import { Arrow } from './Arrow';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export function SlideFood(){
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loaded, setLoaded] = useState(false);
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		initial: 0,
		slides: {
			perView: 4,
			spacing: 27
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel);
		},
		created() {
			setLoaded(true);
		}
	});

	return(
		<Container>
			<div ref={sliderRef} className="keen-slider">
				<FoodCard 
					className="keen-slider__slide number-slide1"
					image='salada.png'
					name="Salada Ravanello >"
					description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
					price="49,97"
				/>
				<FoodCard 
					className="keen-slider__slide number-slide1"
					image='spaguetti.png'
					name="Spaguetti Gambe  >"
					description="Massa fresca com camarões e pesto. "
					price=" 79,97"
				/>
				<FoodCard 
					className="keen-slider__slide number-slide1"
					image='salada-molla.png'
					name="Salada Molla  >"
					description="Tomates, coentro, pepino, cebola roxa. Frescos e temperados."
					price="19,97"
				/>	
				<FoodCard 
					className="keen-slider__slide number-slide1"
					image='torrada.png'
					name="Torradas de Parma >"
					description="Presunto de parma e rúcula em um pão com fermentação natural."
					price="25,97"
				/>		
				<FoodCard 
					className="keen-slider__slide number-slide1"
					image='salada-molla.png'
					name="Salada Molla  >"
					description="Tomates, coentro, pepino, cebola roxa. Frescos e temperados."
					price="19,97"
				/>		
			</div>

			{loaded && Number(instanceRef.current?.slides.length) > 4 && (
				<>
					<Arrow
						left				
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.prev()
						}
						disable={currentSlide === 0}
					/>
					<Arrow
						onClick={(e: any) =>
							e.stopPropagation() || instanceRef.current?.next()
						}
						disable={currentSlide === Number(instanceRef.current?.slides.length) - 4}
					/>
				</>
			)}
		</Container>
	);
}