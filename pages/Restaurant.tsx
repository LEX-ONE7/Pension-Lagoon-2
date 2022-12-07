import * as React from 'react';
import BoxEvents from '../components/events/BoxEvents';
import HeaderEvents from '../components/events/HeaderEvents';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Restaurant = () => {
  return (
    <div>
      <Navbar />
      <BoxEvents />
      <Footer />
    </div>
  );
};
export default Restaurant;
