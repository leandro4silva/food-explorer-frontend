import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { DishList } from "../../components/DishList";
import { Container, Content, ProductList, BannerContent } from "./styles";

export function Home(){
    return(
        <Container>
            <Header />
            <Content>
                <BannerContent>
                    <Banner />
                </BannerContent>
                <ProductList>
                    <DishList />
                </ProductList>
            </Content>
        </Container>
    )
}