import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { useProjectsQuery } from './utilities/queryHooks';

const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2%;
`;

const Card = styled.div`
  position: relative;
  .face {
    ${'' /* width: 300px; */}
    ${'' /* height: 200px; */}
    transition: 0.5s;
    &.face1 {
      position: relative;
      background: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(100px);
      .content {
        opacity: 0.2;
        transition: 0.5s;
        img {
          max-width: 90%;
        }
      }
    }

    &.face2 {
      position: relative;
      color: #000;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
      transform: translateY(-100px);
      .content p {
        margin: 0;
        padding: 0;
      }
      .content a {
        margin: 15px 0 0;
        display: inline-block;
        text-decoration: none;
        font-weight: 900;
        color: #333;
        padding: 5px;
        border: 1px solid #333;
      }
    }
  }
  :hover {
    .face {
      &.face1 {
        background: red;
        transform: translateY(0);
      }
      &.face2 {
        transform: translateY(0);
      }
      .content {
        opacity: 1;
      }
    }
  }
`;
// const Face;
// const Face1;
// const Face2;
// const Content;

const ProjectsListing = () => {
  const { edges } = useProjectsQuery();
  console.log(styled);
  return (
    <Grid>
      {edges.map(({ node }) => (
        <Card key={node.frontmatter.slug}>
          <div className="face face1">
            <div className="content">
              <img
                src="https://i.picsum.photos/id/1025/600/350.jpg"
                alt={node.frontmatter.image_desc}
              />
              <h2>{node.frontmatter.title}</h2>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>{node.frontmatter.description}</p>
              <Link to={`/projects${node.frontmatter.slug}`}>Read More</Link>
            </div>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default ProjectsListing;
