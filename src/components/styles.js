import { css } from '@emotion/core';
import { underline } from 'ansi-colors';

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
    fontFamily: `'Roboto', 'Roboto Light', 'Fira Sans', 'Droid Sans', sans-serif`,
  },
  body: {
    color: dark,
    backgroundColor: light,
  },
};

export const withGutters = css({
  margin: `0 auto`,
  maxWidth: 960,
});
