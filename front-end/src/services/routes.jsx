import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Main, Login, Register, HomePrincipal, HomeTeacher, SchoolsPrincipal,
} from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/home/diretoria" component={HomePrincipal} />
    <Route exact path="/home/docente" component={HomeTeacher} />
    <Route exact path="/home/diretoria/escolas" component={SchoolsPrincipal} />
  </Switch>
);

export default Routes;
