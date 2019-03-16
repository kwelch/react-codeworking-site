import { css } from '@emotion/core';
import { darken } from 'polished';

export const black = '#202020';
export const white = '#FFFFFF';

export const light = '#FAFAF9';
export const lightAccent = '#AE8E7B';
export const brand = '#82AEBE';
export const dark = '#2F3F55';
export const darkAccent = '#537183';

export const globalSyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html,body': {
    height: '100%',
    fontFamily: `'Roboto', 'Roboto Light', 'Fira Sans', 'Droid Sans', sans-serif`,
  },
  // Gatsby's wrapper elements need a declared height for flex containers to work properly
  '#___gatsby,#___gatsby>[role="group"]': {
    height: '100%',
  },
  body: {
    color: dark,
    backgroundColor: light,
  },
};

export const footerLinks = css({
  marginLeft: '105px',
});

export const thumbnail = css({
  float: 'left',
  width: '100px',
  margin: '3px',
});

export const layoutWrapper = css({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const layoutMain = css({
  flexGrow: 1,
});

export const withGutters = css({
  margin: `0 auto`,
  width: `calc(100% - 30px)`,
  maxWidth: 960,
});

export const styleLinks = ({ color = dark }) => ({
  a: {
    color: color,

    '&:hover,&:active,&:visited': {
      color: darken('0.2', color),
    },
  },
});

export const breakpoints = {
  medium: 640,
  large: 1024,
  xlarge: 1260,
};

export const mq = (bp) =>
  breakpoints.hasOwnProperty(bp)
    ? `@media (min-width: ${breakpoints[bp]}px)`
    : '&';
