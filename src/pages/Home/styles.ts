import styled from 'styled-components';

export const Container = styled.main`
`;

export const Banner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-inline: 12.3rem ;
    margin-top: 16.4rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_400};
    height: 26rem;
    position: relative;

    > img{
        position: absolute;
        left: 0;
        bottom: -1.4rem;
    }

    > div{    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-right: 4.6rem;

        h2{
            font: 500 4rem "Poppins", sans-serif;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            line-height: 5.6rem;
        }

        p{
            font: 400 1.6rem "Poppins", sans-serif;
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_700};
            line-height: 2.2rem;
        }
    }
`;


export const FoodContent = styled.div`
    margin-inline: 12.3rem ;
    position: relative;
    cursor: grab;
    
    .keen-slider{
        margin-top: 3.9rem;
    }
`;


export const Content = styled.div`
    margin-inline: 12.3rem ;
    margin-bottom: 9.8rem;
    > h2{
        margin-top: 6.3rem;
        font: 500 3.2rem "Poppins", sans-serif;
        line-height: 4.4rem;
    }
`;