import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#2A3858',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EDF4ED'
    },
  },
});

export default theme;
