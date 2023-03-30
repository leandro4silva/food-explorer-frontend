import { InputHTMLAttributes } from "react"
import { Container } from "./styles"
import { IconType } from 'react-icons'
import { FieldValues } from "react-hook-form";
import { WarningCircle } from "@phosphor-icons/react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    Icon?: IconType,
    register?: FieldValues,
    error?: string
}

export function Input({ Icon, label, register, error, ...rest }: InputProps) {
    return (
        <Container>
            <label>{label}</label>
            <div className="input-group">
                <div className={error ? 'has-error' : ''}>
                    {Icon && <Icon size={24} />}
                    <input type="text" {...register} {...rest} />
                </div>
                {
                    error ? 
                        <span> <WarningCircle size={18} /> {error}</span> 
                    : null 
                }
            </div>
        </Container>
    )
}