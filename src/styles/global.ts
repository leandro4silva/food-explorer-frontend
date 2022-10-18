import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    body{
        font-size: 1.6rem;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        -webkit-font-smoothing: antialiased;
    }
`;