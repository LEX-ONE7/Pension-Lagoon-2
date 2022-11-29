import * as React from 'react';
import SliderAuto from '../SliderAuto';

const BoxBungalow = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="col-12  bg-success">
        <h2>Bungalows & Chambres</h2>
        <p></p>
        <p>
          Equipées d’un TV, d’un mini-bar, de WC et salle de bains ou douche. Un
          accès WIFI gratuit est accessible dans totues nos chambres et
          bungalows. Hotel ouvert 7j/7
        </p>
        <img src="" />
      </div>
      <div className="col-12  bg-info ">
        <h3 className="fs-4">Bungalows</h3>
        <SliderAuto collection="layout-bungalows" />
      </div>
      <div className="col-12  bg-warning">
        <h4 className="fs-4">Chambres</h4>
        <SliderAuto collection="Chambres" />
      </div>
      <div className="col-12  bg-warning">
        <h5>Repas</h5>
        <p>
          Petit Déjeuner : 1000 fr/Jour <br />
          Demi-Pension : 2500 fr/Jour <br />
          Pension Complète: 4000 fr/Jour{' '}
        </p>
      </div>
      <div className="col-12  bg-warning">
        <h6>Autres</h6>

        <p>Garde Animaux : 2500 fr</p>
      </div>
    </div>
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Jumbotron example</span>
        </a>
      </header>

      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Bungalows</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Change the background</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
            <button className="btn btn-outline-light" type="button">
              Example button
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
              Example button
            </button>
          </div>
        </div>
      </div>

      <footer className="pt-3 mt-4 text-muted border-top">&copy; 2022</footer>
    </div>
  </div>
);
export default BoxBungalow;
