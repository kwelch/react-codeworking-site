import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Header from './Header';
import Footer from './Footer';
import { theme } from '../lib/styles';

const Layout = ({ children }) => {
  const styles = {
    layoutWrapper: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    layoutMain: {
      flexGrow: 1,
    },
  };
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={theme}>
          <Global styles={(theme) => theme.globalStyles} />
          <div css={styles.layoutWrapper}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main css={styles.layoutMain}>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
