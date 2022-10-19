import styled from 'styled-components';

export const Container = styled.main`
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    place-content: center;
    padding: 10.8rem 14.2rem;
`;


export const Logo = styled.h1`
    display: flex;
    align-items: center;
    margin-left: 5rem;
    gap: 1.9rem;

    font: 700 4.2rem "Roboto", sans-serif;
`;

export const Form = styled.form`
    width: 47.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding: 6.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 1.6rem;

    h2{
        font: 500 3.2rem "Poppins", sans-serif;
        line-height: 2.4rem;
        text-align: center;
    }
`;

export const Anchor = styled.a`
    width: 100%;
    text-align: center;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
`;