import React, { InputHTMLAttributes, MutableRefObject, useRef } from "react"
import { Container } from "./styles"
import { IconType } from 'react-icons'
import { FieldValues } from "react-hook-form";
import { WarningCircle } from "@phosphor-icons/react"
import { IMaskInput } from 'react-imask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    Icon?: IconType,
    register?: FieldValues,
    error?: string,
    mask?: object,
    placeholder: string,
    name: string
}

export function Input({ Icon, label, name, placeholder, register, mask, error, ...rest }: InputProps) {
    const ref = useRef(null);
    const inputRef = useRef(null);

    return (
        <Container>
            <label>{label}</label>
            <div className="input-group" {...register}>
                <div className={error ? 'has-error' : ''}>
                    {Icon && <Icon size={24} />}
                    {
                        mask ? 
                            <IMaskInput
                                name={name}
                                placeholder={placeholder}
                                {...mask}
                                
                            />
                        :
                            <input type="text" name={name} placeholder={placeholder} {...rest} />
                    }
                </div>
                {
                    error ?
                        <span> <WarningCircle size={18} /> {error}</span>
                        : null
                }
            </div>
        </Container>
    )
}