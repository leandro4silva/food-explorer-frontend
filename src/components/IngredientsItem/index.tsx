import { InputHTMLAttributes } from "react"
import { Container, Input, Button, Span } from "./styles"
import { Plus, X } from '@phosphor-icons/react'
import { FieldValues } from "react-hook-form"


interface IngredientItemProp extends InputHTMLAttributes<HTMLInputElement>{
    isNew: boolean,
    text?: string,
    register?: FieldValues,
    onClick: () => void,
}

export function IngredientsItem({ isNew, onClick, text, register, ...rest }: IngredientItemProp) {
    return (
        <Container isNew={isNew} {...register}>
            {
                isNew ?
                    <Input
                        type="text"
                        placeholder={isNew ? "Adicionar" : ''}
                        readOnly={!isNew}
                        {...rest}
                    />
                    :
                    <Span>
                        {text}
                    </Span>
            }
            <Button
                type="button"
                title={isNew ? "Adicionar" : "Remover"}
                onClick={onClick}
                isNew={isNew}
            >
                {isNew ? <Plus size={14} /> : <X size={14} />}
            </Button>
        </Container>
    )
}