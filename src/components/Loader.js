import React from 'react';
import { loader, loaderContainer, thumbnail } from "./styles";

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
