import * as React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Parallax from './components/Parallax';
import SliderAuto from './components/SliderAuto';
import Accueil from './pages/Accueil';
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Parallax />
      <SliderAuto collection="header-carrousel" />
      <Accueil />
      <Footer />
    </div>
  );
}
