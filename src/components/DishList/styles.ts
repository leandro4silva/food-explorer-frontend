import styled from "styled-components";

interface ItemProp{
    isAdmin: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding-left: 2.4rem;

    @media (min-width: 1024px) {
        gap: 4rem;
        padding-left: 0rem;
    }
    
`

export const WrapperNavigation = styled.div`
    position: relative;

    .arrow {
        width: 5rem;
        height: 70px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    }

    .arrow--left,
    .arrow--right{
        display: none;
    }

    @media (min-width: 1024px) {
        .arrow--left,
        .arrow--right{
            display: block;
        }

        > .arrow--left {
            left: 0px;
        }

        > .arrow--right {
            left: auto;
            right: 0px;
        }

        > .arrow--disabled {
            display: none;
        } 
    }
`

export const Title = styled.h2`
    font: 500 1.8rem 'Poppins',sans-serif;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};

    @media (min-width: 1024px) {
        font: 500 3.2rem 'Poppins',sans-serif;
        line-height: 4.4rem;
    }
`

export const Carousel = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
`

export const AnyProductRegister = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a{
        color: ${({theme}) => theme.COLORS.TEXT_BLUE};
    }
`

export const Item = styled.div<ItemProp>`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;
    padding-top: 2.4rem; 
    padding-bottom: 2.4rem;
    position: relative;
    width: 100%;
    height: ${({isAdmin}) => isAdmin ? '29rem' : '30rem'};
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media (min-width: 1024px) {
        padding-top: 5.6rem; 
        padding-bottom: 2.4rem;
        height: ${({isAdmin}) => isAdmin ? '46rem' : '51.5rem'};
    }
    
    > button{
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};


        @media (min-width: 1024px) {
            right: 1.6rem;
            top: 1.6rem;
        }
    }

    > .favoritar > *{
        width: 2.2rem;
        height: 2.4rem;

        @media (min-width: 1024px) {
            width: 3.2rem;
            height: 3.4rem;
        }
    }

    > .image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.2rem;
        padding-inline: 2.4rem;

        @media (min-width: 1024px) {
            margin-bottom: 1.6rem;
            padding-inline: 4rem;
        }

        img{
            max-width: 8.8rem;
            max-height: 8.8rem;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;

            @media (min-width: 1024px) {
                max-width: 17.6rem;
                max-height: 17.6rem;
            }
        }
    }

    > .title{
        text-align: center;
        margin-bottom: 1.2rem;

        @media (min-width: 1024px) {
            margin-bottom: 1.6rem;
        }
        
        > a{
            font: 700 1.6rem 'Poppins',sans-serif;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};

            @media (min-width: 1024px) {
                font: 700 2.4rem 'Poppins',sans-serif;
                line-height: 3.3rem;
            }
        }
    }


    > .description{
        display: none;
        
        @media (min-width: 1024px) {
            display: block;
            width: 100%;
            height: 48px;
            text-align: center;
            padding-inline: 4rem;
            margin-bottom: 1.6rem;
        }

        > p{
            display: block;
            @media (min-width: 1024px) {
                font: 400 1.4rem 'Roboto',sans-serif;
                line-height: 2.2rem;
                color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
            }
        }
    }

    > .price{
        font: 400 1.6rem 'Roboto',sans-serif;
        line-height: 140%;
        color: ${({ theme }) => theme.COLORS.TEXT_BLUE};
        padding-inline: 2.4rem;
        text-align: center;
        margin-bottom: 1.2rem;

        @media (min-width: 1024px) {
            font: 400 3.2rem 'Roboto',sans-serif;
            margin-bottom: 1.6rem;
            padding-inline: 4rem;
            font: 400 3.2rem 'Roboto',sans-serif;
            line-height: 5rem;
        }
    }

    > .itembox{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1.6rem;
        align-items: center;
        height: 3.2rem;
        padding-inline: 2.4rem;
        
        @media (min-width: 1024px) {
            grid-template-columns: 1fr 1fr;
            column-gap: 1.6rem;
            padding-inline: 4rem;
            height: 4.8rem;
        }

        > .amount{
            height: 3.2rem;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1.8rem;
            padding-inline: 3.2rem;

            @media (min-width: 1024px) {
                padding-inline: 0rem;
                column-gap: 0rem;
            }

            > button{
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: transparent;
                border: none;
                color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

            }

            > button > *{
                width: 1.8rem;
                height: 1.8rem;
            }

            @media (min-width: 1024px) {
                > button > *{
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }
            
            > span{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                font: 700 1.6rem 'Roboto',sans-serif;
                line-height: 140%;
                color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};

                @media (min-width: 1024px) {
                    font: 700 2rem 'Roboto',sans-serif;
                    line-height: 3.2rem;
                }
            }
        }

        > button.add-to-cart{
            height: 100%;
            padding-block: 0.4rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_900};
            border-radius: 0.4rem;
            border: none;
            font: 500 1.4rem 'Poppins',sans-serif;
            color: ${({ theme }) => theme.COLORS.TEXT_WHITE};

            @media (min-width: 1024px) {
                height: 100%;
                padding-block: 1.2rem;
            }
        }
    }   
`

export const DishItemLoader = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;
    padding-top: 5.6rem; 
    padding-bottom: 4.0rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 44.1rem;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export const ContentDishLoader = styled.div`

`