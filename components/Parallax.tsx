import * as React from 'react';
import { render } from 'react-dom';
import { Parallax, Background } from 'react-parallax';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};
const Parallax = () => (
  <div style={styles}>
    <Parallax bgImage="image1" strength="500">
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
  </div>
);
export default Parallax;
