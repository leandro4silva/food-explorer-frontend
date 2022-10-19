import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;

    label{
        font: 400 1.6rem "Roboto", sans-serif;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_800};
    }

    input{
        width: 100%;
        padding: 1.4rem 1.6rem;
        background-color:${({theme}) => theme.COLORS.BACKGROUND_700};
        border: 1px solid ${({theme}) => theme.COLORS.TEXT_WHITE};
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        border-radius: 0.5rem;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_900};
        }
    }
`;