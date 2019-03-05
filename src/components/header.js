import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  black,
  white,
  brand,
  lightAccent,
  light,
  darkAccent,
  withGutters,
  dark,
} from './styles';

const Header = ({ siteTitle }) => (
  <div
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
