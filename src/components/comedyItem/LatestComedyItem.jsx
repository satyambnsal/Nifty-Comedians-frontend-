import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    background: 'white',
    width: '100%',
    height: 270,
    padding: '16px 16px 22px',
  },

  img: {
    width: '100%',
    height: 150,
    objectFit: 'cover',
    objectPosition: 'top',
    border: '1px solid #e0e0e0',
  },

  author: {
    marginTop: 20,
    fontFamily: 'Barlow',
    fontSize: '12px',
    lineHeight: '14px',
  },

  title: {
    marginTop: 4,
    fontFamily: 'Barlow',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'bold',
  },

  stats: {
    position: 'absolute',
    width: 'calc(100% - 32px)',
    bottom: 22,
  },

  value: {
    color: theme.palette.primary.main,
    fontFamily: 'Barlow',
    fontWeight: 'bold',
    fontSize: '12px',
    lineHeight: '14px',
  },

  slide: {
    marginLeft: 6,
    fontFamily: 'Barlow',
    fontSize: '12px',
    lineHeight: '14px',
  },

  thumbs: {
    fontFamily: 'Barlow',
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 'bold',
  },
}));

export default function LatestComedyItem({
  img,
  author,
  title,
  value,
  count,
  current,
  thumbs,
}) {
  const classes = useStyles();

  const { amount, denom } = value;

  return (
    <div className={classes.container}>
      <img src={img} className={classes.img} alt='' />
      <Typography variant='body2' className={classes.author}>
        {author}
      </Typography>
      <Typography variant='h6' className={classes.title}>
        {title}
      </Typography>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        className={classes.stats}
      >
        <Box display='flex' alignItems='center'>
          <Typography variant='body1' className={classes.value}>
            {amount} {denom}
          </Typography>
          <Typography variant='body1' className={classes.slide}>
            {current} of {count}
          </Typography>
        </Box>
        <Typography variant='body2' className={classes.thumbs}>
          {`😆`} {thumbs}
        </Typography>
      </Box>
    </div>
  );
}
