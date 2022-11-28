import * as React from 'react';
import BoxActivities from '../components/activities/BoxActivities';
import HeaderActivites from '../components/activities/HeaderActivites';
import Navbar from '../components/Navbar';

const Activites = () => {
  return (
    <div>
      <Navbar />
      <BoxActivities />
      <HeaderActivites />
    </div>
  );
};
export default Activites;
