import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import MainRoute from './pages/MainRoute';

import './common/styles/global.css';
import 'react-multi-carousel/lib/styles.css';

import theme from './common/theme';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <MainRoute />
      </Router>
    </MuiThemeProvider>
  );
}