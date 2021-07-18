import React from 'react';
import { Typography, Button, makeStyles, Grid } from '@material-ui/core';

import landingImg from '../../assets/imgs/landing_img.png';

const useStyles = makeStyles((theme) => ({
  landing: {
    paddingTop: 120,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
    },
  },

  landingImg: {
    width: '100%',
  },

  landingText: {
    marginTop: 40,

    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 40,
      textAlign: 'center',
    },
  },

  title: {
    color: 'white',
    marginBottom: theme.spacing(2),
    fontSize: '64px',
    lineHeight: '65px',
    textTransform: 'uppercase',
  },

  subtitle: {
    color: 'white',
    marginBottom: theme.spacing(3),
    fontFamily: "'Barlow'",
  },

  discover: {
    width: theme.spacing(33),
    fontSize: '22px',
    lineHeight: '27px',
    padding: 10,
  },
}));

export default function LandingBlock() {
  const classes = useStyles();

  return (
    <div className={classes.landing}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5} className={classes.landingText}>
          <Typography variant='h1' className={classes.title}>
            A comedy central for NFTs
          </Typography>
          <Typography variant='body1' className={classes.subtitle}>
            The Original Comedy NFT Store
          </Typography>
          <Button
            variant='contained'
            color='primary'
            className={classes.discover}
          >
            Discover
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <img
            src={landingImg}
            className={classes.landingImg}
            alt='NIFTY LANDING'
          />
        </Grid>
      </Grid>
    </div>
  );
}
