import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../components/Page';
import Seo from '../components/Seo';
import Header from '../components/Header';

const aboutPageQuery = graphql`
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
`

function AboutPage() {
  const { site } = useStaticQuery(aboutPageQuery);
  return (
    <Page>
      <Seo title='About'/>
      <Header menuLinks={site.siteMetadata.menuLinks} siteTitle={"About"}/>
      <main>
      </main>
    </Page>
  );
};

export default AboutPage;
