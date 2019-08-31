
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  root: {
    display: `flex`,
  },
}));

function Page({ children }) {
  const { site } = useStaticQuery(metaDataQuery);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Page;
