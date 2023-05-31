import { Container, Nav, ListItens, Logo, NavItem, Link, SignOutButton } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";
import Polygon from '../../assets/logo/polygon-blue.svg';
import { FiSearch } from 'react-icons/fi'
import { Receipt, SignOut } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    isAdmin?: boolean
}

export function Header({isAdmin = false} : HeaderProps) {
    const navigate = useNavigate();
    const {signOut} = useAuth();

    function handleSignOut(){
        if(isAdmin){
            signOut(true);
            navigate("/admin");
        }else{
            signOut(false);
            navigate("/");
        }
    }

    function handleCreateDish(){
        navigate("/admin/dish/create");
    }

    return (
        <Container>
            <Nav>
                <ListItens isAdmin={isAdmin}>
                    <Logo>
                        <Link className="logo" href="">
                            <img src={Polygon} alt="Poligono azul" />
                            <h2>
                                food explorer 
                                {
                                   isAdmin ? <span>admin</span> : ''
                                } 
                            </h2>
                        </Link>
                    </Logo>
                    {
                        !isAdmin &&
                        <NavItem>
                            <Link href="">
                                Meus favoritos
                            </Link>
                        </NavItem>
                    }
                    {
                        isAdmin &&
                        <NavItem>
                            <Link href="">
                                Histórico de pedidos
                            </Link>
                        </NavItem>
                    }
                    <NavItem>
                        <Input Icon={FiSearch} placeholder="Busque pelas opções de pratos" />
                    </NavItem>
                    <NavItem>
                        {
                            isAdmin && 
                            <Button text="Novo prato" type="button" onClick={handleCreateDish} />
                        }
                        {
                            !isAdmin &&
                            <Button Icon={Receipt} text="Meu pedido (0)" />
                        }
                    </NavItem>
                    <NavItem>
                        <SignOutButton type="button" title="Sair" onClick={handleSignOut}>
                            <SignOut size={32} />
                        </SignOutButton>
                    </NavItem>
                </ListItens>
            </Nav>
        </Container>
    )
}