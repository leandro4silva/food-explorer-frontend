import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 21rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 0.8rem;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`

export const Image = styled.div`
    position: relative;
    max-width: 100%;

    >img {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding-block: 8.7rem;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    > h2{
        font: 500 4rem 'Poppins',sans-serif;
        line-height: 5.6rem;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
    }

    > h3{
        font: 400 1.6rem 'Poppins',sans-serif;
        line-height: 2.2rem;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700}
    }
`