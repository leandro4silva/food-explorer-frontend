import { Container } from "./styles"
import Polygon from '../../assets/logo/polygon-gray.svg';

export function Footer(){
    return(
        <Container> 
            <div className="logo">
                <img src={Polygon} alt="Poligono cinza" />
                <h2>food explorer</h2>
            </div>
            <div className="copyright">
                <h4>© 2022 - Todos os direitos reservados.</h4>
            </div>
        </Container>
    )
} 