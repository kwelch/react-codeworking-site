import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { withGutters } from '../lib/styles';

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div css={[withGutters]}>
        <h1 css={{ margin: '1.5rem 0' }}>¯\_(ツ)\_/¯</h1>

        <h2 css={{ margin: '1.2rem 0' }}>
          This route may not be found, but we hopefully we will find you at the
          next event.
        </h2>
      </div>
    </Layout>
  );
}
