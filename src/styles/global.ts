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
        background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
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

    .select-item{
        cursor: pointer;
        height: 5.1rem;
        padding-inline: 1.6rem;
        padding-block: 1.3rem;
        outline: none;
        border: none;
        border-radius: 0.4rem;
        display: flex;
        align-items: center;
        font-size: 400 1.6rem 'Poppins',sans-serif;
        
        &:hover{
            border: 1px solid ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }

    /* SCROLL BAR */

    /* width */
::-webkit-scrollbar {
  width: 10px;
}

.Toastify__toast-container--top-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLORS.BACKGROUND_500};
  border-radius: 0.4rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  filter: brightness(1.1);
}
`