/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Footer from '../footer';
import Header from '../header';
import Social, { SocialWidth } from '../social';
import GlobalStyle, { SiteWidth, Above, Below } from '../../Global';

const SiteLayout = styled.div`
  display: grid;
  ${Above.small`
    grid-template-columns: ${SocialWidth} 1fr;
    grid-template-rows: 100px 1fr 50px;
    grid-template-areas:
      'header header'
      'social main'
      'footer footer';
    `}
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 60px 100px;
  grid-template-areas:
    'header'
    'main'
    'social'
    'footer';
`;

const MainWrapper = styled.main`
  ${'' /* margin: 0 auto; */}
  ${'' /* display: grid; */}
  ${'' /* grid-template-columns: 8vw 1fr; */}
  ${'' /* grid-template-areas: 'social main'; */}
  min-height: 80vh;
  grid-area: main;
`;

const Content = styled.section`
  margin: 8vh auto;
  ${Above.small`
    max-width: calc(${`${SiteWidth} + ${SocialWidth}`});
    padding-right: ${SocialWidth};
  `}
  ${Below.small` 
    padding: 0 2%;
  `}
`;

const LayoutProjects = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Social />
      <MainWrapper>
        <Content>{children}</Content>
      </MainWrapper>
      <Footer />
      <GlobalStyle />
    </SiteLayout>
  );
};

LayoutProjects.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutProjects;
