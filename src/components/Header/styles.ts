import styled from "styled-components";

interface ListItensProp {
    isAdmin: boolean
}

export const Container = styled.header`
    padding-block: 2.4rem;
    padding-inline: 12.3rem;   
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    width: 100%;
`

export const Nav = styled.nav`
    width: 100%;
`

export const ListItens = styled.ul<ListItensProp>`
    display: grid;
    align-items: center;
    height: 100%;
    height: 7rem;
    grid-template-columns: ${({isAdmin}) =>  isAdmin ? '1.4fr 1.1fr 4fr 2fr 0.2fr' : '1.4fr 0.8fr 4fr 2fr 0.2fr'};
    column-gap: 3.2rem;
`

export const Logo = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    
    .logo{
        display: flex;
        align-items: center;
        gap: 1.1rem;

        > img {
            width: 3rem;
            height: 3rem;
        }

        > h2{
            font: 700 2.5rem 'Roboto',sans-serif;
            line-height: 2.9rem;
            color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
            position: relative;

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

export const Link = styled.a`
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

