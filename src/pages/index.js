import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

import Page from '../components/Page';
import Seo from '../components/Seo';
import SkipNav from '../components/SkipNav';
import Header from '../components/Header';
import Main from '../components/Main';
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

function HomePage(props) {
  const { site } = useStaticQuery(homePageQuery);
  return (
    <Page>
      <Seo title="Home" />
      <SkipNav />
      <Header
        menuLinks={site.siteMetadata.menuLinks}
        siteTitle={"Access Guide"}
      />
      <Main>
        <CardNav />
        <CardContainer />
      </Main>
    </Page>
  );
}

export default HomePage;
