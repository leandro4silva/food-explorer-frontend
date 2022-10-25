import styled from 'styled-components';

export const Container = styled.div`
    padding: 4.7rem 12.3rem ;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        font: 400 1.4rem "DM Sans", sans-serif;
        line-height: 1.8rem;
        color: #FFFAF1;
    }
`;