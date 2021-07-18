import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: -1,
    background: theme.palette.primary.main,
    overflow: 'hidden',

    '& > .first-sector': {
      background: theme.palette.primary.dark,
      width: '150%',
      height: 380,
      transform: 'matrix(0.99, -0.14, 0.12, 0.99, 0, 0)',
      position: 'absolute',
      top: 0,
      left: -115,
    },

    '& > .second-sector': {
      background: theme.palette.primary.dark,
      opacity: 0.4,
      width: '150%',
      height: 380,
      transform: 'matrix(1, 0.05, -0.04, 1, 0, 0)',
      position: 'absolute',
      top: '10vw',
      left: -60,
    },

    '& > .third-sector': {
      background: theme.palette.primary.dark,
      opacity: 0.4,
      width: '150%',
      height: 360,
      transform: 'rotate(-4.26deg)',
      position: 'absolute',
      top: 'calc(100vh - 50px)',
      left: -90,
    },

    '& > .fourth-sector': {
      background: theme.palette.primary.dark,
      width: '150%',
      height: '100%',
      transform: 'rotate(2.63deg)',
      position: 'absolute',
      top: 'calc(100vh + 30px)',
      left: -80,
    },
  },
}));

export default function Background() {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className='first-sector' />
      <div className='second-sector' />
      <div className='third-sector' />
      <div className='fourth-sector' />
      <div className='fifth-sector' />
    </div>
  );
}
