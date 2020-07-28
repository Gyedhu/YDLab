import React from 'react';
import { MenuContainer, MenuIcon, MenuBox, CloseButton } from './style';


const Menu = ({ menuVisibility, closeMenu, settingsVisibility, themeVisibility, toggleSettings, toggleTheme, changeTheme }) => {
    return (
        <>
            <MenuContainer>
                <CloseButton>X</CloseButton>
                <MenuIcon
                    size='large'
                >settings</MenuIcon>

                <MenuIcon
                    className="material-icons"
                    size='large'
                >dashboard</MenuIcon>

                <MenuBox>
                    <MenuIcon
                        className="material-icons"
                        size='medium'
                    >brightness_5</MenuIcon>

                    <MenuIcon
                        className="material-icons"
                        size='medium'
                    >brightness_6</MenuIcon>
                </MenuBox>

                <MenuBox>
                    <MenuIcon className="material-icons" size='medium'>palette</MenuIcon>
                </MenuBox>
            </MenuContainer>

            <MenuContainer >
                <MenuIcon size='small'>Sorting Algorithms</MenuIcon>
                <MenuIcon size='small'>Data Structures</MenuIcon>
            </MenuContainer>
        </>
    );
}

export default Menu; 
