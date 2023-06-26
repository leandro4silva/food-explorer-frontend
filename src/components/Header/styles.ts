import { Link } from "react-router-dom";
import styled from "styled-components";

interface ListItensProp {
    isAdmin: boolean
}

export const Container = styled.header`
    padding-bottom: 2.4rem;
    padding-top: 5.6rem;
    padding-inline: 2.4rem;   
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    width: 100%;

    &.menu-expanded{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }

    &.menu-expanded .menu-responsive {
        display: none;
    }

    &.menu-expanded .content-menu{
        display: block;
        visibility: visible;
        opacity: 1;
        transform: translateX(0%);

    }

    &.menu-expanded .close-content{
        visibility: visible;
        opacity: 1;
        transform: translateX(0%);
    }
    
    @media (min-width: 1024px) {
        padding-block: 2.4rem;
        padding-inline: 12.3rem;   
    }
`   

export const Nav = styled.nav`
    width: 100%;
`

export const ListItens = styled.ul<ListItensProp>`
    display: none;

    @media (min-width: 1024px) {
        display: grid;
        align-items: center;
        height: 100%;
        grid-template-columns: ${({isAdmin}) =>  isAdmin ? '1.4fr 1.1fr 4fr 2fr 0.2fr' : '1.6fr 0.9fr 4fr 1.9fr 0.2fr'};
        column-gap: 3.2rem;
    }
`

export const Logo = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        justify-content: flex-start;
    }
    
    .logo{
        display: flex;
        align-items: center;
        gap: 1.1rem;

        > img {
            width: 2.4rem;
            height: 2.4rem;

            @media (min-width: 1024px) {
                width: 3rem;
                height: 3rem;
            }
        }

        > h2{
            font: 700 2.1rem 'Roboto',sans-serif;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
            position: relative;

            @media (min-width: 1024px) {
                font: 700 2.5rem 'Roboto',sans-serif;
                line-height: 2.9rem;
            }

            > span{
                position: absolute;
                bottom: -1.5rem;
                right: 0;
                font: 400 1.2rem 'Roboto',sans-serif;
                color: ${({theme}) => theme.COLORS.TEXT_BLUE};
            }
        }
    }
`

export const NavItem = styled.li`
    height: 100%;
    width: 100%;
    
    > button{
        height: 100%;
    }
`

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
    font: 400 1.6rem 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    height: 100%;
`

export const SignOutButton = styled.button`
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    background: transparent;
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
`

export const ResponsiveItens = styled.ul`

    > div.menu-responsive{
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        align-items: center;
        width: 100%;
    }

    .close-content{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        padding-top: 5.6rem;
        padding-inline: 2.4rem;  
        padding-bottom: 2.4rem;
        visibility: hidden;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 11.4rem;
        width: 100%;
        background: ${({theme}) => theme.COLORS.BACKGROUND_600};
        transition: transform 300ms;
        transform: translateX(-100%);

        > div{
            display: flex;
            align-items: center;
            gap: 1.6rem;
        }

        > div > button{
            background: transparent;
            display: flex;
            border: none;
            align-items: center;
            color: ${({theme}) => theme.COLORS.TEXT_WHITE}
        }

        > div > span{
            font-size: 2.1rem;
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        }
    }

    .content-menu{
        width: 100%;
        padding-right: 2.4rem;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`

export const ToggleMenuButton = styled.li`
    height: 100%;
    width: 100%;

    > button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.TEXT_WHITE}
    }
`

export const CartButton = styled.li`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    > button{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};


        > span{
            position: absolute;
            top: -6px;
            right: -6px;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
        }
    }
`

export const ContentMenuResponsive = styled.div`
    position: absolute;
    top: calc(11.4rem + 3.6rem);
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    transition: transform 300ms;
    transform: translateX(-100%);


    > ul{
        display: flex;
        flex-direction: column;
        gap: 3.6rem;
        padding-right: 2.4rem;
    }

`
export const NavLinkMob = styled(Link)`
    font: 400 2.4rem 'Poppins', sans-serif;
    line-height: 140%;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
`

export const SignOutMob = styled.button`
    background-color: transparent;
    border: none;
    font: 400 2.4rem 'Poppins', sans-serif;
    line-height: 140%;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
`