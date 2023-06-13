import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;


    > span{
        font: 400 1.6rem 'Roboto',sans-serif;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
        margin-bottom: 0.8rem;
    }

    > div{
        position: relative;
        margin-bottom: 0.2rem;
    }

    > span.error {
        color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font: 400 1.4rem 'Roboto',sans-serif;
    }

`


export const Input = styled.input`
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: 0.1rem;
    border: 1px solid red;
    overflow: hidden;
    position: absolute;
    z-index: 1;
    cursor: pointer;
`


export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    border-radius: 0.4rem;
    font: 500 1.4rem 'Poppins', sans-serif;
    line-height: 2.4rem;
    height: 5.1rem;
    padding-inline: 2rem;
    padding-block: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

    &.has-error{
        border: 1px solid ${({ theme }) => theme.COLORS.ERROR_COLOR};
    }

    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        width: 210px;

        svg{
            width: 24px;
            height: 24px;
        }

        span{
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }


`