import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { color1 } from './colors';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `${color1}`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            fontFamily: 'Raleway',
            fontSize: 64,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
