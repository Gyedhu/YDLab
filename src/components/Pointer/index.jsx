import React from 'react';
import { PointerContainer, PointerIcon } from './style';

const Pointer = ({columns, gap}) => { 
    return (
        <PointerContainer columns={columns} gap={gap}>
        <PointerIcon className="material-icons">arrow_drop_down</PointerIcon>
        </PointerContainer>
    );
}

export default Pointer; 
