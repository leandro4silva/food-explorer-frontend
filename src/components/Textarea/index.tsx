import { Container, Label, TextareaContent } from "./styles"

interface TextareaProps {
    label?: string
}

export function Textarea({ label }: TextareaProps){
    return(
        <Container>
            <Label>{label}</Label>
            <TextareaContent placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></TextareaContent>
        </Container>
    )
}