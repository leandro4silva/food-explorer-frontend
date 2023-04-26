import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    Icon?: React.ElementType,
    loading?: boolean
}

export function Button({Icon, text, loading = false, ...rest }:ButtonProps){
    return(
        <Container hasIcon={Icon ? true : false}>
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