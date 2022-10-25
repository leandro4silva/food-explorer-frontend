import styled from 'styled-components';

export const Container = styled.button<{left: boolean, disable: boolean}>`
    width: 7rem;
    height: 50%;
    position: absolute;
    top: 42%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    cursor: pointer;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 250%);
    border: none;
   
    ${({left}) => left ? 'left: 0px;' : 'right: 0px;'}

    svg path{
        ${({disable}) => disable ? 'fill: rgba(255, 255, 255, 0.5);' : ''}
    }

`;