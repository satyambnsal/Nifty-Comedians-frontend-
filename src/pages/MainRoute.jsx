import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './home/Home';
import PageNotFound from './PageNotFound';
import Login from './auth/Login';

export default function MainRoute() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/auth/login' component={Login} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </div>
  );
}
