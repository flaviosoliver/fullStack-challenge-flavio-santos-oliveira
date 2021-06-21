import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Login } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Main } />
    <Route exact path="/login" component={ Login } />
  </Switch>
);

export default Routes;
