import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#D87559',
      main: '#CE5330',
      dark: '#3B1409',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: ["'Staatliches'", 'cursive'].join(','),
    fontSize: 16,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        boxShadow: 'none',
      },
    },
  },
});

export default theme;
