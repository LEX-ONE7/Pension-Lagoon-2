import * as React from 'react';
import BoxEvents from '../components/events/BoxEvents';
import HeaderEvents from '../components/events/HeaderEvents';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Evenements = () => {
  return (
    <div>
      <Navbar />
      <HeaderEvents />
      <BoxEvents/>
      <Footer />

    </div>
  );
};
export default Evenements;
