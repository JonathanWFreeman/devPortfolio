/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';
import ProjectsArchive from './projectsArchive';

const ProjectsLayout = ({ data }) => (
  <Layout>
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
    <ProjectsArchive />
  </Layout>
);

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

ProjectsLayout.propTypes = {
  data: PropTypes.node.isRequired,
};

export default ProjectsLayout;
