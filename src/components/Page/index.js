
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../../theme';

const styles = theme => ({
  root: {
    display: `flex`,
  },
});

function Page(props) {
  const { classes, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default withStyles(styles)(Page);
