import * as React from 'react';
import SliderAuto from '../SliderAuto';

const BoxBungalow = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="col-12 ">
        <h2 className="mt-4 ">Bungalows & Chambres</h2>
      </div>
    </div>
    <div className="container py-4">
      <div className="p-5 mb-4 bg-white rounded-5">
        <div className="container-fluid py-5">
          <h2 className="display-5 fw-bold">Bungalows</h2>
          <p className="col-md-12 fs-4">
            Les Bungalows Pilotis bénéficient d’une grande terrasse solarium
            privée et d’un accès direct au lagon.
          </p>
          <SliderAuto collection="layout-bungalows" />

          <button
            className="btn btn-info btn-lg rounded-3 btn-outline-light mt-4"
            type="button"
          >
            Réserver
          </button>
        </div>
      </div>
      <div className="p-5 mb-4 bg-light rounded-5">
        <div className="container-fluid py-2">
          <h2 className="display-5 fw-bold">Chambres</h2>
          <p className="col-md-8 fs-4">
            Quelles que soient leur catégorie et leur situation, toutes nos
            chambres vous offrira un concentré de confort.
          </p>
          <SliderAuto collection="Chambres" />
          <button
            className="btn btn-info btn-lg rounded-3 btn-outline-light mt-4"
            type="button"
          >
            Réserver
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <img src ="https://www.yestahiti.fr/_client_files/infos_voyageurs/chaud-froid.jpg"/>
            <h2>Change the background</h2>
            <p>
              <p>
                Equipées d’un TV, d’un mini-bar, de WC et salle de bains ou
                douche. Un accès WIFI gratuit est accessible dans totues nos
                chambres et bungalows. Hotel ouvert 7j/7
              </p>
              .
            </p>
            <button className="btn btn-outline-light" type="button">
              Commander
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Add borders</h2>
            <p>
              Or, keep it light and add a border for some added definition to
              the boundaries of your content. Be sure to look under the hood at
              the source HTML here as we've adjusted the alignment and sizing of
              both column's content for equal-height.
            </p>
            <button className="btn btn-outline-secondary" type="button">
              Commander
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 mb-4 bg-light rounded-5">
        <div className="container-fluid py-2">
          <SliderAuto collection="Chambres" />
          <h2 className="display-5 fw-bold">Repas</h2>
          <p className="col-md-8 fs-4">
            Petit Déjeuner : 1000 fr/Jour <br />
            Demi-Pension : 2500 fr/Jour <br />
            Pension Complète: 4000 fr/Jour{' '}
          </p>
          <button className="btn btn-info btn-lg rounded-3" type="button">
            Réserver
          </button>
          <div className="col-12  bg-warning">
            <h6>Autres</h6>

            <p>Garde Animaux : 2500 fr</p>
          </div>
        </div>
      </div>

      <footer className="pt-3 mt-4 text-muted border-top">&copy; 2022</footer>
    </div>
  </div>
);
export default BoxBungalow;
