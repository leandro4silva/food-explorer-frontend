import { Container, Input, Label } from "./styles";
import { UploadSimple } from "@phosphor-icons/react";

interface FileInputProp{
    name: string,
    label: string,
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export function FileInput({name, label, onChange}: FileInputProp){
    return(
        <Container> 
            <span>Imagem do prato</span>
            <div>
                <Input type="file" name={name} onChange={onChange}/>
                <Label htmlFor="file-input"><UploadSimple size={24}/>
                    <span>{ label }</span>
                </Label>
            </div>
        </Container>
    )    
}