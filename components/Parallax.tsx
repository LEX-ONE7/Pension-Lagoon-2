import * as React from 'react';
import { Parallax, Background } from 'react-parallax';

const Parallax = () => (
  <Parallax
    blur={{ min: -15, max: 15 }}
    bgImage={
      (src =
        'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
    }
    bgImageAlt="the dog"
    strength={-200}
  >
    Blur transition from min to max
    <div style={{ height: '200px' }} />
  </Parallax>
);
