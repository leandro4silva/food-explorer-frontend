import { Container, Nav, ListItens, Logo, NavItem, Link } from "./styles"
import Polygon from '../../assets/logo/Polygon.svg';

export function Header(){
    return(
        <Container>
            <Nav>
                <ListItens>
                    <Logo>
                        <Link className="logo" href="">
                            <img src={Polygon} alt="Poligono azul"/>
                            <h2>food explorer</h2>
                        </Link>
                    </Logo>
                    <NavItem>
                        <Link className="item" href="">
                            Meus favoritos
                        </Link>
                    </NavItem>
                    <li className="item">3</li>
                    <li className="item">4</li>
                    <li className="item">5</li>
                </ListItens>
            </Nav>
        </Container>
    )
}