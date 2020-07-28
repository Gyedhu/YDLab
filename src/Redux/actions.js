import { INITIALIZE, SET_POINTER_WIDTH, SET_POINTER_LOCATION } from './constents';

export const initialize = ({
    type: INITIALIZE
});

export const setPointerLocation = payload => ({
    type: SET_POINTER_LOCATION,
    payload
});

export const setPointerWidth = payload => ({
    type: SET_POINTER_WIDTH,
    payload
})

