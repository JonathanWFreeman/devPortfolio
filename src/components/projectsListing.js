import React from 'react';
import styled from 'styled-components';

import {
  useProjectsQuery,
  Above,
  Below,
  SwipeTransition,
  CloudImg,
} from './utilities';
import {
  BackgroundColor,
  PrimaryColor,
  SecondaryColor,
  AltColor,
} from '../Global';
import { ButtonLinkTransitionFade } from './elements';

const Grid = styled.section`
  display: grid;
  width: 100%;
  ${'' /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */}
  grid-gap: 4em;
`;

const BorderWrapper = styled.span`
  width: 100%;
  background: ${`${BackgroundColor}60`};
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
    z-index: -9;
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
    z-index: -10;
  }
`;

const GlowTitle = styled.h2`
  ${'' /* text-align: center; */}
  transition: 0.5s;
  padding: 25px 0;
  margin: 0;
  ${'' /* width: 100%; */}
  position: ${({ position }) => position || 'relative'};
  text-shadow: 0 0 0px #fff, 0 0 5px #fff, 0 0 10px ${SecondaryColor},
    0 0 20px ${SecondaryColor}, 0 0 30px ${SecondaryColor};
  ${Above.med`
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `}
  ${Below.med`
          font-size: 2em;
          line-height: 1.15;
          text-align: center;
          width: 100%;
        `}
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

    .cardContent {
      width: 100%;
      transition: 0.5s;
      background: #00000090;
      position: relative;
      overflow: hidden;
      .innerTopContent {
        ${Above.med`
          display: block;
        `}
        ${Below.med`
          display: none;
        `}
        .innerTopDescription {
          ${Above.med`
            transition: 0.5s;
            position: absolute;
            transform: translate(-50%, 50%);
            left: 50%;
            bottom: -50%;
        `}
        }
      }
      img {
        transition: 0.5s;
        z-index: 1;
        opacity: 0.6;
      }
    }
  }
  .cardBottom {
    ${Above.med`
      display:none
    `}
    ${Below.med`
      display: flex;
    `}
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    position: relative;
    z-index: 0;
    ${Above.med`
      ${'' /* transform: translateY(-160px); */}
      ${'' /* margin-top: -245px; */}
    `}
    .cardContent p {
      margin: 40px 0 20px;
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
      ${'' /* transform: translateY(0); */}
      .cardContent {
        ${Above.med`
          img {
            opacity: 0.2;
          }
        `}
        ${GlowTitle} {
          ${'' /* width: 100%; */}
          left: 2%;
          top: 0;
          transform: translate(2%, 0);
          font-size: 2em;
          line-height: 1.15;
        }
        .innerTopDescription {
          transform: translate(-50%, 50%);
          bottom: 50%;
        }
      }
    }
    .cardBottom {
      ${'' /* margin-top: 0; */}
      .cardContent {
        ${'' /* opacity: 1; */}
      }
    }
  }
`;

const ProjectsListing = () => {
  const { edges } = useProjectsQuery();

  return (
    <SwipeTransition direction="SwipeDown">
      <Grid>
        {edges.map(({ node }) => (
          <Card key={node.frontmatter.slug}>
            <div className="cardTop">
              <BorderWrapper>
                <div className="cardContent">
                  <CloudImg
                    img={node.frontmatter.cloud_ref}
                    media={node.frontmatter.media_type}
                    desc={node.frontmatter.image_desc}
                  />
                  <div className="innerTopContent">
                    <GlowTitle position="absolute">
                      {node.frontmatter.title}
                    </GlowTitle>
                    <div className="innerTopDescription">
                      <p>{node.frontmatter.description}</p>
                      <ButtonLinkTransitionFade
                        linkTo={`/projects${node.frontmatter.slug}`}
                      >
                        Read More
                      </ButtonLinkTransitionFade>
                    </div>
                  </div>
                </div>
              </BorderWrapper>
            </div>
            <div className="cardBottom">
              <div className="cardContent">
                <div className="titleBg" />
                <GlowTitle>{node.frontmatter.title}</GlowTitle>
                <p>{node.frontmatter.description}</p>
                <ButtonLinkTransitionFade
                  linkTo={`/projects${node.frontmatter.slug}`}
                >
                  Read More
                </ButtonLinkTransitionFade>
              </div>
            </div>
          </Card>
        ))}
      </Grid>
    </SwipeTransition>
  );
};

export default ProjectsListing;
