import styled from 'styled-components';

export const CommentContainer = styled.div`     
    background: #000000;   
    border: 2px solid #FFFFFF;
    bottom: 20px;
    box-sizing: border-box;
    height: 50px;  
    padding: 5px; 
    position: absolute;
    transition: all 0.3s; 
    width: 500px;  

    @media (max-width: 500px ) {
        width: 90%;
    }
`; 