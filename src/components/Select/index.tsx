import { SelectHTMLAttributes } from 'react';
import { Container, Label, Trigger, Viewport, Separator, Value, Content } from "./styles";
import * as SelectContent from '@radix-ui/react-select';
import { CaretDown, Check } from '@phosphor-icons/react';


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string,
    placeholder: string,
    name: string,
    children?: React.ReactNode
}

interface OptionProps{
    value: string,
    content: string
}

export function Select({ label, children, name, placeholder, ...rest }: SelectProps) {
    return (
        <Container>
            <Label>{label}</Label>
            <SelectContent.Root name={name}>
                <Trigger>
                    <Value placeholder={placeholder} />

                    <SelectContent.Icon>
                        <CaretDown size={24} />
                    </SelectContent.Icon>

                </Trigger>
                <SelectContent.Portal>
                    <Content position='popper' sideOffset={2}>
                        <Viewport>
                            {
                                children
                            }
                        </Viewport>
                    </Content>
                </SelectContent.Portal>
            </SelectContent.Root>
        </Container>
    )
}

export function Option({content, value}: OptionProps) {
    return (
        <SelectContent.Item className="select-item" value={value}>
            <SelectContent.ItemText>{content}</SelectContent.ItemText>
        </SelectContent.Item>
    )
}