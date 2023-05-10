import { Container, Content, BannerContent, ProductList } from "./styles"
import { Header } from "../../../components/Header"
import { Banner } from "../../../components/Banner"
import { DishList } from "../../../components/DishList"
import { Footer } from "../../../components/Footer"

export function Dashboard(){
    return (
        <Container>
            <Header isAdmin />
            <Content>
                <BannerContent>
                    <Banner />
                </BannerContent>
                <ProductList>
                    <DishList title="Refeições" isAdmin />
                </ProductList>
                <ProductList>
                    <DishList title="Sobremesa" isAdmin />
                </ProductList>
                <ProductList>
                    <DishList title="Bebidas" isAdmin />
                </ProductList>
            </Content>
            <Footer />
        </Container>
    )
}