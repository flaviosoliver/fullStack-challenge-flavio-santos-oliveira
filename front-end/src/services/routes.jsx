import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Login, Home } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
  </Switch>
);

export default Routes;
