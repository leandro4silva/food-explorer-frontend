import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    Icon?: React.ElementType | null,
    loading?: boolean,
    light?: boolean
    
}

export function Button({Icon, text, loading = false, light, ...rest }:ButtonProps){
    return(
        <Container hasIcon={Icon ? true : false} light={light} {...rest}>
            {
                loading ? 
                    'Carregando...'
                :
                <>
                    {Icon && <Icon size={34} />}
                    { text }
                </>
            }
        </Container>
    );
}