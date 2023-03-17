import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        outline: none;
    }

    a, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2;
    }

    button:hover,
    a:hover{
        filter: brightness(0.9);
    }
`