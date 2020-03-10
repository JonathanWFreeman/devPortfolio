import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsListing from '../components/projectsListing';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <ProjectsListing />
  </Layout>
);

export default Projects;
