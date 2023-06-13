import * as SelectContent from '@radix-ui/react-select';
import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    width: 100%;
`

export const Content = styled.div`
    padding-inline: 12.3rem;
    margin-top: 2.5rem;
    margin-bottom: 11.6rem;
`;

export const Back = styled.button`
    display: inline-flex;
    align-items: center;
    font: 700 2.4rem 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
    line-height: 3.3rem;
    background-color: transparent;
    border: none;
`

export const Form = styled.form`
    margin-top: 2.4rem;
    max-width: 100%;

    > h2{
        font: 500 3.2rem 'Poppins',sans-serif;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
        margin-bottom: 3.2rem;
    }

    .three-input-group{
        display: grid;
        grid-template-columns: auto 40% 30%;
        align-items: flex-start;
        column-gap: 3.2rem;
    }

    .two-input-group{
        display: grid;
        grid-template-columns: 72.7% auto;
        align-items: flex-start;
        column-gap: 3.2rem; 
        margin-top: 3.2rem;
    }

    .two-input-group > .ingredients{
        display: flex;
        flex-direction: column;

        > label {
            font: 400 1.6rem 'Roboto',sans-serif;
            line-height: 1.6rem;
            color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
            margin-bottom: 0.8rem;
        }

        > div{
            display: flex;
            flex-wrap: wrap;
            gap: 1.6rem;
            align-items: center;
            padding: 0.7rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
            border-radius: 0.4rem;
        }

        > span {
            color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
            display: flex;
            align-items: center;
            gap: 0.2rem;
            font: 400 1.4rem 'Roboto',sans-serif;
            margin-top: 0.2rem;
        }
    }

    .description{
        margin-top: 3.2rem;
    }

    .button-save-content{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin-top: 3.2rem;

        > div{
            width: 17.2rem;
        }
    }
`
