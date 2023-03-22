import { Container, Carousel, Item, Title } from "./styles"
import { DishListItem } from "./DishList.Item"

export function DishList() {
    return (
        <Container>
            <Title>Pratos principais</Title>
            <Carousel>
                <DishListItem />
                <DishListItem />
                <DishListItem />
            </Carousel>
        </Container>
    )
}