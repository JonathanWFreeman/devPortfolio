import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Archive from '../components/archive';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <Archive />
  </Layout>
);

export default Projects;
