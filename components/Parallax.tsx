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
        >
          <img src="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"/>
        </div>
      </div>
    </div>
  );
};
export default Parallax;
