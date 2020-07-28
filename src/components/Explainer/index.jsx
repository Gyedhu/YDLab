import React, { useState, useRef, useEffect } from 'react';
import { ExplainerContainer, Pointer, PointerContainer } from './style';

import { connect } from 'react-redux';
import BarBox from '../BarBox';
import { setPointerLocation, setPointerWidth } from '../../Redux/actions';
// import { ButtonBox, Button } from '../Plot/style';

const mapStateToProps = state => ({
    array: state.array,
    columns: state.columns,
    gap: state.gap,
    max: state.max,
    pointerX: state.pointerX,
    pointerY: state.pointerY
});

const mapStateToDispatch = dispatch => ({
    setPointerLocation: index => dispatch(setPointerLocation(index)),
    setPointerWidth: width => dispatch(setPointerWidth(width)),
    swapElements: indices => dispatch({ type: 'SWAP_ELEMENTS', payload: indices })
})

const Explainer = ({ array, columns, max, swapElements, gap, pointerX, pointerY, setPointerLocation, setPointerWidth }) => {
    const ref = useRef();

    const [pointer, setPointer] = useState(-1);
    const [limit, setLimit] = useState(array.length - 2);


    // const x = useCallback(
    //     () => {
    //         setPointerWidth(ref.current.offsetWidth);
    //     },
    //     [ref.current],
    // )

    useEffect(() => {
        setPointerWidth(ref.current.offsetWidth);
    }, [ref.current]);

    useEffect(() => {

        const interval = setInterval(() => {

            if (array[pointer] > array[pointer + 1])
                swapElements([pointer, pointer + 1]);

            if (pointer > limit) {
                setPointer(0);
                setLimit(limit => limit - 1);
            }
            else setPointer(pointer => pointer + 1);
            setTimeout(() => setPointerLocation(pointer + 1), 500);
        }, 1000);

        return () => clearInterval(interval);

    }, [array, swapElements, pointer, setPointerLocation, limit]);

    return (
        <ExplainerContainer
            columns={columns}
            gap={gap}
        >
            {
                array.map((value, index) =>
                    <BarBox
                        key={index}
                        value={value}
                        gap={gap}
                        max={max}
                    />)
            }
            <PointerContainer
                columns={columns}
                gap={gap}
                top={pointerY}
            >
                <Pointer className="material-icons" left={pointerX} ref={ref}>arrow_drop_down</Pointer>
            </PointerContainer>
        </ExplainerContainer >
    );
}

export default connect(mapStateToProps, mapStateToDispatch)(Explainer);
