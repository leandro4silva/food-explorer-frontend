import styled from 'styled-components';

export const Container = styled.main`
`;


export const Content = styled.div`
    margin-inline: 12.3rem;
    margin-top: 2.5rem;

    div > button{
        display: flex;
        align-items: center;
        font: 500 2.4rem "Poppins", sans-serif;
        line-height: 3.3rem;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
        background-color: transparent;
        border: none;
    }
`;


export const Preview = styled.div`
    display: flex;
    align-items: center;
    gap: 4.1rem;
    margin-top: 4.1rem;

    img{    
        height: 38rem;
        width: 38rem;
        object-fit: contain;
    }

    > div{
        display: flex;
        flex-direction: column;

        h2{
            font: 500 4rem "Poppins", sans-serif;
            line-height: 5.6rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
        }

        p{
            font: 400 2.4rem "Poppins", sans-serif;
            line-height: 3.3rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            width: 68rem;
        }
    }

`;