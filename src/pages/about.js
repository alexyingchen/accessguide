import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const homePageQuery = graphql`
  query AboutPage {
    contentfulHomePage {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
function AboutPage() {
  const { contentfulHomePage } = useStaticQuery(homePageQuery);

  return (
    <Layout>
      <SEO title='About'/>
      <h1>{contentfulHomePage.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: contentfulHomePage.content.childMarkdownRemark.html }} />
    </Layout>
  );
};

export default AboutPage;
