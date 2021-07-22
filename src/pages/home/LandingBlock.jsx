import React from 'react';
import { Typography, Button, makeStyles, Grid, Box } from '@material-ui/core';

import landingImg from '../../assets/imgs/landing_img.png';

const useStyles = makeStyles((theme) => ({
  landing: {
    paddingTop: 120,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
    },
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

  landingComedy: {
    position: 'relative',
    background: 'white',
    width: '100%',
  },

  comedyImg: {
    width: '100%',
  },

  comedyInfo: {
    width: '100%',
    padding: '22px 28px 20px',
  },

  comedyTitle: {
    fontFamily: 'Barlow',
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: 'bold',
  },

  comedyStats: {
    marginTop: 10,
  },

  comedyValue: {
    color: theme.palette.primary.main,
    fontFamily: 'Barlow',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
  },

  comedySlide: {
    marginLeft: 12,
    fontFamily: 'Barlow',
    fontSize: '14px',
    lineHeight: '16px',
  },

  comedyThumbs: {
    fontFamily: 'Barlow',
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 'bold',
  },
}));

export default function LandingBlock() {
  const classes = useStyles();
  const comedy = {
    img: landingImg,
    author: 'hahaforhire',
    title: 'Intro - My name is Mike',
    value: { amount: 0.05, denom: 'ETH' },
    count: 10,
    current: 1,
    thumbs: 45,
  };

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
          <div className={classes.landingComedy}>
            <img src={comedy.img} className={classes.comedyImg} alt='' />
            <div className={classes.comedyInfo}>
              <Typography variant='h6' className={classes.comedyTitle}>
                {comedy.title}
              </Typography>
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                className={classes.comedyStats}
              >
                <Box display='flex' alignItems='center'>
                  <Typography variant='body1' className={classes.comedyValue}>
                    {comedy.value.amount} {comedy.value.denom}
                  </Typography>
                  <Typography variant='body1' className={classes.comedySlide}>
                    {comedy.current} of {comedy.count}
                  </Typography>
                </Box>
                <Typography variant='body2' className={classes.comedyThumbs}>
                  {`😆`} {comedy.thumbs}
                </Typography>
              </Box>
            </div>{' '}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
