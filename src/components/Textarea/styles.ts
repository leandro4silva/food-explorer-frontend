import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;

    > span {
        color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font: 400 1.4rem 'Roboto',sans-serif;
        margin-top: 0.2rem;
    }
`

export const Label = styled.label`
    font: 400 1.6rem 'Roboto',sans-serif;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
    margin-bottom: 0.8rem;
`

export const TextareaContent = styled.textarea`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 0.4rem; 
    border: none;
    min-height: 17.2rem;
    min-width: 100%;
    max-width: 100%;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    font-size: 1.6rem;
    line-height: 1.6rem;
    padding: 1.4rem;
    resize: none;

    &::placeholder{
        font: 400 1.6rem 'Roboto',sans-serif;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_900};
    }

    &.has-error{
        border: 1px solid ${({ theme }) => theme.COLORS.ERROR_COLOR};
    }

    &.has-error:focus-within{
        border: 1px solid ${({ theme }) => theme.COLORS.ERROR_COLOR};    
        > svg{
            color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
        }
    }

    &:focus{
        border: 1px solid ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
    }
`