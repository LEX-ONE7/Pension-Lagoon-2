import * as React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SliderAuto from './components/SliderAuto';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <SliderAuto collection="header-carrousel" />
      <Footer />
    </div>
  );
}
