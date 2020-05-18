/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from '../footer';
import Header from '../header';
import {
  Social,
  Scrollbar,
  SiteLayout,
  ContentWrapper,
  MainWrapper,
} from '../elements';
import GlobalStyle from '../../Global';
import { Transition } from '../utilities';

const Layout = ({
  children,
  location,
  transitionType,
  transitionDirection,
}) => {
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
    <SiteLayout>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <Social />
      <Transition
        transitionType={transitionType}
        transitionDirection={transitionDirection}
      >
        <MainWrapper>
          <ContentWrapper>{children}</ContentWrapper>
        </MainWrapper>
      </Transition>
      <Footer />
      <GlobalStyle />
      <Scrollbar />
    </SiteLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  transitionType: PropTypes.string,
  transitionDirection: PropTypes.string,
};

export default Layout;
