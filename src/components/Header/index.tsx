import { Container, Nav, ListItens, Logo, NavItem, Link, SignOutButton } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";
import Polygon from '../../assets/logo/Polygon.svg';
import {FiSearch} from 'react-icons/fi'
import {Receipt, SignOut} from '@phosphor-icons/react'


export function Header() {
    return (
        <Container>
            <Nav>
                <ListItens>
                    <Logo>
                        <Link className="logo" href="">
                            <img src={Polygon} alt="Poligono azul" />
                            <h2>food explorer</h2>
                        </Link>
                    </Logo>
                    <NavItem>
                        <Link href="">
                            Meus favoritos
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Input Icon={FiSearch} placeholder="Busque pelas opções de pratos"/>
                    </NavItem>
                    <NavItem>
                        <Button Icon={Receipt} text="Meu pedido (0)" />
                    </NavItem>
                    <NavItem>
                        <SignOutButton title="Sair">
                            <SignOut size={32} />
                        </SignOutButton>
                    </NavItem>
                </ListItens>
            </Nav>
        </Container>
    )
}