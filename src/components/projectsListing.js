import React from 'react';
import { Link } from 'gatsby';

import { useProjectsQuery } from './utilities/queryHooks';

const ProjectsListing = () => {
  const { edges } = useProjectsQuery();
  return (
    <>
      {edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/projects${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.excerpt}</p>
          </Link>
        </article>
      ))}
    </>
  );
};

export default ProjectsListing;
