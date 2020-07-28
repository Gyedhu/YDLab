import styled from 'styled-components';


export const ExplainerContainer = styled.div`  
    // background: #000000;    
    box-sizing: border-box;  
    display: grid;
    color: #ffffff;
    grid-gap: ${props => props.gap}px;  
    grid-template-columns: repeat(${props => props.columns}, 1fr); 
    height: 300px;    
    position: relative;
    transition: all 0.3s; 
    width: 500px
`;

export const PointerContainer = styled.div`
    // border: 1px dashed white;
    box-sizing: border-box;
    color: white;
    display: grid;
    grid-gap: ${props => props.gap}px;  
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    heigth: 30px;
    position: absolute; 
    top: ${props => props.top}px;
    transform: translateY(-100%); 
    transition: all .3s;
    width: 100%;
`;

export const Pointer = styled.i`
    color: #ffffff;
    font-size: 20px;
    height: fit-content;    
    left: ${props => props.left}px;
    position: relative;
    text-align: center; 
    text-shadow: 0 0 2px #00000;
    transition: all .3s;
    transform: scale(1, 3); 
    width: 100%;
`;
