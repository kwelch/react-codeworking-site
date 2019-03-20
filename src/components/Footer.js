import React from 'react';
import { withTheme } from 'emotion-theming';
import { withGutters } from '../lib/styles';
import ExternalLink from './ExternalLink';

const Footer = ({ theme }) => {
  const styles = {
    wrapper: {
      backgroundColor: theme.colors.dark,
      padding: '.35rem 0',
      marginTop: '.5rem',
      color: theme.colors.light,
    },
    inner: {
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
  };
  return (
    <footer css={styles.wrapper}>
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
