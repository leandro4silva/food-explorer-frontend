import { Export } from "@phosphor-icons/react";
import styled from "styled-components";

interface ContainerProps {
    isNew: boolean
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: #76797B;
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
`

export const Button = styled.button`
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
`