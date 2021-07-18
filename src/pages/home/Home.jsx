import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import Background from './Background';
import LandingBlock from './LandingBlock';
import LatestBlock from './LatestBlock';
import CategoryBlock from './CategoryBlock';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    minHeight: '100%',
  },

  content: {},
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Background />

      <Container className={classes.content}>
        <LandingBlock />

        <LatestBlock />

        <CategoryBlock />
      </Container>
    </div>
  );
}
