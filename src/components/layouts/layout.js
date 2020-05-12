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

import Footer from '../footer';
import Header from '../header';
import { Social, Scrollbar, SocialWidth } from '../elements';
import GlobalStyle, { SiteWidth } from '../../Global';
import { Above, Below, FadeTransition } from '../utilities';

const SiteLayout = styled.div`
  display: grid;

  ${Above.small`
    ${({ layoutType }) => {
      if (layoutType === 'standard') {
        return `
          grid-template-columns: ${SocialWidth} 1fr;
          grid-template-rows: 100px 1fr 50px;
          grid-template-areas:
            'header header'
            'social main'
            'footer footer';
        `;
      }
    }}
  `}

  ${({ layoutType }) => {
    if (layoutType === 'standard') {
      return `
        grid-template-columns: 1fr;
        grid-template-rows: 100px 1fr 60px 100px;
        grid-template-areas:
          'header'
          'main'
          'social'
          'footer';
      `;
    }
    if (layoutType === 'projects') {
      return `
        grid-template-columns: 1fr;
        grid-template-rows: 0 1fr 60px 100px;
        grid-template-areas:
        'header'
        'main'
        'social'
        'footer';
      `;
    }
  }}
`;
// TODO:
// FIX MARGIN ISSUES
const MainWrapper = styled.main`
  min-height: 80vh;
  grid-area: main;
  ${'' /* margin: 8vh 0; */}
`;

const Content = styled.section`
  ${Above.small`
    ${({ layoutType }) => {
      if (layoutType === 'standard') {
        return `
          max-width: calc(${`${SiteWidth} + ${SocialWidth}`});
          padding-right: ${SocialWidth};
        `;
      }
    }}
  `}

  ${Below.small`
    ${({ layoutType }) => {
      if (layoutType === 'standard') {
        return `
          padding: 0 2%;
        `;
      }
    }}
  `}

  ${({ layoutType }) => {
    if (layoutType === 'standard') {
      return `
        margin: 8vh auto;
      `;
    }
    if (layoutType === 'projects') {
      return `
        margin: 0 auto;
        max-width: ${SiteWidth};
      `;
    }
  }}
`;

const Layout = ({ children, layout, location }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <SiteLayout layoutType={layout}>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Social />
      <MainWrapper>
        <FadeTransition>
          <Content layoutType={layout}>{children}</Content>
        </FadeTransition>
      </MainWrapper>
      <Footer />
      <GlobalStyle />
      <Scrollbar />
    </SiteLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.string,
  location: PropTypes.object,
};

Layout.defaultProps = {
  layout: 'standard',
};

export default Layout;
