import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    font-family: 'Poppins',sans-serif;
    font-size: 1.4rem;
    border: none;
    color: #fff;
`