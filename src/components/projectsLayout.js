import React from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

function ProjectsLayout() {
  return (
    <Layout>
      <div>
        <h1>Layout</h1>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectQuery {
    markdownRemark(frontmatter: { slug: { eq: "/queue" } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default ProjectsLayout;
