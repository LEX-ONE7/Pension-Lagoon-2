import * as React from 'react';
import { Parallax } from 'react-parallax';

const ImageOne = () => (
  <Parallax bgImage={`url("https://via.placeholder.com/500")`} strength={500}>
    <div className="content">
      <span className="img-txt">A trip for space</span>
    </div>
  </Parallax>
);
export default ImageOne;
