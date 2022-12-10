import * as React from 'react';
import { Parallax, Background } from 'react-parallax';

const Parallax = () => (
  <div style={styles}>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
  </div>
);
export default Parallax;
