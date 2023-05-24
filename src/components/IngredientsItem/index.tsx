import { Container, Input, Button, Span } from "./styles"
import {Plus, X} from '@phosphor-icons/react'

interface IngredientsItemProp{
    isNew: boolean
}

export function IngredientsItem({isNew, ...rest}: IngredientsItemProp){
    return(
        <Container isNew={isNew}>
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
                        teste
                    </Span>
            }
            <Button 
                type="button"
                title={isNew ? "Adicionar" : "Remover"}
                isNew={isNew}
            >
                { isNew ? <Plus size={14}/> : <X size={14}/> }
            </Button>
        </Container>
    )
}