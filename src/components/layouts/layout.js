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
  HeaderBg,
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
  bg,
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
    <>
      {bg && (
        <Transition transitionType="swipe" transitionDirection="up">
          <HeaderBg bg={bg} />
        </Transition>
      )}
      <SiteLayout>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <Social transitionType={transitionType} location={location} />
        <MainWrapper>
          <Transition
            transitionType={transitionType}
            transitionDirection={transitionDirection}
          >
            <ContentWrapper>{children}</ContentWrapper>
          </Transition>
        </MainWrapper>
        <Footer transitionType={transitionType} />
        <GlobalStyle />
        <Scrollbar />
      </SiteLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  transitionType: PropTypes.string,
  transitionDirection: PropTypes.string,
  bg: PropTypes.object,
};

export default Layout;
