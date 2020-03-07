import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsListing from '../components/projectsListing';
import ProjectsArchive from '../components/projectsArchive';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <ProjectsListing />
    <ProjectsArchive />
  </Layout>
);

export default Projects;
