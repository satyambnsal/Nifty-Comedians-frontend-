import React from 'react';
import { Typography, Grid, makeStyles, Container } from '@material-ui/core';

import latest1Img from '../../assets/imgs/latest_1.png';
import latest2Img from '../../assets/imgs/latest_2.png';
import latest3Img from '../../assets/imgs/latest_3.png';
import LatestComedyItem from '../../components/comedyItem/LatestComedyItem';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 120,
    paddingBottom: 60,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 80,
      paddingBottom: 40,
    },
  },

  title: {
    marginTop: 40,
    color: 'white',
    marginBottom: theme.spacing(8),
    fontSize: '64px',
    lineHeight: '65px',
    textTransform: 'uppercase',
  },

  comedies: {
    position: 'relative',
  },

  comedyItem: {
    width: '100%',
    height: 270,
    '& img': {
      width: '100%',
    },
  },
}));

export default function MyComedy() {
  const classes = useStyles();

  const comedies = [
    {
      img: latest1Img,
      author: 'hahaforhire',
      title: 'Intro - My name is Mike',
      value: { amount: 0.05, denom: 'ETH' },
      count: 10,
      current: 1,
      thumbs: 45,
    },
    {
      img: latest2Img,
      author: 'hahaforhire',
      title: 'Intro - My name is Mike',
      value: { amount: 0.05, denom: 'ETH' },
      count: 10,
      current: 1,
      thumbs: 45,
    },
    {
      img: latest3Img,
      author: 'hahaforhire',
      title: 'Intro - My name is Mike',
      value: { amount: 0.05, denom: 'ETH' },
      count: 10,
      current: 1,
      thumbs: 45,
    },
    {
      img: latest1Img,
      author: 'hahaforhire',
      title: 'Intro - My name is Mike',
      value: { amount: 0.05, denom: 'ETH' },
      count: 10,
      current: 1,
      thumbs: 45,
    },
    {
      img: latest2Img,
      author: 'hahaforhire',
      title: 'Intro - My name is Mike',
      value: { amount: 0.05, denom: 'ETH' },
      count: 10,
      current: 1,
      thumbs: 45,
    },
    {
      img: latest3Img,
      author: 'hahaforhire',
      title: 'Intro - My name is Mike',
      value: { amount: 0.05, denom: 'ETH' },
      count: 10,
      current: 1,
      thumbs: 45,
    },
  ];

  return (
    <Container>
      <div className={classes.root}>
        <Typography variant='h1' className={classes.title}>
          My Comedy
        </Typography>

        <div className={classes.comedies}>
          <Grid container spacing={4}>
            {comedies.map((item, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <div className={classes.comedyItem}>
                  <LatestComedyItem {...item} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Container>
  );
}
