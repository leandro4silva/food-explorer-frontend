import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
`

export const Content = styled.div`
    width: 45rem;
    padding: 4.5rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    border-radius: 1.6rem;

    > h2{
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
        margin-bottom: 2rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
