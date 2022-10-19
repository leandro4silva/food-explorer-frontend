import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
    border-radius: 0.5rem;

    svg{
        margin-inline: 1.4rem;
    }

    input{
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
        border: none;
        height: 4.8rem;
        border-radius: 0.5rem;
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        height: 100%;
    }
`;