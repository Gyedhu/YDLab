import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, Homepage, Plot } from './components/index';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/homepage' component={Homepage} />
        <Route path='/plot' component={Plot} />
    </Switch>
);

export default Routes;
