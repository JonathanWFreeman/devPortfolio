import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { Animation } from '../components/utilities';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      css={`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      `}
    >
      <div>
        <h1
          css={`
            margin: 0;
          `}
        >
          <Animation delay={1}>Hey,</Animation>
        </h1>
        <h2
          css={`
            margin: 0;
          `}
        >
          <Animation delay={2}>I'm Jonathan</Animation>
        </h2>
        <h3>
          <Animation delay={3.5}>Front-End Developer</Animation>
        </h3>
        <p>Jango chewbacca yoda hutt ben hoth kamino jango darth</p>
        <p>Jango chewbacca yoda hutt ben hoth kamino jango darth</p>
        <p>Jango chewbacca yoda hutt ben hoth kamino jango darth</p>
        <p>
          Video games, baseball, bread baking and trying and keep my bonsai
          alive
        </p>
        <p>Resume | Projects | Contact</p>
      </div>
      <div>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
        <Image />
        <Link to="/projects/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
