import React from 'react';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { withGutters } from '../lib/styles';
import ExternalLink from './ExternalLink';

const Footer = ({ theme }) => {
  const styles = {
    wrapper: {
      backgroundColor: theme.colors.dark,
      padding: '0',
      marginTop: '.5rem',
      color: theme.colors.light,
    },
    inner: {
      padding: '1rem 0',
      a: {
        color: theme.colors.light,
        textDecoration: 'none',
        fontStyle: 'italic',

        '&:hover,&:focus': {
          color: theme.colors.light,
          textDecoration: 'underline',
        },
      },
    },
    footerNav: {
      backgroundColor: theme.colors.darkAccent,
      ul: {
        color: theme.colors.light,
        padding: '1.28rem 0',
        display: 'flex',
        alignItems: 'stretch',
        listStyle: 'none',
        li: {
          paddingRight: '1.25rem',
          a: {
            color: theme.colors.light,
            textDecoration: 'none',

            '&:hover,&:focus': {
              color: theme.colors.light,
              textDecoration: 'underline',
            },
          },
        },
      },
    },
  };
  return (
    <footer css={styles.wrapper}>
      <div css={styles.footerNav}>
        <ul css={[withGutters]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coc">Code of Conduct</Link>
          </li>
        </ul>
      </div>
      <div css={[withGutters, styles.inner]}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <ExternalLink href="https://www.gatsbyjs.org">Gatsby</ExternalLink> |
        Hosted by{' '}
        <ExternalLink href="https://netlify.com">Netlify</ExternalLink> |
        Contribute on{' '}
        <ExternalLink href="https://github.com/kwelch/react-codeworking-site">
          GitHub
        </ExternalLink>
      </div>
    </footer>
  );
};

export default withTheme(Footer);
