import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Archive = () => {
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

  return (
    <>
      <section>
        {allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            {edge.node.frontmatter.title}
          </li>
        ))}
      </section>
    </>
  );
};

export default Archive;
