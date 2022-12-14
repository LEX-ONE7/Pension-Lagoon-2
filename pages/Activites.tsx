import * as React from 'react';
import BoxActivities from '../components/activities/BoxActivities';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Parallax2 from '../components/Parallax2';

const Activites = () => {
  return (
    <div>
      <Navbar />
      <Parallax2 />

      <BoxActivities />
      <Footer />
    </div>
  );
};
export default Activites;
