import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Footer from '../../footer';
import Header from '../../header';
import {
  Social,
  Scrollbar,
  HeaderBg,
  SiteLayout,
  ContentWrapper,
  MainWrapper,
} from '../../elements';
import GlobalStyle from '../../../Global';
import { Transition } from '../../utilities';

const SocialBar = styled(Social)`
  margin-top: -100vh;
  z-index: -1;
`;

const ProjectsPageLayout = ({ children, location, transitionType, bg }) => {
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
      <HeaderBg bg={bg} />
      <SiteLayout>
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <SocialBar />
        <MainWrapper>
          <Transition transitionType={transitionType}>
            <ContentWrapper>{children}</ContentWrapper>
          </Transition>
        </MainWrapper>
        <Footer />
        <GlobalStyle />
        <Scrollbar />
      </SiteLayout>
    </>
  );
};

ProjectsPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  transitionType: PropTypes.string,
  bg: PropTypes.string.isRequired,
};

export default ProjectsPageLayout;
