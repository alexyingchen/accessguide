import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Page from '../components/Page';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Drawer from '../components/Drawer';

const homePageQuery = graphql`
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

function HomePage() {
  const { contentfulHomePage, site } = useStaticQuery(homePageQuery);
  console.log(site.siteMetadata.menuLinks)
  return (
    <Page>
      <Seo title='Home'/>
      <Header menuLinks={site.siteMetadata.menuLinks} siteTitle={contentfulHomePage.title}/>
      <Drawer/>
      <main>
        <h1>{contentfulHomePage.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: contentfulHomePage.content.childMarkdownRemark.html }} />
      </main>
      <Footer/>
    </Page>
  );
};

export default HomePage;
