import styled from 'styled-components';

export const BarBoxContainer = styled.div`   
    box-sizing: border-box; 
    display: grid;   
    grid-gap: ${props => props.gap}px;
    grid-template-rows: 1fr auto;
    justify-items: center;  
    transition: all .5s;    

    & > div {
        align-self: end;           
        background: #ffffff;
        border: 2px solid #000000;
        border: 1px solid #ffffff;
        box-sizing: border-box;
        box-shadow: 0 0 3px #000000aa;
        color: #ffffff;
        color: #000000;
        display: grid; 
        font-size: calc(15px + 1vmin);
        font-weight: bold;    
        place-content: center;  
        transition: all .5s; 
        width: 100%;    
    } 
`;

export const Bar = styled.div` 
    // border-radius: 3px 3px 0 0; 
    height: ${props => props.height}%; 
`;


export const Value = styled.div`   
    // border-radius: 0 0 3px 3px;  
    height: 40px;
`;
