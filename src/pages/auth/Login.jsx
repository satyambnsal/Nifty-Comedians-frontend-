import React, { useEffect } from 'react';
import {
  Container,
  Link,
  makeStyles,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import nearLogo from '../../assets/protocols/near-logo.png';
import polygonLogo from '../../assets/protocols/polygon-logo.png';
import { login } from '../../common/utils/near_contract';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 200,
    paddingBottom: 100,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 100,
      paddingBottom: 50,
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
    marginBottom: theme.spacing(6),
    fontFamily: 'Barlow',
    textAlign: 'center',
  },

  methodCard: {
    width: 'calc(100vw - 48px)',
    maxWidth: 600,
    padding: '24px 32px',
    marginBottom: theme.spacing(3),
    textTransform: 'none',
    textAlign: 'left',

    '& .MuiButton-label': {
      display: 'block',
    },
  },

  methodTitle: {
    fontFamily: 'Barlow',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: theme.spacing(2),
  },

  methodSubtitle: {
    fontFamily: 'Barlow',
    fontSize: '14px',
  },

  methodLogo: {
    width: 80,
    marginLeft: theme.spacing(3),
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const isLoggedIn = window.walletConnection.isSignedIn();

  const methods = [
    {
      protocol: 'Polygon',
      logo: polygonLogo,
      title: 'Polygon wallet',
      subtitle: 'Connect to Polygon wallet, and make use of Polygon blockchain',
    },
    {
      protocol: 'NEAR',
      logo: nearLogo,
      title: 'NEAR wallet',
      subtitle: 'Connect to NEAR wallet, and make use of NEAR blockchain',
    },
  ];

  const handleLogin = (protocol) => {
    if (protocol === 'NEAR') {
      login();
    }
  };

  useEffect(() => {
    if (isLoggedIn && history) {
      history.push('/');
    }
  }, [isLoggedIn, history]);

  return (
    <Container>
      <Box className={classes.root}>
        <Typography variant='h1' className={classes.title}>
          Connect to your wallet
        </Typography>
        <Typography variant='body1' className={classes.subtitle}>
          Please select a method to access your wallet.
          <br />
          {/* Don't have a wallet?{' '}
          <Link to='/auth/register' color='primary'>
            Create Wallet
          </Link> */}
        </Typography>

        {methods.map((method) => (
          <Button
            variant='contained'
            color='primary'
            key={method.protocol}
            className={classes.methodCard}
            onClick={() => handleLogin(method.protocol)}
          >
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
              >
                <Typography variant='h4' className={classes.methodTitle}>
                  {method.title}
                </Typography>
                <Typography variant='body1' className={classes.methodSubtitle}>
                  {method.subtitle}
                </Typography>
              </Box>
              <img
                src={method.logo}
                alt={method.protocol}
                className={classes.methodLogo}
              />
            </Box>
          </Button>
        ))}
      </Box>
    </Container>
  );
}
