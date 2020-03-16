/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import LayoutProjects from './layouts/layoutProjects';
import ProjectsArchive from './projectsArchive';

const ProjectsLayout = ({ data }) => (
  <LayoutProjects bg={data.markdownRemark.frontmatter.image_cover}>
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
    <ProjectsArchive />
  </LayoutProjects>
);

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
