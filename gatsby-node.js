const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      console.log(results);
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/projects${node.frontmatter.slug}`,
          component: path.resolve('./src/components/projectsPage.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};
