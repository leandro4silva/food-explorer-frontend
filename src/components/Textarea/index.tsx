import { TextareaHTMLAttributes } from "react"
import { Container, Label, TextareaContent } from "./styles"
import { FieldValues } from "react-hook-form"
import { WarningCircle } from "@phosphor-icons/react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string,
    register?: FieldValues,
    error?: string
}

export function Textarea({ label, error, register, ...rest }: TextareaProps) {
    return (
        <Container {...register}>
            <Label>{label}</Label>
            <TextareaContent className={error ? 'has-error' : ''} {...rest}></TextareaContent>
            {
                error ?
                    <span> <WarningCircle size={18} /> {error}</span>
                    : null
            }
        </Container>
    )
}