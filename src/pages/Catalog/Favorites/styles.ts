import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    width: 100vw;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    padding-inline: 2.4rem;
    margin-top: 5.6rem;
    
    @media (min-width: 1024px) {
        margin-top: 3.4rem;
        padding-inline: 12.3rem;
    }
`

export const Title = styled.h2`
    font: 500 3.2rem 'Poppins',sans-serif;
    line-height: 140%;
    margin-bottom: 2.7rem;

    @media (min-width: 1024px) {
        margin-bottom: 3.2rem;
        line-height: 4.4rem;
    }
`

export const FavoriteContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2.7rem;
    width: 100%;
    
    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        column-gap: 4.8rem;
        row-gap: 4.8rem;
    }
`

export const BoxFav = styled.div`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    .image-content{
        > img{
            width: 7.2rem;
            height: 7.2rem;
        }
    }

    .text-content{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        > button{
            background: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_700};
            font: 400 1.2rem 'Roboto',sans-serif;
            line-height: 140%;
            
            @media (min-width: 1024px) {
                font: 400 1.4rem 'Roboto',sans-serif;
                line-height: 1.9rem;
            }
        }
    }

`

export const LoaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 28rem;
    height: 100%;
`

export const AnyFavorite = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 34rem;

    > span{
        font: 500 1.8rem 'Poppins',sans-serif;
        line-height: 4.4rem;
    }
`

export const LinkDish = styled(Link)`
    font: 500 2rem 'Poppins', sans-serif;
    line-height: 3.2rem;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
`