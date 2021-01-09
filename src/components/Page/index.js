
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider } from '@material-ui/styles';

import createTheme from '../../createTheme';

function Page(props) {
  const displayState = useSelector(state => state.display);
  const dispatch = useDispatch();
  
  // Initalize dark mode preference once
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  if (displayState.isDarkMode === null) {
    dispatch({ type: 'SET_DARKMODE', prefersDarkMode });
  }

  return (
    <ThemeProvider theme={createTheme(displayState)}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default Page;
