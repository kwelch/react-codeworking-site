import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import Header from './header';
import { dark, light, withGutters, globalSyles, black } from './styles';

const Layout = ({ children }) => (
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Global styles={globalSyles} />
        {children}
        <div
          css={{
            backgroundColor: dark,
            padding: '.35rem 0',
            marginTop: '.5rem',
            color: light,
          }}
        >
          <footer
            css={[
              withGutters,
              {
                a: {
                  color: light,
                  textDecoration: 'none',
                  fontStyle: 'italic',

                  '&:hover,&:active,&:visited': {
                    color: light,
                    textDecoration: 'underline',
                  },
                },
              },
            ]}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> | Hosted by{' '}
            <a href="https://netlify.com">Netlify</a> | Contribute on{' '}
            <a href="https://github.com/kwelch/react-codeworking-site">
              GitHub
            </a>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
