import React from 'react';
import { css } from '@emotion/core';
import { thumbnail } from "./styles";

export default function Loader() {
  return (
    <div css={[thumbnail, loaderContainer]}>
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
  width: '71%'
});

export const loaderContainer = css({
  overflow: 'hidden'
});
