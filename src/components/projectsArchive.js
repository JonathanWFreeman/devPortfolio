import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { useProjectsQuery } from './utilities/queryHooks';
import ProjectsListing from './projectsListing';

const ProjectsArchive = () => {
  const { edges } = useProjectsQuery();
  return (
    <section>
      <ProjectsListing />
      {edges.map(edge => (
        <Link to={`/projects${edge.node.frontmatter.slug}`}>
          <li key={edge.node.frontmatter.slug}>
            {edge.node.frontmatter.title}
          </li>
        </Link>
      ))}
    </section>
  );
};

export default ProjectsArchive;
