import { Container, Carousel, WrapperNavigation, Title, AnyProductRegister, DishItemLoader, ContentDishLoader } from "./styles"
import { DishListItem } from "./DishList.Item"
import { Arrow } from "./Arrow";
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from "react";
import { DishProps } from "../../pages/Admin/Dashboard";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";

interface DishListProps {
    title?: string,
    isAdmin: boolean,
    dishs?: DishProps[],
    loader?: boolean
}

export function DishList({ title, dishs, isAdmin = false, loader = false }: DishListProps) {
    const [loaded, setLoaded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    let [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 3.5,
            spacing: 27
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        }
    });
    
    useEffect(() => {
        instanceRef.current?.update()
    }, [dishs])

    return (
        <Container>
            <Title>{title}</Title>
            <WrapperNavigation>
                {
                    !loader ?
                        dishs && dishs.length > 0 &&
                            <Carousel ref={sliderRef} className="keen-slider">
                                {
                                    dishs.map((dish) => {
                                        return (
                                            <DishListItem key={dish.id} dish={dish} className="keen-slider__slide" isAdmin />
                                        )
                                    })
                                }
                            </Carousel>
                        :
                        <>
                            <Carousel ref={sliderRef} className="keen-slider">
                                <DishItemLoader className="keen-slider__slide">
                                    <Loader width={30} height={30} />
                                </DishItemLoader>
                                <DishItemLoader className="keen-slider__slide">
                                    <Loader width={30} height={30} />
                                </DishItemLoader>
                                <DishItemLoader className="keen-slider__slide">
                                    <Loader width={30} height={30} />
                                </DishItemLoader>
                                <DishItemLoader className="keen-slider__slide">
                                    <Loader width={30} height={30} />
                                </DishItemLoader>
                            </Carousel>
                        </>
                }
                {loaded && instanceRef.current && instanceRef.current.slides.length > 3 && (
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