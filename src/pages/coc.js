import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { withGutters, darkAccent, styleLinks } from '../lib/styles';

export default function HomePage(props) {
  return (
    <Layout>
      <div className="page-container">
        <SEO title="Code of Conduct" />
        <div css={[withGutters, { marginBottom: '2rem' }]}>
          <h1 css={{ marginBottom: '1rem' }}>Code of conduct</h1>
          <p css={[styleLinks({ color: darkAccent })]}>
            React CodeWorking follows the{' '}
            <a href="http://confcodeofconduct.com/">
              conference code of conduct
            </a>
            . Violations of the code of conduct will result in being asked to
            leave from the event and banning from future events.
          </p>
        </div>
      </div>
    </Layout>
  );
}
