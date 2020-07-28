import { INITIALIZE, SET_POINTER_LOCATION, SET_POINTER_WIDTH } from './constents';
import { getLocation } from '../utils/getLocation';

const initialState = {
    array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    columns: 0,
    gap: 0,
    max: 0,
    pointerX: 0,
    pointerY: 0,
    pointerWidth: 0
};

export const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case INITIALIZE:

            const [intialX, initialY] = getLocation(state.array, 0, state.pointerWidth, state.gap);

            return {
                ...state,
                columns: state.array.length,
                gap: 2,
                max: Math.max(...state.array),
                pointerX: intialX,
                pointerY: initialY
            };

        case SET_POINTER_LOCATION:

            const { array, pointerWidth, gap } = state;
            const { payload } = action;
            const [x, y] = getLocation(array, payload, pointerWidth, gap);

            return {
                ...state,
                pointerX: x,
                pointerY: y
            };

        case SET_POINTER_WIDTH:
            return {
                ...state,
                pointerWidth: action.payload
            }

        case 'SWAP_ELEMENTS':
            let swappedArray = state.array.slice();
            [swappedArray[action.payload[0]], swappedArray[action.payload[1]]] = [swappedArray[action.payload[1]], swappedArray[action.payload[0]]]
            return {
                ...state,
                array: swappedArray
            };

        default:
            return state;
    }
}
