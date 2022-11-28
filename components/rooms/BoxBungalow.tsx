import * as React from 'react';
import SliderAuto from '../SliderAuto';

const BoxBungalow = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="col-12 col-md-8 bg-success">
        <h2>Bungalows & Chambres</h2>
        <SliderAuto />
      </div>
      <div className="col-12 col-md-8 bg-info ">
        <p>Bungalows</p>
        <SliderAuto />
      </div>
      <div className="col-12 col-md-8 bg-warning">
        <h4>Chambres</h4>
        <SliderAuto />
      </div>
    </div>
  </div>
);
export default BoxBungalow;
