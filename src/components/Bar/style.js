import styled from 'styled-components';

export const PlotContainer = styled.div` 
    align-items: center;
    background: #000000;   
    box-sizing: border-box;
    display: flex;
    height: 100vh; 
    justify-content: center; 
    padding: 10px;   
`;



//Temp 

export const ButtonBox = styled.div` 
    left: ${props => props.left}px;
    position: absolute;
    top: ${props => props.top}px;
`;

export const Button = styled.button`
    background: #000000;
    border: 3px solid #FFFFFF;
    color: #FFFFFF;
    font-size: 20px; 
    outline: none;

    &:active {
        background: #FFFFFF;
    }
`;
