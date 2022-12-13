import * as React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div className="container text-center">
        <div className="row">
          <div className="col bg-info">1 of 2</div>
          <div className="col bg-dark">2 of 2</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
