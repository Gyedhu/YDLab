import styled from 'styled-components';

export const MenuContainer = styled.div` 
    background: rgba(0, 0, 0, .75);  
    border-radius: 50px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: grid;    
    height: ${props => props.visible ? props.children.length * 80 : 0}px;   
    : ${props => props.visible ? props.children.length * 80 : 0}px;   
    position: absolute;
    right: 10px;
    top: 80px;  
    transition: all .5s;
    user-select: none; 
    width: 70px;
`;

export const MenuItem = styled.div`  
    background: none;
    cursor: pointer;
    display: grid;  
    font-size: 45px;    
    place-content: center;
    transition: all .2s; 
    width: 100%; 

    &:active { 
        tansition-delay: 0s; 
        transform: translateX(5px);
    }
`;
