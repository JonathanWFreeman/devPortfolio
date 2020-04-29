/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from './layouts/layout';
import SEO from './seo';
import ProjectsArchive from './projectsArchive';
import { ButtonLinkEx } from './elements';
import { PrimaryColor } from '../Global';

const ProjectsPage = ({ data, location }) => (
  <Layout
    bg={data.markdownRemark.frontmatter}
    layout="projects"
    location={location}
  >
    <SEO title={data.markdownRemark.frontmatter.title} />
    <article>
      <section>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div>
          <ButtonLinkEx
            linkTo={data.markdownRemark.frontmatter.repo}
            color={PrimaryColor}
          >
            Github
          </ButtonLinkEx>
          {data.markdownRemark.frontmatter.demo && (
            <ButtonLinkEx linkTo={data.markdownRemark.frontmatter.demo}>
              Demo
            </ButtonLinkEx>
          )}
        </div>
        <p>{data.markdownRemark.frontmatter.stack}</p>
      </section>
      <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </article>
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
        image_desc
        cloud_ref
        video
        stack
        repo
        demo
      }
    }
  }
`;

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ProjectsPage;
