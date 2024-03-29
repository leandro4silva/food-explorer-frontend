import styled from "styled-components";
import * as SelectContent from '@radix-ui/react-select';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;

    > span.error {
        color: ${({ theme }) => theme.COLORS.ERROR_COLOR};
        display: flex;
        align-items: center;
        gap: 0.2rem;
        font: 400 1.4rem 'Roboto',sans-serif;
        margin-top: 0.2rem;
    }

    
`

export const Label = styled.label`
    font: 400 1.6rem 'Roboto',sans-serif;
    line-height: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_GRAY_800};
    margin-bottom: 0.8rem;
`

export const Trigger = styled(SelectContent.Trigger)`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border: none;
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    padding-inline: 1.6rem;
    border-radius: 0.4rem;
    width: 100%;
    height: 5.1rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &[data-placeholder]{
        color: ${({ theme }) => theme.COLORS.TEXT_GRAY_900};;
    }

    &.has-error{
        border: 1px solid ${({ theme }) => theme.COLORS.ERROR_COLOR};
    }
`
export const Value = styled(SelectContent.Value)`
`

export const Content = styled(SelectContent.Content)`
    width: var(--radix-select-trigger-width);
`

export const Viewport = styled(SelectContent.Viewport)`
    color: ${({ theme }) => theme.COLORS.TEXT_WHITE};
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border: 2.5px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    width: 100%;
    overflow: hidden;
`


export const Separator = styled(SelectContent.Separator)`
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS.TEXT_GRAY_700};
`