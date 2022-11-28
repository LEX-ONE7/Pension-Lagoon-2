import * as React from 'react';
import BoxActivities from '../components/activities/BoxActivities';
import BoxTerre from '../components/activities/BoxTerre';
import HeaderActivites from '../components/activities/HeaderActivites';
import Navbar from '../components/Navbar';

const Activites = () => {
  return (
    <div>
      <Navbar />
      <BoxActivities />
      <HeaderActivites />
      <BoxTerre />
    </div>
  );
};
export default Activites;
