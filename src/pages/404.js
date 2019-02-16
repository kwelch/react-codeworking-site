import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>¯\_(ツ)_/¯</h1>
    <p>This route may not be found, but we hope to find you soon.</p>
  </Layout>
);

export default NotFoundPage;
