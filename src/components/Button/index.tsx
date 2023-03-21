import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    Icon?: React.ElementType,
}

export function Button({Icon, text, ...rest }:ButtonProps){
    return(
        <Container hasIcon={Icon ? true : false}>
            {Icon && <Icon size={34} />}
            { text }
        </Container>
    );
}