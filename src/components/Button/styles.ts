import styled from 'styled-components';

export const Container = styled.button`
    padding-block: 1.2rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
    border: none;
    border-radius: 0.5rem;
    font: 500 1.4rem "Poppins", sans-serif;
    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
`;