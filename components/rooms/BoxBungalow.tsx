import * as React from 'react';
import SliderAuto from '../SliderAuto';

const BoxBungalow = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="container py-4">
        <div className="p-5 mb-4 bg-info rounded-5">
          <div className="container-fluid">
            <h2 className="display-6 fw-bold ">Bungalows</h2>
            <p className="col-md-12 fs-4 text-white">
              Les Bungalows Pilotis bénéficient d’une grande terrasse solarium
              privée et d’un accès direct au lagon.
            </p>
            <SliderAuto collection="layout-bungalows" />
            <p className="float-end">Garde Animaux : 2500 fr/Jour</p>

            <p className="fs-4 mt-4 text-white"></p>

            <button
              className="btn btn-lg rounded-3 btn-outline-light mt-4"
              type="button"
            >
              Réserver
            </button>
          </div>
        </div>

        <div className="p-5 mb-4 bg-light rounded-5">
          <div className="container-fluid">
            <h2 className="display-6 fw-bold">Chambres</h2>
            <p className=" col-md-12 fs-4 text-info">
              Quelles que soient leur catégorie et leur situation, toutes nos
              chambres vous offrira un concentré de confort.
            </p>
            <SliderAuto collection="Chambres" />
            <p className="float-end">Garde Animaux : 2500 fr/Jour</p>

            <button
              className="btn btn-info btn-lg rounded-3 btn-outline-light mt-4"
              type="button"
            >
              Réserver
            </button>
          </div>
        </div>
      </div>

    

        <footer className="pt-3 mt-4 text-muted border-top">&copy; 2022</footer>
      </div>
    </div>
  
);
export default BoxBungalow;
