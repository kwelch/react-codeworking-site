import React from 'react';
import { css } from '@emotion/core';

export default function Loader({ css: passedCss, ...props }) {
  return (
    <div css={[loaderContainer, passedCss]} {...props}>
      <img
        css={loader}
        alt="loader"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACdJREFUCB1j9Pf3/88ABMmMjCCKgQlMIhGMu3btAquY9mMDWBhDBQAutwfDrUlKzQAAAABJRU5ErkJggg=="
      />
    </div>
  );
}

export const loader = css({
  filter: 'blur(25px)',
  width: '100%',
  height: '100%',
});

export const loaderContainer = css({
  overflow: 'hidden',
  width: '100%',
  height: '100%',
});
