import styled from 'styled-components';

export const Container = styled.header`
    padding: 2.8rem 12.3rem ;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    nav{
        width: 100%;
        display: flex;
        align-items: center;
        
        ul{
            width: 100%;
            display: flex;
            align-items: center;
            gap: 3.2rem;

            >li{
                flex-grow: 2;
            }

            >li:nth-child(1){
                flex-grow: 0;
            }

            >li:nth-child(2){
                flex-grow: 1;
                text-align: center;
            }

            >li:nth-child(3){
                flex-grow: 7;
            }

            >li:nth-child(4){
                flex-grow: 2;
            }

            >li:nth-child(5){
                flex-grow: 0;
                display: flex;
                justify-content: flex-end;
            }
        }        
    }
`;

export const Favorites = styled.button`
    background-color: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
`;

export const Inventory = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1.6rem 3.3rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_RED_800};
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    border: none;
    border-radius: 0.5rem;
`;


export const SignOut = styled.button`
    background: transparent;
    border: none;
`;