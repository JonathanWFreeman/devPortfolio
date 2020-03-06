import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const usePortfolioArchiveQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PortfolioArchive {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            excerpt
            frontmatter {
              title
              slug
            }
          }
        }
        totalCount
      }
    }
  `);
  return allMarkdownRemark;
};

const Archive = () => {
  const { edges } = usePortfolioArchiveQuery();
  return (
    <section>
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

export default Archive;
