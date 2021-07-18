import React, { useState } from 'react';
import {
  Container,
  makeStyles,
  Grid,
  Link,
  Box,
  InputBase,
  Button,
} from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    paddingTop: 60,
    paddingBottom: 100,
    background: theme.palette.primary.dark,
  },

  contact: {
    marginBottom: theme.spacing(5),
  },

  email: {
    width: theme.spacing(33),
    height: theme.spacing(6),
    background: 'transparent',
    color: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
    padding: `${theme.spacing(1.5)}px ${theme.spacing(2.5)}px`,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },

  send: {
    width: theme.spacing(25),
    height: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      width: '20%',
    },
  },

  contactLink: {
    color: 'white',
  },

  link: {
    fontFamily: 'Barlow',
    color: 'white',
    fontSize: '14px',
    lineHeight: '17px',
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const socialLinks = [
    'https://slack.com/',
    'https://twitter.com/',
    'https://instagram.com/',
  ];

  return (
    <div className={classes.footer}>
      <Container>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='space-between'
          className={classes.contact}
        >
          <Grid item>
            <Grid container spacing={8} alignItems='center'>
              <Grid item>
                <Box display='flex'>
                  <InputBase
                    className={classes.email}
                    placeholder='YOUR EMAIL'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button
                    variant='contained'
                    color='primary'
                    className={classes.send}
                  >
                    Send me latest updates
                  </Button>
                </Box>
              </Grid>
              <Grid item>
                <Grid container spacing={4}>
                  <Grid item>
                    <Link
                      className={classes.contactLink}
                      href='/how-it-works'
                      underline='none'
                    >
                      How it works
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      className={classes.contactLink}
                      href='/support'
                      underline='none'
                    >
                      Support
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container>
              {socialLinks.map((item, index) => (
                <Grid item key={index}>
                  <SocialIcon
                    url={item}
                    bgColor='transparent'
                    fgColor='white'
                    target='_blank'
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <div>
          <Grid container spacing={5}>
            <Grid item>
              <Link className={classes.link} href='/terms' underline='none'>
                Terms
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.link} href='/privacy' underline='none'>
                Privacy
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
