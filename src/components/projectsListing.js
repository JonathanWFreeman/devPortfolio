import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { useProjectsQuery } from './utilities/queryHooks';
import { BackgroundColor } from '../Global';

const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 2%;
`;

const Card = styled.div`
  position: relative;
  .face {
    :before {
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
      z-index: -3;
    }
    :after {
      content: '';
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background: #fff;
      filter: blur(40px);
      background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
      z-index: -4;
    }
    transition: 0.5s;
    &.cardTop {
      position: relative;
      background: ${BackgroundColor};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      transform: translateY(100px);
      .cardContent {
        width: 100%;
        transition: 0.5s;
        background: ${BackgroundColor};
        position: relative;

        h2 {
          text-align: center;
          transition: 0.5s;
          padding: 25px 0;
          margin: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          position: absolute;
        }
        img {
          transition: 0.5s;
          z-index: 1;
          opacity: 0.6;
        }
      }
    }

    &.cardBottom {
      position: relative;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-160px);
      background: #fff;
      z-index: -1;
      .cardContent p {
        margin: 0;
        padding: 120px 20px 20px;
      }
      .cardContent {
        padding: 0 20px 20px;
        background: #fff;
        width: 100%;
        .titleBg {
          transition: 0.5s;
          width: 100%;
          height: 80px;
          position: absolute;
          left: 0;
        }
        a {
          margin: 15px 0 0;
          display: inline-block;
          text-decoration: none;
          font-weight: 900;
          color: ${BackgroundColor};
          padding: 5px;
          border: 1px solid ${BackgroundColor};
        }
      }
    }
  }
  :hover {
    .face {
      &.cardTop {
        transform: translateY(0);
        .cardContent {
          img {
            opacity: 1;
          }
          h2 {
            width: 100%;
            top: 96%;
            transform: translateY(0);
          }
        }
      }
      &.cardBottom {
        transform: translateY(0);
        .cardContent {
          opacity: 1;
          .titleBg {
            background: red;
          }
        }
      }
    }
  }
`;

const ProjectsListing = () => {
  const { edges } = useProjectsQuery();
  console.log(styled);
  return (
    <Grid>
      {edges.map(({ node }) => (
        <Card key={node.frontmatter.slug}>
          <div className="face cardTop">
            <div className="cardContent">
              <img
                src="https://i.picsum.photos/id/1025/600/400.jpg"
                alt={node.frontmatter.image_desc}
              />
              <h2>{node.frontmatter.title}</h2>
            </div>
          </div>
          <div className="face cardBottom">
            <div className="cardContent">
              <div className="titleBg" />
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
