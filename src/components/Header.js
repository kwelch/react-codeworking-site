import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';
import { withGutters, mq } from '../lib/styles';

const Header = ({ siteTitle = '', theme }) => {
  const styles = {
    wrapper: {
      background: theme.colors.dark,
      marginBottom: `1.45rem`,
    },
    inner: {
      padding: `1.45rem 0`,
    },
    titleLink: {
      color: theme.colors.white,
      fontFamily: 'Raleway',
      fontSize: 32,
      textDecoration: `none`,
      '&:hover,&:focus': {
        color: theme.colors.white,
      },
      [mq('medium')]: {
        fontSize: 64,
      },
    },
  };
  return (
    <header css={styles.wrapper}>
      <div css={[withGutters, styles.inner]}>
        <h1 style={{ margin: 0 }}>
          <Link to="/" css={styles.titleLink}>
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default withTheme(Header);
