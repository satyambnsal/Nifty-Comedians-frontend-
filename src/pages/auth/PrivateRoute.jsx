import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import Header from './../../components/header/Header';
import Footer from './../../components/footer/Footer';
import Background from './../home/Background';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
  },

  header: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1200,
  },

  contentWrapper: {
    overflowX: 'hidden',
    position: 'relative',
    minHeight: '100vh',
  },

  content: {
    minHeight: 'calc(100vh - 278px)',
  },

  footer: {
    width: '100%',
  },
}));

export default function PrivateRoute({ authRequired, singlePage, ...props }) {
  const classes = useStyles();

  if (authRequired && !window.walletConnection.isSignedIn()) {
    return <Redirect to='/auth/login' />;
  }

  if (singlePage) {
    return <Route {...props} />;
  }

  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(...routeProps) => (
        <div className={classes.root}>
          <div className={classes.header}>
            <Header />
          </div>
          <div className={classes.contentWrapper}>
            <Background />

            <div className={classes.content}>
              <Component {...routeProps} />
            </div>

            <div className={classes.footer}>
              <Footer />
            </div>
          </div>
        </div>
      )}
    />
  );
}
