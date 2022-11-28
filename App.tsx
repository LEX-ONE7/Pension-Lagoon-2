import * as React from 'react';
import Navbar from './components/Navbar';
import SliderAuto from './components/SliderAuto';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <SliderAuto collection="header-carrousel" />

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
