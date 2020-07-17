import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/index';

const Routes = () => (
    <Switch>
        <Route path='/'>
            <LandingPage />
        </Route>

    </Switch>
);

export default Routes;
