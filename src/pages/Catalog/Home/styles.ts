import styled from 'styled-components';

export const Container = styled.main`
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};
    height: 100vh;
    width: 100%;
`

export const Content = styled.div`
    padding-inline: 0rem;
    margin-top: 2.5rem;

    @media (min-width: 1024px) {
        padding-inline: 12.3rem;
    }
`

export const BannerContent = styled.div`
    margin-bottom: 4.8rem;
    padding-left: 2.4rem;
    padding-right: 1.6rem;

    @media (min-width: 1024px) {
        padding-inline: 0rem;
        margin-bottom: 6.2rem;
    }
`

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    margin-bottom: 2.4rem;

    @media (min-width: 1024px) {
        margin-bottom: 9.8rem;
    }
`