import styled from 'styled-components';

export const PointerContainer = styled.div` 
    display: grid;
    grid-gap: ${props => props.gap}px;
    grid-template-columns: repeat(${props => props.columns}, 1fr); 
    height: 50px;
    width: 100%;
`;

export const PointerIcon = styled.div`
    color: #FFFFFF; 
    display: grid;
    font-size: 16px;
    place-content: center;
    transform: scaleY(4);
`;
