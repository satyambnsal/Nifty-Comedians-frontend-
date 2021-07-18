import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';
import {
  makeStyles,
  Grid,
  Box,
  InputBase,
  InputAdornment,
  useMediaQuery,
  useTheme,
  IconButton,
  Button,
} from '@material-ui/core';
import {
  SearchOutlined,
  MenuOutlined,
  KeyboardArrowDownOutlined,
  PersonOutlined,
} from '@material-ui/icons';
import logo from '../../assets/imgs/logo.png';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    padding: `${theme.spacing(2.5)}px ${theme.spacing(4)}px`,
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(2)}px ${theme.spacing(2.5)}px`,
    },

    '&.scrolled': {
      background: theme.palette.primary.light,
    },
  },

  logo: {
    height: theme.spacing(5),
    marginRight: theme.spacing(7),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
    },
  },

  search: {
    flex: 1,
    maxWidth: theme.spacing(55),
    background: 'transparent',
    color: 'white',
    border: `1px solid white`,
    padding: `${theme.spacing(0.5)}px ${theme.spacing(1)}px`,
    fontFamily: "'Barlow'",
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
    },
  },

  menuBtn: {
    color: 'white',
  },

  avatar: {
    borderRadius: 0,
    width: theme.spacing(5.5),
    height: theme.spacing(5.5),
    background: theme.palette.primary.main,
    color: 'white',
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [search, setSearch] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    if (headerRef.current) {
      const onWindowScroll = () => {
        if (window.pageYOffset > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', onWindowScroll);
      return () => {
        window.removeEventListener('scroll', onWindowScroll);
      };
    }
  }, [headerRef.current]);

  return (
    <div
      className={classNames(classes.header, scrolled && 'scrolled')}
      ref={headerRef}
    >
      <Box display='flex' alignItems='center' flex={1}>
        <img
          className={classes.logo}
          alt='NIFTY'
          src={logo}
          onClick={() => history.push('/')}
        />
        <InputBase
          className={classes.search}
          placeholder='Search by comedian, comedy type... '
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startAdornment={
            <InputAdornment position='start'>
              <SearchOutlined />
            </InputAdornment>
          }
        />
      </Box>

      {isMobile ? (
        <IconButton className={classes.menuBtn}>
          <MenuOutlined />
        </IconButton>
      ) : (
        <div>
          <Grid container spacing={5}>
            <Grid item>
              <Button className={classes.menuBtn}>
                Discover <KeyboardArrowDownOutlined />
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.menuBtn}>My Comedy</Button>
            </Grid>
            <Grid item>
              <IconButton className={classes.avatar}>
                <PersonOutlined />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}
