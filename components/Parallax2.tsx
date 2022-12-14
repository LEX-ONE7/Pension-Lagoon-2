import * as React from 'react';
import { Parallax } from 'react-parallax';
const image2 =
  'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/30130009/water-1024x716.jpeg';

const Parallax2 = () => (
  <Parallax className="image" bgImage={image2} strength={600}>
    <div className="content">
      <span className="img-txt display-1 fw-bold  text-light text-center">
        Activités
      </span>
    </div>
  </Parallax>
);
export default Parallax2;
