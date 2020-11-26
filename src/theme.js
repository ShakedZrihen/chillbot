import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


export const COLORS = {
  PRIMERY: "#428C7F",
  PRIMARY_SHADE: '#3B7E72',
  SECONDARY: "#2A3858",
  OFFWHITE: "#F2F2F2",
};

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    success: {
      main: COLORS.PRIMERY,
    },
    primary: {
      main: COLORS.OFFWHITE,
    },
    secondary: {
      main: COLORS.SECONDARY,
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
