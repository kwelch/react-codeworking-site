import { css } from '@emotion/core';
import { darken, lighten, rgba } from 'polished';

// Colors
export const black = '#202020';
export const white = '#FFFFFF';
export const light = '#FAFAF9';
export const lightAccent = '#AE8E7B';
export const brand = '#82AEBE';
export const dark = '#2F3F55';
export const darkAccent = '#537183';
export const gray = '#8A9093';
export const grays = {
  xlight: lighten(0.35, gray),
  light: lighten(0.2, gray),
  mid: gray,
  dark: darken(0.2, gray),
  xdark: darken(0.35, gray),
};
export const colors = {
  black,
  white,
  brand,
  light,
  lightAccent,
  dark,
  darkAccent,
  grays,
};

export const defaultTransition = (prop = 'all') => `${prop} 130ms ease-in`;

// Shadows
export const shadow = `0 0 20px -10px ${rgba(black, 0.375)}`;
export const shadowFocus = `0 0 20px -10px ${rgba(black, 0.5)}`;

// Media query breakpoints
export const breakpoints = {
  medium: 640,
  large: 1024,
  xlarge: 1260,
};
export const mq = (bp) =>
  breakpoints.hasOwnProperty(bp)
    ? `@media (min-width: ${breakpoints[bp]}px)`
    : '&';

// Global styles
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
  p: {
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: 0,
    marginInlineEnd: 0,
    WebkitMarginBefore: '1em',
    WebkitMarginAfter: '1em',
    WebkitMarginStart: 0,
    WebkitMarginEnd: 0,
  },
  a: {
    color: dark,

    '&:hover,&:active,&:visited': {
      color: darken('0.2', dark),
    },
  },
};

// @todo: move to components
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
