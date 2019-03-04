import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="page-container">
        <h2>¯\_(ツ)\_/¯</h2>

        <p>This route may not be found, but we hope to find you soon.</p>
      </div>
    </Layout>
  );
}
