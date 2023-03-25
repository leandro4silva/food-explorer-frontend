import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 12.3rem;
    padding-block: 4.7rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};

    > div.logo{
        display: flex;
        align-self: center;
        gap: 1.1rem;

        > img{
            width: 3rem;
            height: 3rem;
            
            > svg path{
                fill: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
            }
        }

        > h2{
            font: 700 2.5rem 'Roboto',sans-serif;
            line-height: 2.9rem;
            color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
        }
    }

    > div.copyright h4{
        font: 400 1.4rem 'DM Sans', sans-serif;
        line-height: 1.8rem;
        color: '#FFFAF1';
    }
`