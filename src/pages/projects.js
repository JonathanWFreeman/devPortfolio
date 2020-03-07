import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ProjectsArchive from '../components/projectsArchive';

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <ProjectsArchive />
  </Layout>
);

export default Projects;
