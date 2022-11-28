import * as React from 'react';
import Navbar from '../components/Navbar';
import BoxBungalow from '../components/rooms/BoxBungalow';
import BoxChambre from '../components/rooms/BoxChambre';
import BoxRepas from '../components/rooms/BoxRepas';
import BoxServices from '../components/rooms/BoxServices';

const Bungalows = () => {
  return (
    <div>
      <Navbar />
      <BoxBungalow />
      <BoxChambre />
      <BoxRepas />
      <BoxServices />
    </div>
  );
};
export default Bungalows;
