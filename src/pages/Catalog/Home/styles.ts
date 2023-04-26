import styled from 'styled-components';

export const Container = styled.main`
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
`


export const Content = styled.div`
    padding-inline: 12.3rem;
    margin-top: 2.5rem;
`

export const BannerContent = styled.div`
    margin-bottom: 6.2rem;
`

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    margin-bottom: 9.8rem;
`