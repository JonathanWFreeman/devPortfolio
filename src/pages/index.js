import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { LetterAnimation, Fade, Above } from '../components/utilities';

const HomeContent = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;
  ${Above.small`
    flex-direction: row;
  `}
`;

const MainContent = styled.div`
  width: 100%;
  flex: 1 1 66%;
  padding-right: 2%;
  h1,
  h2 {
    margin: 0;
  }
`;

const SecondaryContent = styled.div`
  width: 100%;
  flex: 1 1 33%;
`;

const IndexPage = () => (
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
            I started my journey as a self taught developer a few years ago.
            Since then I have worked at a small agency and done some freelance
            work.
          </p>
          <p>
            In my free time when I'm not trying to learn something new, I enjoy
            playing video games, watching baseball, baking (mostly bread) and
            trying to keep my bonsai's alive.
          </p>
        </Fade>
        {/* <p>Resume | Projects | Contact</p> */}
      </MainContent>
      <SecondaryContent>
        <Image />
      </SecondaryContent>
    </HomeContent>
  </Layout>
);

export default IndexPage;
