import { Container, Label, Trigger, Viewport, Separator, Value, Content } from "./styles";
import * as SelectContent from '@radix-ui/react-select';
import { CaretDown, Check, WarningCircle } from '@phosphor-icons/react';
import { FieldValues } from 'react-hook-form';


interface SelectProps extends SelectContent.SelectProps{
    label?: string,
    placeholder: string,
    name: string,
    register?: FieldValues,
    error?: string,
    children?: React.ReactNode,
}

interface OptionProps{
    value: string,
    content: string
}


export function Select({ label, children, name, placeholder, error, register, ...rest }: SelectProps) {

    return (
        <Container {...register}>
            <Label>{label}</Label>
            <SelectContent.Root name={name} {...rest}>
                <Trigger className={error ? 'has-error' : ''}>
                    <Value placeholder={placeholder}>
                    </Value>

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
            {
                error ?
                    <span className="error"> <WarningCircle size={18} /> {error}</span>
                    : null
            }
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