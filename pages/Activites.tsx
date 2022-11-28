import * as React from 'react';
import BoxMer from '../components/activities/BoxMer';
import BoxTerre from '../components/activities/BoxTerre';
import HeaderActivites from '../components/activities/HeaderActivites';
import Navbar from '../components/Navbar';

const Activites = () => {
  return (
    <div>
      <Navbar />
      <HeaderActivites />
      <BoxMer />
      <BoxTerre />
    </div>
  );
};
