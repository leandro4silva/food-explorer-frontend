import { InputHTMLAttributes } from "react"
import { Container } from "./styles"
import { IconType } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    Icon?: IconType
}

export function Input({ Icon, label, ...rest } : InputProps) {
    return (
        <Container>
             <div>
                { Icon && <Icon size={24}/> }
                <input type="text" {...rest}/>
            </div>
        </Container>
    )
}