
import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/styles';

import createTheme from '../../createTheme';

function Page(props) {
  const { children, isDarkMode, setDarkMode } = props;
  
  // Initalize dark mode preference once
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  if (isDarkMode === null) {
    setDarkMode(prefersDarkMode);
  }

  return (
    <ThemeProvider theme={createTheme(isDarkMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  isDarkMode: state.display.isDarkMode,
});

const mapDispatchToProps = dispatch => ({
  setDarkMode: isDarkMode => dispatch({ type: 'SET_DARKMODE', isDarkMode }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Page);
