import * as React from 'react';
import SliderAuto from '../SliderAuto';

const BoxBungalow = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="col-12 col-md-8 bg-success">
        <h2>Bungalows & Chambres</h2>
        <p>
       
        </p>
        <p>
          Equipées d’un TV, d’un mini-bar, de WC et salle de bains ou douche. Un
          accès WIFI gratuit est accessible dans totues nos chambres et
          bungalows. Hotel ouvert 7j/7
        </p>
        <img src="" />
      </div>
      <div className="col-12 col-md-8 bg-info ">
        <h3>Bungalows</h3>
        <SliderAuto collection="layout-bungalows" />
      </div>
      <div className="col-12 col-md-8 bg-warning">
        <h4>Chambres</h4>
        <SliderAuto collection="Chambres" />
      </div>
      <div className="col-12 col-md-8 bg-warning">
        <h5>Repas</h5>
        <p>
          Petit Déjeuner : 1000 fr/Jour Demi-Pension : 2500 fr/Jour Pension
          Complète: 4000 fr/Jour{' '}
        </p>
      </div>
      <div className="col-12 col-md-8 bg-warning">
        <h6>Autres</h6>

        <p>Garde Animaux : 2500 fr</p>
      </div>
    </div>
  </div>
);
export default BoxBungalow;
