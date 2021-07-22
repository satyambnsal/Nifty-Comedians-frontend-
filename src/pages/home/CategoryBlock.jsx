import React from 'react';
import { Typography, Grid, makeStyles } from '@material-ui/core';

import comedyImg from '../../assets/imgs/comedy_clips_category.png';
import podcastImg from '../../assets/imgs/podcasts_category.png';
import jokeImg from '../../assets/imgs/jokes_category.png';

const useStyles = makeStyles((theme) => ({
  category: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },

  categoryItem: {
    position: 'relative',
    height: 260,

    '& > .background': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      background: '#20000080',
    },

    '& > img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
    },
  },

  categoryTitle: {
    position: 'absolute',
    top: 'calc(50% - 30px)',
    left: 0,
    width: '100%',
    textAlign: 'center',
    fontSize: '48px',
    lineHeight: '60px',
    marginBottom: theme.spacing(2),
    color: 'white',
  },
}));

export default function CategoryBlock() {
  const classes = useStyles();

  const categories = [
    { img: comedyImg, title: 'Comedy Clips' },
    { img: podcastImg, title: 'Podcasts' },
    { img: jokeImg, title: 'Jokes' },
  ];

  return (
    <div className={classes.category}>
      <Grid container spacing={3}>
        {categories.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <div className={classes.categoryItem}>
              <div className='background' />
              <img src={item.img} alt='' />
              <Typography variant='h2' className={classes.categoryTitle}>
                {item.title}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
