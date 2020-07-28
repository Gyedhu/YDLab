import React from 'react';
import LogoSvg from '../../assets/images/Logo.svg';

import {
    HomepageContainer, HeaderContainer,
    LogoBox, Logo, LogoText, SearchBox, TextBox, Text
} from './style'; 

const HomePage = () => {
    return (
        <HomepageContainer>
            <HeaderContainer>
                <LogoBox>
                    <Logo src={LogoSvg}></Logo>
                    <LogoText>YDLab</LogoText>
                </LogoBox>

                <SearchBox>
                    <input type='text' placeholder='Ex: Quick Sort' />
                    <button className='material-icons'>search</button>
                </SearchBox>
            </HeaderContainer>

            <TextBox>
                <Text size='large'>Find The Best</Text>
                <Text size='large'> Visualized Explanations</Text>
                <Text size='small'>You are the creator of your own destiny.</Text>
            </TextBox>
        </HomepageContainer >
    );
}

export default HomePage;
