import * as React from 'react';
import { Parallax } from 'react-parallax';
const image1 =
  'https://images.unsplash.com/photo-1532408840957-031d8034aeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
const ImageOne = () => (
  <Parallax className="image" bgImage={image1} strength={500}>
    <div className="content">
      <span className="img-txt">A trip for space</span>
    </div>
  </Parallax>
);
export default ImageOne;
