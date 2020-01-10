import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import Page from '../components/Page';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Drawer from '../components/Drawer';
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
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  toolbarSpacer: { ...theme.mixins.toolbar, ...{
    width: '100vw',
    marginBottom: '2px',
  }} ,
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
        <div className={classes.toolbarSpacer} />
        <Drawer />
        <CardContainer />
      </main>
      <Footer />
    </Page>
  );
}

export default withStyles(styles)(HomePage);
