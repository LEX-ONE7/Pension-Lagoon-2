import * as React from 'react';

const Parallax = () => {
  return (
    <div id="imPageRow_2" className="imPageRow imParallax">
      <div style={{position: "absolute; top: 0; left: 0; right: 0; bottom: 0", overflow: "hidden",}}>
        <div
          id="imPageRowGraphics_2"
          className="imParallaxBackground"
          data-parallax-direction="down"
          data-parallax-zoom="140"
        ></div>
      </div>
    </div>
  );
};
export default Parallax;
