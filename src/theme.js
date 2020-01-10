import { createMuiTheme, colors } from "@material-ui/core";

// A custom theme for this app
const theme = createMuiTheme({
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
});

export default theme;