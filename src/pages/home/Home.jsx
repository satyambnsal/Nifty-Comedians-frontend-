import React from 'react';
import { makeStyles, Container } from '@material-ui/core';

import LandingBlock from './LandingBlock';
import LatestBlock from './LatestBlock';
import CategoryBlock from './CategoryBlock';

const useStyles = makeStyles((theme) => ({
  content: {},
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.content}>
      <LandingBlock />

      <LatestBlock />

      <CategoryBlock />
    </Container>
  );
}
