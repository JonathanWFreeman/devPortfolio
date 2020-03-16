/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from './layouts/layout';
import ProjectsArchive from './projectsArchive';
import { ButtonLink } from './elements/buttons';
import { ExLink } from './elements/links';

const ProjectsLayout = ({ data }) => (
  <Layout bg={data.markdownRemark.frontmatter.image_cover} layout="projects">
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </div>
    <ButtonLink to={data.markdownRemark.frontmatter.repo}>Github</ButtonLink>
    <ExLink linkTo={data.markdownRemark.frontmatter.repo}>Github</ExLink>
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
        image_cover
        image_desc
        repo
      }
    }
  }
`;

ProjectsLayout.propTypes = {
  data: PropTypes.node.isRequired,
};

export default ProjectsLayout;
