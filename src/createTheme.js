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
  overrides: {
    MuiRadio: {
      root: {
        color: prefersDarkMode ? 'white' : 'black',
      },
    },
    MuiCheckbox: {
      root: {
        color: prefersDarkMode ? 'white' : 'black',
        fill: prefersDarkMode ? 'white' : 'black',
      },
    },
  },
}});

export default createTheme;