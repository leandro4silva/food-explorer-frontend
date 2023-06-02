import { InputHTMLAttributes } from "react"
import { Container, Input, Button, Span } from "./styles"
import { Plus, X } from '@phosphor-icons/react'


interface IngredientItemProp extends InputHTMLAttributes<HTMLInputElement>{
    isNew: boolean,
    name?: string,
    onClick: () => void,
}

export function IngredientsItem({ isNew, onClick, name, ...rest }: IngredientItemProp) {
    return (
        <Container isNew={isNew}>
            {
                isNew ?
                    <Input
                        type="text"
                        name="ingredient"
                        placeholder={isNew ? "Adicionar" : ''}
                        readOnly={!isNew}
                        {...rest}
                    />
                    :
                    <Span>
                        {name}
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