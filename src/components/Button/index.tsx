import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}

export function Button({ text, ...rest }:ButtonProps){
    return(
        <Container {...rest}>
            { text }
        </Container>
    );
}