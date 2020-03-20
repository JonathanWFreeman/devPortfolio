import React from 'react';
import { Link } from 'gatsby';

import { useProjectsQuery } from './utilities/queryHooks';

const ProjectsArchive = () => {
  const { edges } = useProjectsQuery();
  return (
    <aside>
      {edges.map(edge => (
        <Link
          to={`/projects${edge.node.frontmatter.slug}`}
          key={edge.node.frontmatter.slug}
        >
          <li>{edge.node.frontmatter.title}</li>
        </Link>
      ))}
    </aside>
  );
};

export default ProjectsArchive;
