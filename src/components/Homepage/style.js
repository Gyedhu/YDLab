import styled from 'styled-components';

export const HomepageContainer = styled.div`   
    background: #000000;
    box-sizing: border-box; 
    display: grid;
    grid-template-rows: 80px 1fr;
    height: 100vh;   
    overflow: hidden;
    width: 100%;

    &  *{
        box-sizing: border-box; 
        outline: 0;
        overflow: hidden; 
    }
`;

export const HeaderContainer = styled.div`  
    box-shadow: 0 3px 10px rgba(0, 0, 0, .3);
    display: grid;  
    grid-template-columns: 1fr 2fr 1fr;  

    @media (max-width: 590px) {
        grid-template-columns: 80px 1fr;
    }
`;

export const LogoBox = styled.div`
    align-items: center; 
    cursor: pointer;
    display: flex;  
    padding: 0 0 0 20px; 
    user-select: none;  
`;

export const Logo = styled.img` 
    height: 40px; 
    width: 40px; 
`;

export const LogoText = styled.p` 
    color: #FFFFFF;
    font-family: Fondamento;
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px;
    
    @media (max-width: 590px) {
        display: none;
    }
`;

export const SearchBox = styled.div`
    align-self: center;
    background: white;   
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    display: grid;
    grid-template-columns: 1fr 50px;
    height: 50px;
    margin-right: 15px;

    & > *{
        transition: all 0.5s;
    }

    & > input {
        border: 0;
        font-size: 20px; 
        min-width: 10px;
        padding: 0 20px;  
    }

    & > input:focus { 
        box-shadow: inset 0 0 20px rgba(0, 0, 0, .5);   
    }
    
    & > button {
        align-self: center;
        background: white;
        border-color: #252525;
        border-width: 0 0 0 2px;
        cursor: pointer;
        font-size: 25px;
        padding: 5px; 

        &:active {
            transform: translateX(20px);
        }
    }  

    @media (max-width: 599px) {
        display: none;
    }
`;

export const MenuIcon = styled.i`
    align-self: center;
    color: #FFFFFF; 
    cursor: pointer;
    font-size: 50px;
    justify-self: end;
    padding-right: 20px;
    text-shadow: 0 0 3px black;
    transition: all 0.3s;
    user-select: none;
    z-index: 1;

    &:active {
        transform: translateX(5px);
    }
`;

export const TextBox = styled.div` 
    color: #FFFFFF;   
    font-family: Expletus Sans; 
    font-weight: bold;
    display: flex; 
    flex-direction: column; 
    justify-content: center;  
    padding-left: 100px;   
`;

export const Text = styled.p`    
    font-size: ${ props => props.size === 'large' ? '70px' : '20px'};
    margin: 0;

    @media (max-width: 599px) {
        margin-left: -80px;
        font-size: ${ props => props.size === 'large' ? '40px' : '15px'};
    }
`;
