import React from 'react';
import { MenuContainer, MenuItem } from './style';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
    menuVisibility: state.menuVisibility
})

const Menu2 = ({ menuVisibility }) => (
    <MenuContainer visible={menuVisibility}>
        <MenuItem className='material-icons'>settings</MenuItem>
        <MenuItem className='material-icons'>category</MenuItem>
    </MenuContainer>
);

export default connect(mapStateToProps)(Menu2); 
