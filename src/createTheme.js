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

const createTheme = ({ isDarkMode, isDefaultTypeface }) => createMuiTheme({...theme, ...{
  palette: { 
    type: isDarkMode ? 'dark' : 'light' 
  },
  typography: {
    fontFamily: isDefaultTypeface ? ['Roboto', 'Arial', 'sans-serif'] : ['Helvetica', 'Arial', 'sans-serif'],
  },
  overrides: {
    MuiRadio: {
      root: {
        color: isDarkMode ? 'white' : 'black',
      },
    },
    MuiCheckbox: {
      root: {
        color: isDarkMode ? 'white' : 'black',
        fill: isDarkMode ? 'white' : 'black',
      },
    },
  },
}});

export default createTheme;