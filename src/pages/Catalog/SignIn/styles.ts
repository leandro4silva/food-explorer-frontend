import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 10.8rem;
    padding-bottom: clamp(8rem, 2rem + 10vh, 13.3rem);
    padding-top: 9rem;
`;

export const Logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    > div{
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    h1{
        font: 700 4.2rem 'Roboto', sans-serif;
        line-height: 5rem;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;

    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 85%;
        text-align: center;
        border-radius: 1.6rem;
        padding-inline: 6.4rem;
        padding-block: clamp(2.8rem, 0.2rem + 2vh, 6.4rem);
        max-height: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        
        > h2{
            font: 500 3.2rem 'Poppins', sans-serif;
            line-height: 2.4rem;
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2.8rem + 1vh, 3.2rem);
    margin-top: clamp(2.2rem, 0.2rem + 0vh, 3.2rem);
    max-height: 100%;
    max-width: 100%;

    > button.link{
        color: #fff;
        font-size: 1.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        line-height: 2.4rem;
        background: transparent;
        border: none;
    }
`