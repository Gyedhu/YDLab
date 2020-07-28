import styled from 'styled-components';

export const MenuContainer = styled.div`    
    align-items: center;  
    box-sizing: border-box;    
    color: white;    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 300px;
    left: 50%;
    overflow: hidden; 
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all .25s ease;
    top: 50%; 
    width: ${props => props.visible ? 500 : 0}px;

    & > * {
        opacity: ${props => !props.visible && .5};
    }

    @media (max-width: 650px) { 
        transform: translate(-50%, -50%) rotate(90deg);   
    }
`;

export const MenuIcon = styled.div`     
    background: rgba(0, 0, 0, .9);
    border: 2px solid white; 
    cursor: pointer; 
    font-size: ${props => props.size === 'large' ? '100px' : props.size === 'medium' ? '70px' : '20px'}; 
    font-weight: bold;
    justify-self: center; 
    overflow: visible;
    padding: 30px;
    text-align: center; 
    transition: all .3s;
    user-select: none; 
 

    &: active {
        color: rgb(0, 0, 0);    
    }  
`;

export const MenuBox = styled.div` 
    align-items: center; 
    display: grid;
    grid-template-rows: repeat(${props => props.children.length}, 1fr);
    height: 100%;   
    opacity: ${props => props.visible ? 1 : 0}; 
    position: absolute;
    right: 0;
    transform: translate(${props => props.visible ? props.level * -165 : 155}px);
    transition: all .3s;
    width: 150px;

    @media (max-width: 650px) { 
        & > * {
             transform: rotate(-90deg);  
        }
    }
`;

export const CloseButton = styled.button`
    align-items: center;
    background: black;
    border: 3px solid white; 
    display: flex;
    color: white;  
    font-size: 30px;
    font-weight: bold;
    height: 50px;  
    justify-content: center;
    position: absolute;
    top: 0;
    width: 50px;

    &:active {
        color: black;
    }

    @media (max-width: 650px) {   
             transform: rotate(-90deg);   
    }
`;
