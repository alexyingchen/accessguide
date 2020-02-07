import { createMuiTheme, colors } from "@material-ui/core";

const theme = {
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: `#556cd6`,
    },
    secondary: {
      main: `#19857b`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#E5E5E5`,
    },
  },
};

const createTheme = (prefersDarkMode) => createMuiTheme({...theme, ...{
  palette: { 
    type: prefersDarkMode ? 'dark' : 'light' 
  },
}});

export default createTheme;