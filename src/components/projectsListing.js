import React from 'react';
import styled from 'styled-components';

import { useProjectsQuery } from './utilities/queryHooks';
import { ButtonLink } from './elements/buttons';
import {
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  AltColor,
} from '../Global';

const Grid = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 4%;
`;

const BorderWrapper = styled.span`
  width: 100%;
  :before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    background: linear-gradient(
      215deg,
      ${SecondaryColor},
      ${AltColor},
      ${PrimaryColor}
    );
    z-index: -5;
  }
  :after {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    filter: blur(10px);
    background: linear-gradient(
      235deg,
      ${SecondaryColor},
      ${AltColor},
      ${PrimaryColor}
    );
    z-index: -6;
  }
`;

const Card = styled.div`
  position: relative;
  .cardTop {
    transition: 0.5s;
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

  .cardBottom {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-160px);
    transition: 0.5s;
    z-index: -1;
    .cardContent p {
      margin: 0;
      padding: 120px 20px 20px;
    }
    .cardContent {
      padding: 0 20px 20px;
      width: 100%;
      .titleBg {
        transition: 0.5s;
        width: 100%;
        height: 80px;
        position: absolute;
        left: 0;
        background: ${BackgroundColor};
        :before {
          content: '';
          position: absolute;
          top: 50%;
          right: 25%;
          bottom: -2px;
          left: 25%;
          filter: blur(5px);
          background: ${SecondaryColor};
          z-index: -5;
        }
        :after {
          content: '';
          position: absolute;
          top: 50%;
          right: 25%;
          bottom: -2px;
          left: 25%;
          filter: blur(10px);
          background: ${SecondaryColor};
          z-index: -6;
        }
      }
    }
  }
  :hover {
    .cardTop {
      transform: translateY(0);
      .cardContent {
        img {
          opacity: 1;
        }
        h2 {
          width: 100%;
          top: 100%;
          transform: translateY(0);
          font-size: 2em;
        }
      }
    }
    .cardBottom {
      transform: translateY(0);
      .cardContent {
        opacity: 1;
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
          <div className="cardTop">
            <BorderWrapper>
              <div className="cardContent">
                <img
                  src="https://i.picsum.photos/id/1025/600/400.jpg"
                  alt={node.frontmatter.image_desc}
                />
                <h2>{node.frontmatter.title}</h2>
              </div>
            </BorderWrapper>
          </div>
          <div className="cardBottom">
            <div className="cardContent">
              <div className="titleBg" />
              <p>{node.frontmatter.description}</p>
              <ButtonLink to={`/projects${node.frontmatter.slug}`}>
                Read More
              </ButtonLink>
            </div>
          </div>
        </Card>
      ))}
    </Grid>
  );
};

export default ProjectsListing;
