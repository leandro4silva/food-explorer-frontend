import { Container, Input, Label } from "./styles";
import { UploadSimple } from "@phosphor-icons/react";

export function FileInput(){
    return(
        <Container> 
            <span>Imagem do prato</span>
            <div>
                <Input type="file" name="file-input"/>
                <Label htmlFor="file-input"><UploadSimple size={24}/> Selecione imagem</Label>
            </div>
        </Container>
    )    
}