import { FieldValues } from "react-hook-form";
import { Container, Input, Label } from "./styles";
import { UploadSimple, WarningCircle } from "@phosphor-icons/react";
import { InputHTMLAttributes } from "react";

interface FileInputProp extends InputHTMLAttributes<HTMLInputElement>{
    name: string,
    label: string,
    register?: FieldValues,
    error?: string,
}

export function FileInput({ name, label, error, register, ...rest }: FileInputProp) {
    return (
        <Container>
            <span>Imagem do prato</span>
            <div {...register} >
                <Input type="file" name={name} {...rest }/>
                <Label htmlFor="file-input" className={error ? 'has-error' : ''}>
                    <div>
                        <UploadSimple width={24} height={24} size={24}/><span>{label}</span>
                    </div>
                </Label>
            </div>
            {
                error ?
                    <span className="error"> <WarningCircle size={18} /> {error}</span>
                    : null
            }
        </Container>
    )
}