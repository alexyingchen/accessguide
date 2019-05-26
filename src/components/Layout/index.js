
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

import Header from '../Header'
import Footer from '../Footer'

const Main = styled.main`
  background: aliceblue;
  color: #333;
  padding: 20px;
  margin: auto;

  & > h1 {
    font-size: 28px;
    font-weight: bold;
  }

  & > small {
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    display: inline-block;
    background: #16799d;
    font-size: 12px;
    margin: 10px 0;
  }

  & > article {
    background: #fff;
    padding: 40px 30px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
    position: relative;
    z-index: 1;
    margin: 30px 0;
  }

  & > article > h1 {
    color: #555;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > article > h2 {
    color: #555;
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > article > p {
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 15px;
  }

  & > article > img {
    max-width: 100%;
    height: auto;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: 'Quicksand', Georgia;
    background: aliceblue;
  }
`

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

function Layout({ children }) {
  const { site } = useStaticQuery(metaDataQuery);
  return (
    <>
      <GlobalStyle />
      <Header menuLinks={site.siteMetadata.menuLinks} siteTitle={site.siteMetadata.title}/>
      <Main>{children}</Main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
