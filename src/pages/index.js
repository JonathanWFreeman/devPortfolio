import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layouts/layout';
import Image from '../components/image';
import SEO from '../components/seo';

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
          Hey,
        </h1>
        <h2
          css={`
            margin: 0;
          `}
        >
          I'm Jonathan
        </h2>
        <h4>Front-End Developer</h4>
      </div>
      <div>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
        <Image />
        <Link to="/projects/">Go to page 2</Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
