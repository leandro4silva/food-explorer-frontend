import { Container, Nav, ListItens, Logo, NavItem, NavLink, SignOutButton, ResponsiveItens, ContentMenuResponsive, ToggleMenuButton, CartButton, NavLinkMob, SignOutMob } from "./styles"
import { Input } from "../Input";
import { Button } from "../Button";
import Polygon from '../../assets/logo/polygon-blue.svg';
import { FiSearch } from 'react-icons/fi'
import { Receipt, SignOut, List, X } from '@phosphor-icons/react'
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/cart";

interface HeaderProps {
    isAdmin?: boolean,
    disableSearch?: boolean,
    handleSearch: (searchValue: string) => void
}

export function Header({isAdmin = false, disableSearch = false, handleSearch} : HeaderProps) {
    const navigate = useNavigate();
    const {signOut} = useAuth();
    const [quantityProductCart, setQuantityProductCart] = useState<number | undefined>(0);
    const { cart } = useCart();

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

    function handleCheckout(){
        navigate("/checkout");
    }

    function handleToggleMenu(){
        document.querySelector('.menu')?.classList.add('menu-expanded')
    }

    function handleCloseMenu(){
        document.querySelector('.menu')?.classList.remove('menu-expanded')
    }

    useEffect(() => {
        setQuantityProductCart(cart?.length)
    }, [cart])

    return (
        <Container className="menu">
            <Nav>
                <ListItens className="nav-desktop" isAdmin={isAdmin}>
                    <Logo>
                        <NavLink className="logo" to={ isAdmin ? "/admin/dashboard" : "/"}>
                            <img src={Polygon} alt="Poligono azul" />
                            <h2>
                                food explorer 
                                {
                                   isAdmin ? <span>admin</span> : ''
                                } 
                            </h2>
                        </NavLink>
                    </Logo>
                    {
                        !isAdmin &&
                        <NavItem>
                            <NavLink to={"/favorites"}>
                                Meus favoritos
                            </NavLink>
                        </NavItem>
                    }
                    {
                        isAdmin &&
                        <NavItem>
                            <NavLink to={""}>
                                Histórico de pedidos
                            </NavLink>
                        </NavItem>
                    }
                    <NavItem>
                        <Input name="search" onChange={(e) => handleSearch(e.currentTarget.value)} disabled={disableSearch} Icon={FiSearch} placeholder="Busque pelas opções de pratos" />
                    </NavItem>
                    <NavItem>
                        {
                            isAdmin && 
                            <Button text="Novo prato" type="button" onClick={handleCreateDish} />
                        }
                        {
                            !isAdmin &&
                            <Button Icon={Receipt} text={`Meu pedido (${quantityProductCart})`} onClick={handleCheckout}/>
                        }
                    </NavItem>
                    <NavItem>
                        <SignOutButton type="button" title="Sair" onClick={handleSignOut}>
                            <SignOut size={32} />
                        </SignOutButton>
                    </NavItem>
                </ListItens>
                <ResponsiveItens>
                    <div className="menu-responsive">
                        <ToggleMenuButton>
                            <button onClick={handleToggleMenu}>
                                <List width={28} height={28} />
                            </button>
                        </ToggleMenuButton>
                        <Logo>
                        <NavLink className="logo" to={ isAdmin ? "/admin/dashboard" : "/"}>
                                <img src={Polygon} alt="Poligono azul" />
                                <h2>
                                    food explorer 
                                    {
                                    isAdmin ? <span>admin</span> : ''
                                    } 
                                </h2>
                            </NavLink>
                        </Logo>
                        <CartButton>
                            <button onClick={handleCheckout}>
                                <Receipt width={28} height={28} />
                                <span>{quantityProductCart}</span>
                            </button>
                        </CartButton>
                    </div>
                    <div className="close-content">
                        <div>
                            <button><X width={28} height={28} onClick={handleCloseMenu}/></button>
                            <span>Menu</span>
                        </div>
                    </div>
                    <ContentMenuResponsive className="content-menu">
                        <ul>
                            <li>
                                <Input name="search" onChange={(e) => handleSearch(e.currentTarget.value)} disabled={disableSearch} Icon={FiSearch} placeholder="Busque pelas opções de pratos" />
                            </li>
                            <li><NavLinkMob to={"/"}>Principal</NavLinkMob></li>
                            <li><NavLinkMob to={"/favorites"}>Meus favoritos</NavLinkMob></li>
                            <li><SignOutMob onClick={handleSignOut}>Sair</SignOutMob></li>
                        </ul>
                    </ContentMenuResponsive>
                </ResponsiveItens>
            </Nav>
        </Container>
    )
}