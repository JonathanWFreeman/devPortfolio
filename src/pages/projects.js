import React from 'react';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import ProjectsListing from '../components/layouts/projects/projectsListing';

const Projects = () => (
  <Layout transitionType="swipe" transitionDirection="down">
    <SEO title="Projects" />
    <h1>Projects</h1>
    <ProjectsListing />
  </Layout>
);

export default Projects;
