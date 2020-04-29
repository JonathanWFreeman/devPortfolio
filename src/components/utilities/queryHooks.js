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
              description
              image_sm
              cloud_ref
            }
          }
        }
        totalCount
      }
    }
  `);
  return allMarkdownRemark;
};

// export const useProjectQuery = () => {
//   const { markdownRemark } = useStaticQuery(graphql`
//     query ProjectQuery2($slug: String!) {
//       markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//         html
//         frontmatter {
//           slug
//           title
//           image_desc
//           cloud_ref
//           video
//           stack
//           repo
//           demo
//         }
//       }
//     }
//   `);
//   return markdownRemark;
// };
