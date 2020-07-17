import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landingpage } from './components/index';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Landingpage} />
    </Switch>
);

export default Routes;
