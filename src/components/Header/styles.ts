import styled from "styled-components";

export const Container = styled.header`
    padding-block: 2.7rem;
    padding-inline: 12.3rem;   
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`

export const Nav = styled.nav`
    width: 100%;
    max-width: 100%;
`

export const ListItens = styled.ul`
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr 4fr 2fr 1fr;
`

export const Logo = styled.li`
    .logo{
        display: flex;
        align-items: center;
        gap: 1.1rem;
    
        > h2{
            font: 700 2.5rem 'Roboto',sans-serif;
            line-height: 2.9rem;
            color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
        }
    }
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    
    .item{
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
        font: 400 1.6rem 'Roboto', sans-serif;
    }
`

export const Link = styled.a`

`