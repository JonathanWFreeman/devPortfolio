import React from 'react';

import Layout from '../components/layouts/layout';
import SEO from '../components/seo';
import ProjectsListing from '../components/layouts/projects/projectsListing';

const Projects = () => (
  <Layout transitionType="swipe" transitionDirection="down">
    <SEO title="Projects" />
    <h1>Projects</h1>
    <h2 style={{ fontSize: '1em', marginBottom: '2%' }}>
      Personal projects that I work on in my free time.
    </h2>
    <ProjectsListing />
  </Layout>
);

export default Projects;
