import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Parallax1 from '../components/Parallax';
import BoxBungalow from '../components/rooms/BoxBungalow';

const Bungalows = () => {
  return (
    <div>
      <Navbar />
      <Parallax1 />
      <BoxBungalow />
      <Footer />
    </div>
  );
};
export default Bungalows;
