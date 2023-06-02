import { Export } from "@phosphor-icons/react";
import styled from "styled-components";

interface IngredientsProps {
    isNew: boolean
}

export const Container = styled.div<IngredientsProps>`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: ${({isNew}) => isNew ? 'transparent' : '#76797B'};
    border: ${({isNew, theme}) => isNew ? `1px dashed ${theme.COLORS.TEXT_GRAY_900}` : 'none' };
    padding-inline: 1.6rem;
    padding-block: 0.8rem;
    border-radius: 0.8rem;
    overflow: hidden;
`

export const Span = styled.span`
    text-transform: capitalize;
`

export const Input = styled.input`
    font: 400 1.6rem 'Roboto',sans-serif;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    background-color: transparent;
    border: none;
    width: 8rem;


    &::placeholder{
        color: ${({theme}) => theme.COLORS.TEXT_GRAY_900};
    }
`

export const Button = styled.button<IngredientsProps>`
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.TEXT_GRAY_900 : theme.COLORS.TEXT_WHITE};
`