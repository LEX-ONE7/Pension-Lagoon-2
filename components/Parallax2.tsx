import * as React from 'react';
import { Parallax } from 'react-parallax';
const image2 =
  'https://images.unsplash.com/photo-1532408840957-031d8034aeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80';
  
const Para = () => (
  <Parallax className="image" bgImage={image2} strength={600}>
    <div className="content">
      <span className="img-txt display-1 fw-bold  text-light text-center">
        Bungalows & Chambres
      </span>
    </div>
  </Parallax>
);
export default Para;
