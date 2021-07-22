import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

const styleSheet = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '200px 100px 100px',
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      padding: '100px 22px 50px',
    },
  },

  redirector: {
    fontFamily: 'Barlow',
    '&> span': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
});

class PageNotFound extends React.Component {
  gotoHomePage = () => {
    window.location.href = '/';
  };

  gotoPreviousPage = () => {
    window.history.back();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <h1>Page not found.</h1>
        <p>
          This page may be private. If someone gave you this link, they may need
          to invite you to one of their boards or teams.
        </p>
        <div className={classes.redirector}>
          Want to visit <span onClick={this.gotoHomePage}>home page</span>
          ?
          <br />
          Or go to <span onClick={this.gotoPreviousPage}>previous page</span>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styleSheet)(PageNotFound));
