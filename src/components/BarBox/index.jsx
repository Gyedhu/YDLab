import React from 'react';
import { BarBoxContainer, Value, Bar } from './style';


const BarBox = ({ value, max, gap }) => {
    return (
        <BarBoxContainer gap={gap}>
            <Bar height={(value * 100) / max} />
            <Value>{value}</Value>
        </BarBoxContainer >
    );
}

export default BarBox;
