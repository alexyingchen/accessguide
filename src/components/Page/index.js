
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../../theme';

const metaDataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

const styles = theme => ({
  root: {
    display: `flex`,
  },
});

function Page(props) {
  const { classes, children } = props;
  const { site } = useStaticQuery(metaDataQuery);
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
