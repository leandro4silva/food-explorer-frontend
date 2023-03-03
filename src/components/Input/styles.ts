import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: left;

    > label{
        font: 400 1.6rem 'Roboto',sans-serif;
        line-height: 1.6rem;
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_800};
    }

    > input{
        background: transparent;
        border: 1px solid #FFFFFF;
        border-radius: 0.8rem;
        padding: 1.6rem 1.4rem;
        color: #FFFFFF;
        font-size: 1.6rem;
        line-height: 1.6rem;

        &::placeholder{
            font: 400 1.6rem 'Roboto',sans-serif;
            line-height: 1.6rem;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_900};
        }
    }
`