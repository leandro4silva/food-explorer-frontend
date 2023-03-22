import { Container, Image, Content } from "./styles"
import ColorsBurgers from '../../assets/images/Banner/colors-burgers.png';


export function Banner(){
    return(
        <Container>
            <Image>
                <img src={ColorsBurgers} alt="Hamburgers coloridos"/>
            </Image>
            <Content >
                <h2>Sabores inigualáveis</h2>
                <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
            </Content>
        </Container>
    )
}