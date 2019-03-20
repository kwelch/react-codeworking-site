import { css } from '@emotion/core';
import { darken, lighten, rgba } from 'polished';

// Colors
export const gray = '#8A9093';
export const colors = {
  black: '#202020',
  white: '#FFFFFF',
  brand: '#82AEBE',
  light: '#FAFAF9',
  lightAccent: '#AE8E7B',
  dark: '#2F3F55',
  darkAccent: '#537183',
  grays: {
    xlight: lighten(0.35, gray),
    light: lighten(0.2, gray),
    mid: gray,
    dark: darken(0.2, gray),
    xdark: darken(0.35, gray),
  },
};

// Fonts
export const fontFamilies = {
  primary: `'Roboto', 'Roboto Light', 'Fira Sans', 'Droid Sans', sans-serif`,
  secondary: `'Raleway', helvetica, arial, sans-serif`,
};

// Shadows
export const shadows = {
  boxShadow: `0 0 20px -10px ${rgba(colors.black, 0.375)}`,
  boxShadowFocus: `0 0 20px -10px ${rgba(colors.black, 0.5)}`,
};

// Media query breakpoints
export const breakpoints = (bps = {}) => ({
  medium: 640,
  large: 1024,
  xlarge: 1260,
  ...bps,
});

// Global styles
export const globalStyles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'html,body': {
    height: '100%',
    fontFamily: fontFamilies.primary,
  },
  // Gatsby's wrapper elements need a declared height for flex containers to work properly
  '#___gatsby,#___gatsby>[role="group"]': {
    height: '100%',
  },
  body: {
    color: colors.dark,
    backgroundColor: colors.light,
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
    color: colors.dark,
    '&:hover,&:focus': {
      color: darken('0.2', colors.dark),
    },
  },
};

// Mixins + functions
export const mq = (bp) => {
  const bps = breakpoints();
  return bps.hasOwnProperty(bp) ? `@media (min-width: ${bps[bp]}px)` : '&';
};

export const withGutters = css({
  margin: `0 auto`,
  width: `calc(100% - 30px)`,
  maxWidth: 960,
});

export const defaultTransition = (prop = 'all') => `${prop} 130ms ease-in`;

export const styleLinks = ({ color = colors.dark }) => ({
  a: {
    color,
    '&:hover,&:focus': {
      color: darken('0.2', color),
    },
  },
});

export const theme = {
  globalStyles,
  colors,
  fontFamilies,
  shadows,
};
