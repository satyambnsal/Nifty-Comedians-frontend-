import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './home/Home';
import PageNotFound from './PageNotFound';
import Login from './auth/Login';
import MyComedy from './my/MyComedy';

export default function MainRoute() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/auth/login' component={Login} />
        <PrivateRoute exact authRequired path='/discover' component={Home} />
        <PrivateRoute
          exact
          authRequired
          path='/my-comedy'
          component={MyComedy}
        />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </div>
  );
}
