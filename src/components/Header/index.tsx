import { Container, Nav, ListItens, Logo, NavItem, Link, SignOutButton } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";
import Polygon from '../../assets/logo/polygon-blue.svg';
import {FiSearch} from 'react-icons/fi'
import {Receipt, SignOut} from '@phosphor-icons/react'
import * as Popover from '@radix-ui/react-popover';


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
                        <Popover.Root>
                            <Popover.Trigger>
                                <SignOutButton>
                                    <SignOut size={32} />
                                </SignOutButton>
                            </Popover.Trigger>
                            <Popover.Content>
                                

                            </Popover.Content>
                        </Popover.Root>
                    </NavItem>
                </ListItens>
            </Nav>
        </Container>
    )
}