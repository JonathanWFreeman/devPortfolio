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

const SocialBar = styled(Social)`
  margin-top: -100vh;
  z-index: -1;
`;

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
      <Transition transitionType="swipe" transitionDirection="up">
        {bg && <HeaderBg bg={bg} />}
      </Transition>
      <SiteLayout>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        {location && location.pathname.includes('projects') ? (
          <SocialBar />
        ) : (
          <Social />
        )}
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
  bg: PropTypes.string.isRequired,
};

export default Layout;
