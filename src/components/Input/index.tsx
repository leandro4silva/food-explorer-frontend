import { InputHTMLAttributes } from "react"
import { Container } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
}

export function Input({label, ...rest} : InputProps) {
    return (
        <Container>
            <label htmlFor="name">{label}</label>
            <input type="text" {...rest}/>
        </Container>
    )
}