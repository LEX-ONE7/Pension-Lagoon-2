import * as React from 'react';
import BoxHappyBirthday from '../components/events/BoxEvents';
import BoxHoneyMoon from '../components/events/BoxHoneyMoon';
import BoxWedding from '../components/events/BoxWedding';
import HeaderEvents from '../components/events/HeaderEvents';
import Navbar from '../components/Navbar';

const Evenements = () => {
  return (
    <div>
      <Navbar />
      <HeaderEvents />
      <BoxWedding />
      <BoxHappyBirthday />
      <BoxHoneyMoon />
    </div>
  );
};
export default Evenements;
