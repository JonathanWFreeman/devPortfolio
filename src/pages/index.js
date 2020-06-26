import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Models } from '../components/threejs';
import {
  LetterAnimation,
  Fade,
  Above,
  isMobile,
  useMousePosition,
} from '../components/utilities';

const HomeContent = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  ${Above.medium`
    flex-direction: row;
    align-items: center;
  `}
`;

const MainContent = styled.div`
  width: 100%;
  flex: 1 1 50%;
  padding-right: 2%;
  h1,
  h2 {
    margin: 0;
  }
`;

const SecondaryContent = styled.div`
  width: 100%;
  flex: 1 1 33%;
  position: relative;
`;

const CanvasModel = styled.div`
  position: absolute;
  height: 33%;
  width: 25%;
  top: 12%;
  z-index: 10;
  ${'' /* height: 60vh;
  width: 50vw;
  top: 10vh;
  left: 40vw;
  z-index: -10;
  opacity: 50%; */}
`;

const IndexPage = () => {
  const mousePosition = useMousePosition();
  const { x, y } = mousePosition;

  return (
    <Layout>
      <SEO title="Home" />
      <HomeContent>
        <MainContent>
          <h1>
            <LetterAnimation delay={1}>Hey,</LetterAnimation>
          </h1>
          <h2>
            <LetterAnimation delay={2}>I'm Jonathan</LetterAnimation>
          </h2>
          <h3>
            <LetterAnimation delay={3.5}>Front-End Developer</LetterAnimation>
          </h3>
          <Fade delay={5}>
            <p>
              I am a self taught developer who is always striving to better
              myself. I have worked as freelance and with agencies and I am
              always looking forward to the next opportunity that comes my way!
            </p>
            <p>
              In my free time when I'm not trying to learn something new, I
              enjoy playing video games, watching baseball, baking (mostly
              bread) and trying to keep my bonsais alive.
            </p>
          </Fade>
          {/* <p>Resume | Projects | Contact</p> */}
        </MainContent>
        <SecondaryContent>
          {!isMobile() && (
            <CanvasModel>
              <Models />
            </CanvasModel>
          )}
          <img
            // src="https://res.cloudinary.com/jwfreeman/image/upload/v1/Portfolio/image/jonathan_freeman_img.png"
            src="https://res.cloudinary.com/jwfreeman/image/upload/v1/Portfolio/image/test_k7jvol.png"
            alt="Jonathan Freeman"
            css={`
              filter: drop-shadow(${x / 100}px ${y / 100}px 2px red)
                drop-shadow(${(x / 200) * -1}px ${(y / 200) * -1}px 2px #03e9f4);
            `}
          />
          {/* <Image /> */}
        </SecondaryContent>
      </HomeContent>
    </Layout>
  );
};

export default IndexPage;
