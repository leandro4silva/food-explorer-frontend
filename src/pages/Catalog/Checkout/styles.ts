import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    flex-direction: column;

    .tab-active{
        background: #0D161B;
    }
`

export const Content = styled.div`
    padding-inline: 2.4rem;
    padding-top: 3.4rem;
    padding-bottom: 6.9rem;
    width: 100%;
    height: 100%;
    overflow: auto;

    
    @media (min-width: 1024px) {
        overflow: hidden;
        padding-inline: 12.3rem;
    }
`

export const Title = styled.h2`
    font: 500 3.2rem 'Poppins',sans-serif;
    line-height: 4.4rem;
    margin-bottom: 3.2rem;
`

export const GridContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    

    .hidden{
        display: none;
    }

    @media (min-width: 1024px) {
        .hidden{
            display: block;
        }

        grid-template-columns: 58.4rem auto;
        column-gap: 7.5rem;
    }
`

export const ButtonAdvance = styled.div`
    margin-top: 3.1rem;
    display: flex;
    justify-content: flex-end;

    @media (min-width: 1024px) {
        display: none;
    }

    > button{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        border: none;
        padding-block: 1.2rem;
        width: 21.6rem;
        border-radius: 0.4rem;
    }
`

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;

    > div.products {
        max-height: 65.0rem;
        overflow-y: auto;

        @media (min-width: 1024px) {
            max-height: 31.4rem;
        }
    }
`

export const BoxProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 1.3rem;
    padding-block: 1.6rem;

    > img{
        width: 7.2rem;
        height: 7.2rem;
    }

    .box-text{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        @media (min-width: 1024px) {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }

    .box-text > span:first-child{
        font: 500 2rem 'Poppins',sans-serif;
        line-height: 3.2rem;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
    }

    .box-text > span:nth-child(2){
        font: 400 1.2rem 'Roboto',sans-serif;
        line-height: 2rem;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_800};
    }

    > div > button {
        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.BACKGROUND_RED_700};
    }
`

export const PaymentContent = styled.div`

`

export const BoxPayment = styled.div`
    border: 1px solid #76797B;
    width: 100%;
    background: transparent;
    border-radius: 0.8rem;
    overflow: hidden;

    @media (min-width: 1024px) {
        width: 53rem;
    }

    .form-payment{
        display: flex
        
        ;
        height: 8.1rem;
    }
`

export const PixButton = styled.button`
    width: 100%;
    border: none;
    border-right: 1px solid #76797B;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    background: transparent;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;

        > span{
            font: 400 1.6rem 'Roboto',sans-serif;
            line-height: 1.6rem;
        }
    }
`

export const CardButton = styled.button`
    background: transparent;
    border: none;
    width:100%;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        > span{
            font: 400 1.6rem 'Roboto',sans-serif;
            line-height: 1.6rem;
        }
    }
`

export const TotalContent = styled.div`
    margin-top: 1.6rem;

    > span {
        font: 500 2rem 'Poppins',sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
    }
`

export const DataContent = styled.div`
    height: 100%;
    width: 100%;
    background: transparent;
    border-top: 1px solid #76797B;
    padding-block: 3rem;

    > div.pix{
        width: 100%;
        display: grid;
        place-content: center;

        > img {
            margin-inline: auto;
        }
    } 

    > div.pix.hidden{
        display: none;
    }

    > div.card{
        padding-inline: 2.6rem;
        display: flex;
        flex-direction: column;

        @media (min-width: 1024px) {
            padding-inline: 8.1rem;
        }

        .input-group{
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
        }

        .two-columns{
            display: flex;
            align-items: center;
            gap: 1.7rem;
            margin-top: 2.7rem;
            width: 100%;
        }

        input {
            background: transparent;
            border: 1px solid ${({theme}) => theme.COLORS.TEXT_WHITE};
            border-radius: 0.4rem; 
            padding: 1.6rem 1.4rem;
            overflow: hidden;
            font: 400 1.6rem 'Roboto', sans-serif;
            line-height: 1.6rem;
            width: 100%;
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        }

        .button-content{
            margin-top: 2.7rem;

            > button{
                padding-block: 1.2rem;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 0.8rem;
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
                border: none;
                color: ${({theme}) => theme.COLORS.TEXT_WHITE};
                border-radius: 0.4rem;
                font: 500 1.4rem 'Poppins', sans-serif;
                line-height: 2.4rem;

                @media (min-width: 1024px) {
                    padding-block: 1.6rem;
                    font: 500 1.6rem 'Poppins', sans-serif;
                    line-height: 2.4rem;
                }
            }
        }
    }

    > div.card.hidden{
        display: none;
    }
`