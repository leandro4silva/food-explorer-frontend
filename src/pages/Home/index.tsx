import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

export function Home(){
    return(
        <Container>
            <Header />
            <Content>
                <h1>Hello World</h1>
            </Content>
        </Container>
    )
}