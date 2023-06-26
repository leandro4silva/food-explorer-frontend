import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    margin-top: auto;
    justify-content: space-between;
    padding-inline: 2.4rem;
    padding-block: 3rem;
    
    @media (min-width: 1024px) {
        padding-inline: 12.3rem;
        padding-block: 4.7rem;
    }

    > div.logo{
        display: flex;
        align-items: center;
        gap: 0.6rem;

        > img{
            width: 2.2rem;
            height: 1.6rem;
            
            
            > svg path{
                fill: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
            }
        }
        
        > h2{
            font: 700 1.6rem 'Roboto',sans-serif;
            line-height: 2rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        }


        @media (min-width: 1024px) {
            display: flex;
            align-items: center;
            gap: 1.1rem;

            > img{
                width: 3rem;
                height: 3rem;
                
                
                > svg path{
                    fill: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
                }
            }
            
            > h2{
                font: 700 2.5rem 'Roboto',sans-serif;
                line-height: 2.9rem;
                color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
            }
        }
    }

    > div.copyright h4{
        font: 400 1.2rem 'DM Sans', sans-serif;
        line-height: 1rem;
        color: '#FFFAF1';


        @media (min-width: 1024px) {
            font: 400 1.4rem 'DM Sans', sans-serif;
            line-height: 1.8rem;
        }
    }
    `