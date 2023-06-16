import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.main`
    height: 100vh;
    width: 100%;
`

export const Content = styled.div`
    padding-inline: 12.3rem;
    margin-top: 2.5rem;
    margin-bottom: 8.9rem;
    min-height: 40rem;

    > .detail-content{
        margin-top: 4.2rem;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: flex-start;
        gap: 4.7rem;

        > img {
            width: fit-content;
        }

        > div h2{
            font: 500 4rem 'Poppins',sans-serif;
            line-height: 5.6rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            margin-bottom: 2.4rem;
        }

        > div p{
            font: 400 2.4rem 'Poppins',sans-serif;
            line-height: 3.3rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            margin-bottom: 2.4rem;
        }

        > div .ingredients{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 1.2rem;
            flex-wrap: wrap;
            margin-bottom: 4.8rem;

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

        > div .edit-button > button{
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

export const FixedFooter = styled.div`
 
`

export const ContentLoader = styled.div`
    width: 100%;
    min-height: 39rem;
    display: flex;
    justify-content: center;
    align-items: center;
`