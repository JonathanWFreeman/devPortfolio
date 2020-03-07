import { useStaticQuery, graphql } from 'gatsby';

export const useProjectsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Projects {
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
