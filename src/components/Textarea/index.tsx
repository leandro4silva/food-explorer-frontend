import { TextareaHTMLAttributes } from "react"
import { Container, Label, TextareaContent } from "./styles"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label?: string
}

export function Textarea({ label, ...rest }: TextareaProps){
    return(
        <Container>
            <Label>{label}</Label>
            <TextareaContent {...rest}></TextareaContent>
        </Container>
    )
}