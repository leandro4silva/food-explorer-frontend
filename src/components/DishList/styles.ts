import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

export const Title = styled.h2`
    font: 500 3.2rem 'Poppins',sans-serif;
    line-height: 4.4rem;
    color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
`

export const Carousel = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 0.5fr;
    column-gap: 2.7rem;
    align-content: center;
    width: 100%;
`

export const Item = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;
    padding-top: 5.6rem; 
    padding-bottom: 4.0rem;
    position: relative;
    width: 100%;

    > .favorite{
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        background: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
    }

    > .image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.6rem;
        padding-inline: 4rem;

        img{
            max-width: 100%;
            max-height: 100%;
        }
    }

    > .title{
        text-align: center;
        margin-bottom: 1.6rem;
        
        > h3{
            font: 700 2.4rem 'Poppins',sans-serif;
            line-height: 3.3rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
        }
    }


    > .ingredients{
        width: 100%;
        text-align: center;
        padding-inline: 4rem;
        margin-bottom: 1.6rem;

        > p{
            font: 400 1.4rem 'Roboto',sans-serif;
            line-height: 2.2rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_800};
        }
    }

    > .price{
        font: 400 3.2rem 'Roboto',sans-serif;
        line-height: 5rem;
        color: ${({theme}) => theme.COLORS.TEXT_BLUE};
        padding-inline: 4rem;
        text-align: center;
    }
`