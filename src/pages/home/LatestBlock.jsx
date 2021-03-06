import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Carousel from 'react-multi-carousel';

import latest1Img from '../../assets/imgs/latest_1.png';
import latest2Img from '../../assets/imgs/latest_2.png';
import latest3Img from '../../assets/imgs/latest_3.png';
import LatestComedyItem from '../../components/comedyItem/LatestComedyItem';

const useStyles = makeStyles((theme) => ({
  latest: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },

  blockTitle: {
    fontSize: '48px',
    lineHeight: '60px',
    marginBottom: theme.spacing(2),
    color: 'white',
  },

  carousel: {
    position: 'relative',

    '& .react-multiple-carousel__arrow': {
      color: 'white',
      width: theme.spacing(6),
      height: theme.spacing(6),
      borderRadius: 0,
      border: '1px solid white',
      background: theme.palette.primary.main,
    },
  },

  latestItem: {
    width: 'calc(100% - 20px)',
    height: 270,
    '& img': {
      width: '100%',
    },
  },
}));

export default function LatestBlock() {
  const classes = useStyles();

  const latest = [
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className={classes.latest}>
      <Typography variant='h2' className={classes.blockTitle}>
        Latest
      </Typography>

      <div className={classes.carousel}>
        <Carousel responsive={responsive} draggable>
          {latest.map((item, index) => (
            <div className={classes.latestItem} key={index}>
              <LatestComedyItem {...item} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
