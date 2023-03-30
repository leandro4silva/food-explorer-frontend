import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: left;
    width: 100%;

    > label{
        font: 400 1.6rem 'Roboto',sans-serif;
        line-height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
    }

    > div.input-group{
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        > div{
            width: 100%;
            display: flex;
            align-items: center;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
            border: none;
            border-radius: 0.4rem;    
                
        
            > input{
                width: 100%;
                background: transparent;
                border: none;
                border-radius: 0.8rem;
                padding: 1.6rem 1.4rem;
                color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
                font-size: 1.6rem;
                line-height: 1.6rem;
            
                &::placeholder{
                    font: 400 1.6rem 'Roboto',sans-serif;
                    line-height: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_900};
                }
            }
        
            > svg{
                margin-left: 1.6rem;
                color: ${({ theme }) => theme.COLORS.TEXT_GRAY_900};
            }
        }
        
            > div:focus-within{
                border: 1px solid ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
        
                > svg{
                    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
                }
            }
        
            > div.has-error{
                border: 1px solid ${({ theme }) => theme.COLORS.ERROR_COLOR};
            }
        
            > div.has-error:focus-within{
                border: 1px solid ${({ theme }) => theme.COLORS.ERROR_COLOR};
        
                > svg{
                    color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
                }
        
            }

            > span {
                color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
                display: flex;
                align-items: center;
                gap: 0.2rem;
                font: 400 1.4rem 'Roboto',sans-serif;
            }
    }


`