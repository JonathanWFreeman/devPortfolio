/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Footer from './footer';
import Header from './header';
import Social from './social';
import GlobalStyle, { SiteWidth } from '../Global';

const MainWrapper = styled.main`
  margin: 0 auto;
  max-width: ${SiteWidth};
  min-height: 88vh;
  display: grid;
  grid-template-columns: 8vw 1fr;
  grid-template-areas: 'social main';
`;

const Content = styled.section`
  grid-area: main;
  margin-top: 8vh;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>
        <Social />
        <Content>{children}</Content>
      </MainWrapper>
      <Footer />
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
