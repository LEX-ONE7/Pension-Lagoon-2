import * as React from 'react';
const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-info">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        LAGOON LODGE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bungalows">
              Bungalows & Chambres
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/activites">
              Activités
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/evenements">
              Évènements
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/evenements">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
