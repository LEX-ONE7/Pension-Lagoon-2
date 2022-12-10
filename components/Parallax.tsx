import * as React from 'react';
import  {Parallax  } from 'react-parallax';

const ImageOne = () => {
      <Parallax
        bgImage=`url("https://via.placeholder.com/500")` 
        strength={500}
      >
        Content goes here. Parallax height grows with content height.
      </Parallax>
  );
};
export default ImageOne;
