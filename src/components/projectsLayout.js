/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from './layouts/layout';
import ProjectsArchive from './projectsArchive';
import {
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  AltColor,
} from '../Global';

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${BackgroundColor};
  #bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${({ bg }) => bg}),
      linear-gradient(230deg, ${SecondaryColor}, ${PrimaryColor}, ${AltColor});
    background-blend-mode: multiply;
    ${'' /* background-blend-mode: luminosity; */}
    background-size: cover;
    .skewed {
      position: absolute;
      bottom: -85%;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${BackgroundColor};
      transform: skewY(-10deg);
      transform-origin: top left;
    }
  }
`;

const useScrollEvent = initialState => {
  const [scrollPosition, setScrollPosition] = useState(initialState);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);
  return [scrollPosition];
};

const ProjectsLayout = ({ data }) => {
  const [scrollPosition] = useScrollEvent('');

  return (
    <Layout>
      <Header bg={data.markdownRemark.frontmatter.image_cover}>
        <div
          id="bg"
          style={{
            opacity: 1 - scrollPosition / 600,
            top: scrollPosition,
            backgroundPositionY: -scrollPosition,
          }}
        >
          <span
            className="skewed"
            style={{ transform: `skewY(${-5 + scrollPosition / 60}deg)` }}
            // style={{ transform: `skewY(60deg)` }}
          />
        </div>
      </Header>
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
      <ProjectsArchive />
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        image_cover
        image_desc
      }
    }
  }
`;

ProjectsLayout.propTypes = {
  data: PropTypes.node.isRequired,
};

export default ProjectsLayout;
