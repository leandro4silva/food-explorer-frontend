import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    flex-direction: column;
`

export const Content = styled.div`
    padding-inline: 2.4rem;
    margin-top: 3.6rem;
    margin-bottom: 8.9rem;
    min-height: 40rem;

    @media (min-width: 1024px) {
        padding-inline: 12.3rem;
        margin-top: 2.5rem;
        margin-bottom: 8.9rem;
    }

    > .detail-content{
        margin-top: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        gap: 4.8rem;
        
        @media (min-width: 1024px) {
            margin-top: 1.8rem;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
        }
        
        > div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-inline: 2rem;

            @media (min-width: 1024px) {
                justify-content: flex-start;
                align-items: flex-start;
                padding-inline: 0rem;
            }
        }

        > img {
            width: 26.4rem;
            height: 26.4rem;

            @media (min-width: 1024px) {
                width: 38.9rem;
                height: 38.9rem;
            }
        }

        > div h2{
            font: 500 2.7rem 'Poppins',sans-serif;
            line-height: 140%;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            margin-bottom: 2.4rem;

            @media (min-width: 1024px) {
                font: 500 4rem 'Poppins',sans-serif;
                line-height: 5.6rem;
            }
        }

        > div p{
            font: 400 1.6rem 'Poppins',sans-serif;
            line-height: 140%;
            text-align: center;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            margin-bottom: 2.4rem;

            @media (min-width: 1024px) {
                font: 400 2.4rem 'Poppins',sans-serif;
                line-height: 3.3rem;
                text-align: start;
            }
        }

        > div .ingredients{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.2rem;
            flex-wrap: wrap;
            margin-bottom: 4.8rem;

            padding-inline: 3.6rem;

            @media (min-width: 1024px) {
                padding-inline: 0rem;
                justify-content: flex-start;
            }


            > span{
                padding-inline: 0.8rem;
                padding-block: 0.4rem;
                border-radius: 0.5rem;
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
                font: 500 1.4rem 'Poppins',sans-serif;
                line-height: 2.4rem;
                color: ${({theme}) => theme.COLORS.TEXT_WHITE};
            }
        }

        > div .include-content{
            display: flex;
            align-items: center;
            gap: 3.3rem;

            > div.amount{
                height: 3.2rem;
                display: grid;
                column-gap: 1.4rem;
                grid-template-columns: repeat(3, 1fr);
        
                > button{
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: transparent;
                    border: none;
                    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
                }
        
                > span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    font: 700 2rem 'Roboto',sans-serif;
                    line-height: 3.2rem;
                    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
                }
            }

            > div.include-button > button {
                padding-block: 1.2rem;
                padding-inline: 2.4rem;
                color: ${({theme}) => theme.COLORS.TEXT_WHITE};
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
                border: none;
                border-radius: 0.5rem;
                font: 500 1.4rem 'Poppins',sans-serif;
                line-height: 2.4rem;
            }
        }

    }
`

export const Back = styled.button`
    display: inline-flex;
    align-items: center;
    font: 700 2.4rem 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
    line-height: 3.3rem;
    background-color: transparent;
    border: none;

`

export const ContentLoader = styled.div`
    width: 100%;
    min-height: 39rem;
    display: flex;
    justify-content: center;
    align-items: center;
`