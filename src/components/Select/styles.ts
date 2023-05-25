import styled from "styled-components";
import * as SelectContent from '@radix-ui/react-select';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
`

export const Label = styled.label`
    font: 400 1.6rem 'Roboto',sans-serif;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
`

export const Trigger = styled(SelectContent.Trigger)`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
    padding-inline: 1.6rem;
    border-radius: 0.4rem;
    width: 100%;
    height: 5.1rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Value = styled(SelectContent.Value)`
`

export const Viewport = styled(SelectContent.Viewport)`
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    width: 100%;
    border: 1px solid violet;
`

export const Item = styled(SelectContent.Item)`
    cursor: pointer;
    height: 5.1rem;
    padding-inline: 1.6rem;
    padding-block: 1.3rem;
   
    &:hover{
        background-color: red;
    }
`

export const Separator = styled(SelectContent.Separator)`
    height: 2px;
    background-color: red;
`