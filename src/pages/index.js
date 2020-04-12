import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import Page from '../components/Page';
import Seo from '../components/Seo';
import Header from '../components/Header';
import CardNav from '../components/CardNav';
import CardContainer from '../components/CardContainer';

const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

const styles = theme => ({
  main: {
    minWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
});

function HomePage(props) {
  const { classes } = props;
  const { site } = useStaticQuery(homePageQuery);
  return (
    <Page>
      <Seo title="Home" />
      <Header
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={"Access Guide"}
      />
      <main className={classes.main}>
        <CardNav />
        <CardContainer />
      </main>
    </Page>
  );
}

export default withStyles(styles)(HomePage);
