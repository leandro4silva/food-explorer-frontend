import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    column-gap: 1.8rem;
    margin-top: 3.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 0.8rem;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    
    @media only screen and (max-width: 1500px) and (min-width: 700px){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0rem;
        margin-top: 17rem;
    }

    @media screen and (min-width: 1500px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0rem;
        margin-top: clamp(20rem + 1vw, 10vw + 15rem, 25rem + 5vw);
    }

`

export const Image = styled.div`
    position: relative;

    >img {
        position: absolute;
        left: -15px;
        bottom: 0;
        width: 120%;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        @media (min-width: 1024px) {
            left: 0;
            bottom: 0;
            width: 100%;
        }
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-block: 2.2rem;
    flex-direction: column;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media (min-width: 1024px) {
        gap: 0.8rem;
        padding-block: 8.7rem;
    }

    > h2{
        font: 500 1.8rem 'Poppins',sans-serif;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
        
        @media (min-width: 1024px) {
            font: 500 4rem 'Poppins',sans-serif;
            line-height: 5.6rem;
        }
    }

    > h3{
        font: 400 1.2rem 'Poppins',sans-serif;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};


        @media (min-width: 1024px) {
            font: 400 1.6rem 'Poppins',sans-serif;
            line-height: 2.2rem;
        }
        
    }
`