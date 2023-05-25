import { SelectHTMLAttributes } from 'react';
import { Container, Label, Trigger, Viewport, Item, Separator, Value } from "./styles";
import * as SelectContent from '@radix-ui/react-select';
import { CaretDown } from '@phosphor-icons/react';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string,
    children?: React.ReactNode
}

export function Select({ label, children, ...rest }: SelectProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <SelectContent.Root name='game'>
                <Trigger>
                    <Value placeholder='Selecione a categoria do prato' />

                    <SelectContent.Icon>
                        <CaretDown size={24} />
                    </SelectContent.Icon>

                </Trigger>
                <SelectContent.Portal>

                    <SelectContent.Content>
                        <Viewport className='bg-zinc-900 py-3 px-4 text-white rounded '>

                            <Item value="teste">
                                <SelectContent.ItemText>teste</SelectContent.ItemText>
                                <SelectContent.ItemIndicator />
                            </Item>

                            <Separator />

                            <Item value="teste1" className='cursor-pointer'>
                                <SelectContent.ItemText>teste1</SelectContent.ItemText>
                                <SelectContent.ItemIndicator />
                            </Item>


                        </Viewport>
                    </SelectContent.Content>
                </SelectContent.Portal>
            </SelectContent.Root>
        </Container>
    )
}