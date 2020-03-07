import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { useProjectsQuery } from './utilities/queryHooks';

const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const ProjectsListing = () => {
  const { edges } = useProjectsQuery();
  console.log(styled);
  return (
    <Grid>
      {edges.map(({ node }) => (
        <article
          key={node.frontmatter.slug}
          style={{ border: '1px solid green' }}
        >
          <Link to={`/projects${node.frontmatter.slug}`}>
            <img
              src="https://i.picsum.photos/id/1025/400/400.jpg"
              alt={node.frontmatter.image_desc}
            />
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
          </Link>
        </article>
      ))}
    </Grid>
  );
};

export default ProjectsListing;
