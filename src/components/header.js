import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { light, withGutters, dark, mq } from './styles';

const Header = ({ siteTitle }) => (
  <header
    css={{
      background: dark,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      css={[
        withGutters,
        {
          padding: `1.45rem 0`,
        },
      ]}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: light,
            fontFamily: 'Raleway',
            fontSize: 32,
            textDecoration: `none`,
            [mq('medium')]: {
              fontSize: 64,
            },
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
