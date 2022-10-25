import styled from 'styled-components';

export const Container = styled.div`
    max-width: 30rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    > div:first-child{
        display: flex;
        justify-content: flex-end;
        padding-inline: 1.6rem;
        padding-top: 1.6rem;

        button{
            border: none;
            background: transparent;
        }
    }

    > div:nth-child(2){
        margin-top: 0.8rem;
        padding: 0 4rem 4rem 4rem;

        img{
            display: block;
            margin-inline: auto;
        }

        > h4{
            margin-top: 1.6rem;
            font: 700 2.2rem "Poppins", sans-serif;
            line-height: 3.3rem;
            text-align: center;
        }

        > p{
            font: 400 1.4rem "Roboto", sans-serif; 
            color: ${({theme}) => theme.COLORS.TEXT_GRAY_800};
            line-height: 2.2rem;
            text-align: center;
            margin-top: 1.6rem;
        }

        > h3{
            text-align: center;
            font: 400 3.2rem "Roboto", sans-serif;
            line-height: 5.1rem;
            margin-block: 1.6rem;
            color: ${({theme}) => theme.COLORS.TEXT_BLUE};
        }

        div{
            width: 100%;
            display: flex;
            align-items: center;
         
    
            > div:first-child{
                display: flex;
                align-items: center;
                height: 4.8rem;
                font: 700 2rem "Roboto", sans-serif;
                
                > button{
                    font: 700 2rem "Roboto", sans-serif;
                    background: transparent;
                    border: none;
                    width: 100%;
                    height: 100%;
                }
            }

            > div:last-child{
                height: 4.8rem;

                button{      
                    width: 100%;
                    height: 100%;
                    border: none;
                    border-radius: 0.5rem;
                    font: 500 1.4rem "Poppins", sans-serif;
                    color: ${({theme}) => theme.COLORS.TEXT_WHITE};
                    line-height: 2.4rem;
                    background-color: ${({theme}) => theme.COLORS.BACKGROUND_RED_900};
                }
            }


        }
    }
`;