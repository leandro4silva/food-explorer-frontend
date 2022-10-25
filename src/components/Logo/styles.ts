import styled from 'styled-components';

export const Container = styled.a<{footer: boolean}>`
    display: flex;
    align-items: center;
    gap: 1.1rem;

    font: 700 2.5rem "Roboto", sans-serif;
    color: ${({theme, footer}) => footer ?  'rgba(255, 255, 255, 0.3);' : theme.COLORS.TEXT_WHITE};
    line-height: 2.9rem;

    img{
        width: 2.9rem;
        height: 2.9rem;
    }

    
`;