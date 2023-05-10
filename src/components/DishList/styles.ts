import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
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
`

export const Title = styled.h2`
    font: 500 3.2rem 'Poppins',sans-serif;
    line-height: 4.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
`

export const Carousel = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr) 0.5fr;
    align-content: center;
    width: 100%;
    overflow: hidden;
`

export const Item = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 0.8rem;
    padding-top: 5.6rem; 
    padding-bottom: 4.0rem;
    position: relative;
    width: 100%;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    > button{
        position: absolute;
        right: 1.6rem;
        top: 1.6rem;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
    }

    > .image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.6rem;
        padding-inline: 4rem;

        img{
            max-width: 100%;
            max-height: 100%;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }
    }

    > .title{
        text-align: center;
        margin-bottom: 1.6rem;
        
        > h3{
            font: 700 2.4rem 'Poppins',sans-serif;
            line-height: 3.3rem;
            color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
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
            color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
        }
    }

    > .price{
        font: 400 3.2rem 'Roboto',sans-serif;
        line-height: 5rem;
        color: ${({ theme }) => theme.COLORS.TEXT_BLUE};
        padding-inline: 4rem;
        text-align: center;
        margin-bottom: 1.6rem;
    }

    > .itembox{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.6rem;
        align-items: center;
        padding-inline: 4rem;
        height: 4.8rem;

        > .amount{
            height: 3.2rem;
            display: grid;
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

        > button.add-to-cart{
            height: 100%;
            padding: 1.2rem 2.4rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_900};
            border-radius: 0.4rem;
            border: none;
            font: 500 1.4rem 'Poppins',sans-serif;
            color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
        }
    }   
`