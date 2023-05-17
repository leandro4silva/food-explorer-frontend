import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
    height: 100vh;
    width: 100%;
`

export const Content = styled.div`
    padding-inline: 12.3rem;
    margin-top: 2.5rem;
`;

export const Back = styled.button`
    display: inline-flex;
    align-items: center;
    font: 700 2.4rem 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
    line-height: 3.3rem;
    background-color: transparent;
    border: none;
`

export const Form = styled.form`
    margin-top: 2.4rem;
    max-width: 100%;

    > h2{
        font: 500 3.2rem 'Poppins',sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
        margin-bottom: 3.2rem;
    }

    .three-input-group{
        display: grid;
        grid-template-columns: auto 40% 30%;
        align-items: center;
        column-gap: 3.2rem;
    }
`