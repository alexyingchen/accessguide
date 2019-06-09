import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../components/Page';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Drawer from '../components/Drawer';

const AboutPageQuery = graphql`
  query {
    contentfulHomePage {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
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
  const { contentfulHomePage, site } = useStaticQuery(AboutPageQuery);
  return (
    <Page>
      <Seo title='About'/>
      <Header menuLinks={site.siteMetadata.menuLinks} siteTitle={contentfulHomePage.title}/>
      <main>
        <h1>{contentfulHomePage.title}</h1>
      </main>
      <Footer/>
    </Page>
  );
};

export default AboutPage;
