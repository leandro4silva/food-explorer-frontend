import { Container, Carousel, WrapperNavigation, Title } from "./styles"
import { DishListItem } from "./DishList.Item"
import { Arrow } from "./Arrow";
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react";


export function DishList() {
    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides:{
            perView: 3.5,
            spacing: 27
        },
        slideChanged(slider){
            setCurrentSlide(slider.track.details.rel);
        },
        created(){
            setLoaded(true);
        }
    });

    return (
        <Container>
            <Title>Pratos principais</Title>
            <WrapperNavigation>
                <Carousel ref={sliderRef} className="keen-slider">
                    <DishListItem className="keen-slider__slide"/>
                    <DishListItem className="keen-slider__slide"/>
                    <DishListItem className="keen-slider__slide"/>
                    <DishListItem className="keen-slider__slide"/>
                    <DishListItem className="keen-slider__slide"/>
                    <DishListItem className="keen-slider__slide"/>
                </Carousel>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow 
                            left 
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
                            disable={currentSlide === 0}
                        />

                        <Arrow 
                            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
                            disable={
                                currentSlide === (instanceRef.current?.slides.length / 2)
                            }
                        />
                    </>
                )}
            </WrapperNavigation>
        </Container>
    )
}