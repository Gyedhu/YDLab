import React, { useEffect } from 'react';
import { PlotContainer } from './style';

import Explainer from '../Explainer/index';
import { initialize } from '../../Redux/actions';
import { connect } from 'react-redux';

const mapStateToState = state => ({
    explainerWidth: state.explainerWidth
});

const mapStateToDispatch = dispatch => ({
    initialize: () => dispatch(initialize)
})


const Plot = ({ initialize }) => {
    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <PlotContainer>
            <Explainer />
        </PlotContainer >
    );
}
export default connect(mapStateToState, mapStateToDispatch)(Plot);
